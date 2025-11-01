import React from "react";
import { useSelector } from "react-redux";
import { selectCartSummary } from "../features/cart/cartSelector";

export default function Navbar() {
  const { totalItems, totalPrice } = useSelector(selectCartSummary);

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center shadow">
      {/* Left side: Brand */}
      <h1 className="text-lg font-bold">MyShop</h1>

      {/* Right side: Cart summary */}
      <div className="flex items-center space-x-4">
        <span className="bg-white text-blue-600 px-3 py-1 rounded-full font-semibold">
          🛒 {totalItems} items
        </span>
        <span className="hidden md:inline">💰 ${totalPrice}</span>
      </div>
    </nav>
  );
}
