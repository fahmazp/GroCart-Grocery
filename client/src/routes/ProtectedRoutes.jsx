import { useEffect } from "react"
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom"

export const ProtectedRoutes = () => {

    const { isUserAuth } = useSelector((state) => state.user);
    const navigate = useNavigate()
  // console.log(isUserAuth,"----isUserAuth");
    

  useEffect(() => {
      if (!isUserAuth) {
        navigate("/login")
      }
    }, [])
  
    return (
      <Outlet/>
    )
}