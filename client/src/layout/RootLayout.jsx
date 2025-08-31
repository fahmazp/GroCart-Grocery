import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { axiosInstance } from "@/config/axiosInstance";
import { clearUser, saveUser } from "@/redux/features/userSlice";
import PreLoaderAnimation from "@/components/pre-loading/PreLoaderAnimation";
import HeaderComponent from "@/components/user/Header";
import NoAuthHeader from "@/components/user/BaseHeader";
import FooterComponent from "@/components/user/Footer";

export const RootLayout = () => {
  const { isUserAuth } = useSelector((state) => state.user);
  const [showPreloader, setShowPreloader] = useState(true);
  const [apiDone, setApiDone] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const checkUser = async () => {
      try {
        const response = await axiosInstance.get("/user/check-user");
        dispatch(saveUser(response.data));
      } catch (error) {
        console.log("User not authenticated:", error?.response?.data || error.message);
        dispatch(clearUser());
      } finally {
        setApiDone(true);
      }
    };

    checkUser();
  }, [dispatch]);

  const handlePreloaderComplete = () => {
    if (apiDone) {
      setShowPreloader(false);
    }
  };

  // Show preloader if still active
  if (showPreloader) {
    return <PreLoaderAnimation onLoadingComplete={handlePreloaderComplete} />;
  }

  // Show app otherwise
  return (
<div className="relative min-h-screen flex flex-col overflow-hidden">
    <div className="absolute top-0 left-0 z-[-2] h-full w-full 
               bg-white 
               [background:radial-gradient(125%_125%_at_50%_10%,#fff_20%,#a7f3d0_80%)] 
               dark:bg-neutral-950 
               dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#064e3b_100%)]"
    />
    {/* <div class="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div> */}
    {/* <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div> */}
      {isUserAuth ? <HeaderComponent /> : <NoAuthHeader />}

      {/* Page Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      <FooterComponent />
    </div>
  );
};
