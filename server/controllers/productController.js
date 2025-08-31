import { Product } from "../models/productModel.js";
import { cloudinaryInstance } from "../config/cloudinary.js";
import { Category } from "../models/categoryModel.js";

export const getallProducts = async (req, res, next) => {
   try {
    const { category, limit = 50 } = req.query; // optional filters from query

    const filter = {};
    if (category) filter.category = category; // Filter by category if provided
    
    // if (category) {
    //   const catDoc = await Category.findOne({ slug: category }); 
    //   if (catDoc) filter.category = catDoc._id;
    // }

    const productList = await Product.find(filter)
      .select("-description -stock -isActive -admin")
      .limit(Number(limit))
      .sort({ createdAt: -1 });

    res.json({ data: productList, message: "Products listed!" });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message || "Internal server error",
    });
  }
};  

export const createProducts = async (req,res,next) => {
    try {
        const { title, category, description, stock, price, unit, discount } = req.body;

        if (!title || !category || !description || !stock || !price) {
          return res.status(400).json({ message: "Please fill in all required fields." });
        }

        // Image presence check
        if (!req.file || !req.file.buffer) {
          return res.status(400).json({ message: "Product image is required." });
        }

        // Upload img to Cloudinary
        const streamUpload = () =>
          new Promise((resolve, reject) => {
            const stream = cloudinaryInstance.uploader.upload_stream(
              {
                folder: "grocery-app/products",
                resource_type: "image",
              },
              (error, result) => {
                if (error) reject(error);
                else resolve(result);
              }
            );
            stream.end(req.file.buffer);
          });

        const uploadResult = await streamUpload();
          
        // Save product to DB
        const newProduct = await Product.create({
          title,
          category,
          description,
          stock,
          price,
          unit,
          discount,
          image: uploadResult.secure_url,
        });

        return res.status(201).json({ data: newProduct, message: "Product created successfully!" });
  } catch (error) {
       console.error("Product creation error:", error);
       res.status(error.statusCode || 500).json({ message: error.message || "Internal server error" });
    }
}

export const productDetails = async (req,res,next) => {
    try {        
        
        //fetching specific product with it's id
        const {productId} = req.params

        const productDetails = await Product.findById(productId)
        
        if (!productDetails) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.json({ data:productDetails, message:"Product details fetched!"})

    } catch (error) {
        res.status(error.statusCode || 500).json({ message: error.message || "Internal server error" });
    }
}

export const groupProductsHome = async (req,res,next) => {
  try {
    const categories = await Category.find().sort({ order: 1 }).limit(4); // or however many sections we want   
    const homeData = await Promise.all(
      categories.map(async (cat) => {
        const products = await Product.find({ category: cat._id })
          .select("-description -stock -isActive -admin")
          .limit(6)
          .sort({ createdAt: -1 });
      
          return {
          id: cat._id,      // helpful for frontend
          category: cat.name,   // category display name
          slug: cat.slug,   // in case you want routes like /categories/:slug
          products,
        };

      })
    );
    
    res.json(homeData);

  } catch (error) {
     console.error("groupProductsHome error:", error);
    res.status(500).json({ message: error.message || "Server error" });
  }
};

export const updateMovies = async (req, res) => {
    try {
        const { movieId } = req.params; // Get movie ID from URL
        let updatedData = req.body;

        // Convert form-data fields into JSON format
        if (typeof updatedData === "object") {
            updatedData = JSON.parse(JSON.stringify(updatedData));
        }

        // If an image is uploaded, upload it to Cloudinary
        if (req.file) {
            const uploadResult = await cloudinaryInstance.uploader.upload(req.file.path)
            console.log("cloudinary update response====",uploadResult);
            updatedData.image = uploadResult.url; // Store Cloudinary URL
        }

        // Normalize missing fields
          if (!updatedData.cast || updatedData.cast.length === 0) {
          updatedData.cast = ["NA"];
        }
        if (!updatedData.directedBy) {
          updatedData.directedBy = "NA";
        }

        // Find and update the movie
        const updatedMovie = await Movie.findByIdAndUpdate(
            movieId,
            { $set: updatedData },
            { new: true, runValidators: true }
        );

        if (!updatedMovie) {
            return res.status(404).json({ message: "Movie not found" });
        }

        res.status(200).json({ data: updatedMovie, message: "Movie updated successfully!" });

    } catch (error) {
        console.error(error);
        res.status(error.statusCode || 500).json({ message: error.message || "Internal server error" });
    }
};

export const deleteMovie = async (req, res, next) => {

  try {
    const { movieId } = req.params;
    const movieDelete = await Movie.findById(movieId);
    if (!movieDelete) {
        return res.status(404).json({ message: "Movie not found" });
    }

    // Optional: remove image from cloudinary
    // if your cloudinary upload returns a public_id and you save it
    // const publicId = movie.imagePublicId;
    // if (publicId) {
    //   await cloudinaryInstance.uploader.destroy(publicId);
    // }

    await Product.findByIdAndDelete(movieId);
    res.status(200).json({ message: "Movie deleted successfully!" });

  } catch (error) {
    res.status(error.statusCode || 500).json({ message: error.message || "Internal server error" });
  }
}
