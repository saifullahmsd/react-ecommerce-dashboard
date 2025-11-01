// App.jsx
import React from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import StockDisplay from "./components/StockDisplay";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Navbar */}
      <Navbar />
      {/* Main content area */}
      <main className="flex-grow p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <ProductList />
        </div>
        <Cart />
        <div className="md:col-span-3 mt-6">
          <StockDisplay />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
