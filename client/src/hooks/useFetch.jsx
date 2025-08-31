import { axiosInstance } from "@/config/axiosInstance"
import { useEffect, useState } from "react"

export const useFetch = (url) => {

    const [data, setData] = useState({})
    const [isLoading, setIsLoading] = useState([true])
    const [error, setError] = useState(null)


   //  api call functn
   const fetchData = async ()=> {
      if (!url) return
       try {
        const response = await axiosInstance ({ method:"GET",url: url })  
        // console.log("response---", response,); 
        setData(response?.data?.data)
        // setIsLoading(false)
        
       } catch (error) {   
        console.error("Fetch error:", error)
         setError(error)
       }
       finally {
       setIsLoading(false)
       }
     }

         useEffect(() => {
           fetchData()
         },[url])  


  return [data, isLoading, error]
}