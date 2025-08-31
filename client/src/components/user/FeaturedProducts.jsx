import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight, Plus, Tag } from "lucide-react";
import { Link } from "react-router-dom";

export default function FeaturedProducts({ title, products }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: "start" });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

//   useEffect(() => {
//     const fetchFeaturedProducts = async () => {
//       try {
//         const res = await axiosInstance.get("/products/allProducts");
//         setProducts(res.data.data || []);
//       } catch (err) {
//         console.error("Failed to fetch featured products:", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchFeaturedProducts();
//   }, []);

//   if (loading) {
//     return (
//       <div className="text-center py-10 text-green-500 font-semibold">
//         Loading featured products...
//       </div>
//     );
//   }

  return (
    <section className="my-12 relative">
    <div className="max-w-7xl mx-auto px-4 lg:px-5">

      {/* Section header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-foreground">{title}</h2>
        <Link to="/products">
          <Button variant="outline" size="sm" className="text-sm flex gap-1.5">
            <Tag className="size-3.5"/>
            View All
          </Button>
        </Link>
      </div>

      <div className="relative">
          {/* Carousel Viewport */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {products.map((product) => (
              <div
                key={product._id}
                className="min-w-[150px] max-w-[150px] sm:min-w-[180px] sm:max-w-[180px]
                           mx-2 space-y-1 flex-shrink-0 bg-green-50 dark:bg-emerald-900 rounded-xl shadow 
                           hover:shadow-md transition p-3 flex flex-col"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-36 object-cover rounded-lg"
                />
                <h3 className="mt-2 text-sm font-medium text-zinc-700 dark:text-zinc-200 truncate">
                  {product.title}
                </h3>
                <p className="text-green-600 dark:text-green-300 font-black text-sm">
                  ₹{product.price} / {product.unit}
                </p>
                <Button
                  size="sm"
                  className="mt-auto w-full bg-green-500 hover:bg-green-600"
                >
                  <Plus />Add to Cart
                </Button>
              </div>
            ))}
          </div>
      </div>

        {/* Arrows */}
        <Button
          onClick={scrollPrev}
          variant="secondary"
          className="absolute left-0 top-1/2 -translate-y-1/2 w-9 h-9 border p-2 rounded-full shadow-lg"
        >
          <ChevronLeft size={20} />
        </Button>
        <Button
          onClick={scrollNext}
          variant="secondary"
          className="absolute right-0 top-1/2 -translate-y-1/2 w-9 h-9 border p-2 rounded-full shadow-lg"
        >
          <ChevronRight size={20} />
        </Button>

      </div>
    </div>
    </section>
  );
}
