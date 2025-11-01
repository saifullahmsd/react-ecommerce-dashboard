// Fake API (replace with real API later)
export async function fetchProducts() {
  return Promise.resolve([
    {
      id: 1,
      name: "Laptop",
      price: 1000,
      stock: 5,
      image: "https://placehold.co/150x150",
    },
    {
      id: 2,
      name: "Phone",
      price: 500,
      stock: 10,
      image: "https://placehold.co/150x150",
    },
    {
      id: 3,
      name: "Headphones",
      price: 200,
      stock: 15,
      image: "https://placehold.co/150x150",
    },
  ]);
}
