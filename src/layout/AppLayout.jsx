import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const AppLayout = () => {
  return (
    <div className="w-screen min-h-screen flex justify-center bg-half-white">
      <div className="max-w-[1024px] w-full px-4">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default AppLayout;
