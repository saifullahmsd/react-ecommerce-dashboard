import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { loadProducts } from "../features/products/productSlice";

export default function ProductList() {
  const dispatch = useDispatch();
  const { list, status, error } = useSelector((state) => state.products);

  useEffect(() => {
    if (status === "idle") {
      dispatch(loadProducts());
    }
  }, [status, dispatch]);

  if (status === "loading") return <p>Loading products...</p>;
  if (status === "failed") return <p>Error: {error}</p>;

  return (
    <section>
      <h2 className="text-lg font-semibold mb-4">Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {list.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded shadow flex flex-col"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-32 object-cover mb-2 rounded"
            />
            <h3 className="font-bold">{product.name}</h3>
            <p className="text-gray-600">${product.price}</p>
            <p className="text-sm text-gray-500">Stock: {product.stock}</p>
            <button
              className="mt-2 w-full bg-blue-600 text-white py-1 rounded"
              onClick={() => dispatch(addToCart(product))}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
