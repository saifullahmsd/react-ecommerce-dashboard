React E-commerce Shop Dashboard

A responsive e-commerce shopping page built with React, Redux Toolkit, and Tailwind CSS. This project simulates a product list and a live-updating shopping cart, demonstrating modern frontend state management practices.

📸 Preview
![E-commerce Dashboard Preview](shoping-dashboard.png)

✨ Features

Product Listing: Fetches and displays a list of products from a mock async API.

State Management: Uses Redux Toolkit for robust global state management (cart and products).

Async Operations: Uses createAsyncThunk to handle asynchronous product fetching with loading/error states.

Shopping Cart:

Add products to the cart.

Increase or decrease item quantity.

Remove items from the cart.

Clear the entire cart.

Live Summary: Cart totals (item count and price) update instantly across the Navbar, Cart, and Footer Summary bar.

Optimized Selectors: Uses useSelector with custom selector functions (cartSelector.js) to efficiently derive state.

Styling: Fully responsive layout styled with Tailwind CSS.

🛠️ Technologies Used

React 18

Vite (Build Tool)

Redux Toolkit (State Management)

React-Redux

Tailwind CSS (Styling)

🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

Prerequisites

Node.js (v18 or later recommended)

npm or yarn

Installation & Setup

Clone the repository:
`sh
    git clone [https://github.com/saifullahmsd/react-ecommerce-dashboard.git](https://github.com/saifullahmsd/react-ecommerce-dashboard.git)
    cd react-ecommerce-dashboard
    `

Install dependencies:

npm install

(or yarn install)

Run the development server:

npm run dev

(or yarn dev)

Open http://localhost:5173 (or the port shown in your terminal) to view it in the browser.
