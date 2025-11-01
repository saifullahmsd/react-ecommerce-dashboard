import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseItem,
  decreaseItem,
  clearCart,
} from "../features/cart/cartSlice";
import {
  selectCartItems,
  selectCartSummary,
} from "../features/cart/cartSelector";

export default function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const cartSummary = useSelector(selectCartSummary);

  return (
    <aside className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-semibold mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-2">
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between items-center">
                <div>
                  <h3 className="font-bold">{item.name}</h3>
                  <p className="text-sm text-gray-500">Price: ${item.price}</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <button
                      className="bg-gray-300 px-2 rounded"
                      onClick={() => dispatch(decreaseItem(item.id))}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="bg-gray-300 px-2 rounded"
                      onClick={() => dispatch(increaseItem(item.id))}
                    >
                      +
                    </button>
                    <button
                      className="bg-red-500 text-white px-2 rounded"
                      onClick={() => dispatch(removeFromCart(item.id))}
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <span>${item.price * item.quantity}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <p>
              <strong>Total Items:</strong> {cartSummary.totalItems}
            </p>
            <p>
              <strong>Total Price:</strong> ${cartSummary.totalPrice}
            </p>
            <button
              className="mt-2 w-full bg-blue-600 text-white py-1 rounded"
              onClick={() => dispatch(clearCart())}
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </aside>
  );
}
