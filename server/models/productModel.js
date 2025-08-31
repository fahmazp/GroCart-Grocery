import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
    title: {
        type: String, 
        required: true,
        unique: true,
        trim: true,
    },
    category: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: "Category" ,
    },
    description: { 
        type: String,
        required: true
    },
    stock: {
         type: Number,
         required: true,
         min: 0,
    },
    price: { 
        type: Number,
        required: true,
        min: 0,
    },
    unit: {
      type: String,
      enum: ['kg', 'litre', 'pcs', 'packet', 'g', 'ml'],
      default: 'pcs',
    },
    image: {
        type: String,
        default: "https://media.istockphoto.com/id/1222357475/vector/image-preview-icon-picture-placeholder-for-website-or-ui-ux-design-vector-illustration.jpg?s=1024x1024&w=is&k=20&c=mZ2wtnhxBA20wCs2sNhAClC-hSFOkqAJAP3GqiSBIlk=",
    },
    discount: {
      type: Number,
      default: 0,
    },
    // slug: {
    //   type: String,
    //   lowercase: true,
    //   unique: true,
    // },
    isActive: {
      type: Boolean,
      default: true,
    },
    admin: { 
        type: mongoose.Types.ObjectId, 
        ref: "Admin" // Referencing admin model
    },
  }, 
  { timestamps: true }
);


export const Product = mongoose.model("Product", productSchema);
