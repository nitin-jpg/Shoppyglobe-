import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const cartCount = useSelector(state => state.cart.items.length);
  return (
    <header className="flex items-center justify-between bg-blue-800 p-4 text-white shadow">
      <Link to="/" className="text-2xl font-bold">ShoppyGlobe</Link>
      <nav className="flex gap-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/cart" className="hover:underline">Cart
          <span className="bg-white text-blue-800 ml-1 rounded px-2">{cartCount}</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
