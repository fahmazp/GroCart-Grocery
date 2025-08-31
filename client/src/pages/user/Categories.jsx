import { axiosInstance } from "@/config/axiosInstance"
import { useEffect, useState } from "react";
import ProductsCard from "@/components/user/ProductCards";

export default function Categories() {
  const [products, setProducts] = useState()

  const fetchProducts = async () => {
    try {
    const response = await axiosInstance({ method:"GET",url:"/products/allProducts" })
    // console.log("response", response);
      setProducts(response?.data?.data || []);
    } catch (error) {
        console.log(error);  
    }
  }

  
  useEffect(() => {
    fetchProducts()
  }, [])
  

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <h1 className="text-xl font-semibold my-4">All Products</h1>
      <ul
        role="list"
        className="mx-auto mt-10 grid max-w-2xl grid-cols-2 gap-x-4 gap-y-10 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none xl:grid-cols-5 "
      >
        {products?.map((value)=>(
        <ProductsCard item={value} key={value?._id}/>
      ))}
      </ul>
    </div>
  )
}