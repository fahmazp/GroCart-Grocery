import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/user/Home";
import About from "@/pages/user/About";
import { RootLayout } from "@/layout/RootLayout";
import { ProtectedRoutes } from "./ProtectedRoutes";
import Profile from "@/pages/user/Profile";
import ErrorPage from "@/pages/shared/ErrorPage";
import Categories from "@/pages/user/Categories";
import LoginPage from "@/pages/shared/Login";
import Sign_Up from "@/pages/shared/SignUp";
import CartPage from "@/pages/user/CartPage";
import Address from "@/pages/user/Address";

export const router = createBrowserRouter([

   {
      path: "",
      element: <RootLayout />,
      errorElement: <ErrorPage/>,
      children: [
         {
            path: "",
            element: <Home/>
         },
         {
            path: "about",
            element: <About/>
         },  
         {
            path: "login",
            element: <LoginPage/>
         },
         {
            path: "signup",
            element: <Sign_Up/>
         },
         {
            path: "all-categories",
            element: <Categories/>
         },
         {
            path: "forgotPassword",
            element: <h2>Forgot Password</h2>
         },
         {
            path: "user",
            element: <ProtectedRoutes/>,
            children: [
               {
                  path: "profile",
                  element: <Profile/>
               },
               {
                  path: "cart",
                  element: <CartPage/>
               },
               {
                  path: "address",
                  element: <Address/>
               },               
            ]
         }

      ]
   }
])