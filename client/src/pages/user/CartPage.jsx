import { useFetch } from "@/hooks/useFetch"

export default function CartPage() {

    const [cartData, isLoading, error] = useFetch("cart/get-cart")
    const errorMsg = error?.response?.data?.message || "Unable to fetch cart"
    console.log(cartData, "====cart data");
    console.log(errorMsg);
    
    if(error) return <p>{errorMsg}</p>
  return (
    <div>
        <div>
        {cartData?.products?.map((value)=>(
            <div>
                <img src={value?.image} alt="item img" />
                <h2>{value?.title}</h2>
                <h3>{value?.price}</h3>
            </div>
        )) }
        </div>
    </div>
  )
}