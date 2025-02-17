import React from "react";
import shoppingIcon from "../assets/online-shopping.png";

function Navbar({ cartCount, openCart }) {
  return (
    <nav className="fixed w-full z-50 bg-blue-500 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold flex items-center gap-2">
        <img src={shoppingIcon} width="30px" alt="Shopping Icon" />
        Shopping Cart
      </h1>
      <button
        className="relative bg-white text-blue-500 px-4 py-2 rounded-lg cursor-pointer"
        onClick={openCart}
      >
        <i class="fa-solid fa-cart-shopping"></i> Cart ({cartCount})
      </button>
    </nav>
  );
}

export default Navbar;
