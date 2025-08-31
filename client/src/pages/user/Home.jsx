import { useEffect, useRef, useState } from "react";
import { axiosInstance } from "@/config/axiosInstance";
import HeroSection from "@/components/user/HeroSection";
import CategoryCarousel from "@/components/user/CategoryCards";
import FeaturedProducts from "@/components/user/FeaturedProducts";
import ProductsSkeleton from "@/components/other-components/SkeltonLoader";


export default function Home() {

  const [categorySections, setCategorySections] = useState([]);
  const [loading, setLoading] = useState(true);

  const categoryRef = useRef(null);

    const scrollToCategory = () => {
    categoryRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  useEffect(() => {
    const fetchHomeProducts = async () => {
      try {
        const res = await axiosInstance.get("/products/group-home-products");
        setCategorySections(res.data || []);
      } catch (err) {
        console.error("Failed to fetch home products:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchHomeProducts();
  }, []);

  return (
    <div className="sm:px-5 mx-auto">
      <HeroSection onShopNowClick={scrollToCategory} />
      <CategoryCarousel ref={categoryRef} />

      <div className="space-y-10">
        {loading ? (
          // <div className="text-center py-10 text-green-500">Loading products...</div>
          <ProductsSkeleton count={12}/>
        ) : (
          categorySections.map((section) =>
            section.products.length > 0 ? (
              <FeaturedProducts
                key={section.category}
                title={section.category}
                products={section.products}
              />
            ) : null
          )
        )}
      </div>

      {/* <HomeProducts title="Fresh Fruits" viewAllLink="/category/fruits" /> */}
      {/* <CategorySection /> */}
    </div>
  )
}