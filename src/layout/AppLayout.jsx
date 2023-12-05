import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import CartModal from "../components/modals/CartModal";

const AppLayout = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="w-screen min-h-screen flex justify-center bg-half-white">
      <div className="max-w-[1024px] w-full px-4 relative">
        <Navbar isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
        <Outlet />
        <Footer />
        <CartModal isOpen={isCartOpen} setIsOpen={setIsCartOpen} />
      </div>
    </div>
  );
};

export default AppLayout;
