import React from "react";
import { useSelector } from "react-redux";

export default function StockDisplay() {
  const products = useSelector((state) => state.products.list);
  const cartSummary = useSelector((state) => {
    const totalItems = state.cart.items.reduce((sum, i) => sum + i.quantity, 0);
    const totalPrice = state.cart.items.reduce(
      (sum, i) => sum + i.price * i.quantity,
      0
    );
    return { totalItems, totalPrice };
  });

  return (
    <footer className="bg-gray-200 p-4 text-center">
      <h2 className="text-sm text-gray-700">
        <span className="font-bold">
          {products.map((p) => `${p.name} (${p.stock})`).join(" | ")}
        </span>
      </h2>
      <h2 className="text-sm text-gray-700">
        Cart Summary:{" "}
        <span className="font-bold">{cartSummary.totalItems}</span> items, Total
        Price: $<span className="font-bold">{cartSummary.totalPrice}</span>
      </h2>
    </footer>
  );
}
