import React from "react";

function Navbar({ cartCount, openCart }) {
  return (
    <nav className="fixed w-full z-50 bg-blue-500 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">My Store</h1>
      <button className="relative bg-white text-blue-500 px-4 py-2 rounded-lg cursor-pointer" onClick={openCart}>
        Cart ({cartCount})
      </button>
    </nav>
  );
}

export default Navbar;
