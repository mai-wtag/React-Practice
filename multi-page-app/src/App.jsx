import { Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";

function ProductList() {
  return (
    <div>
      <h3>All Products</h3>
      <ul>
        <li>
          <Link to="/products/1">React Router Handbook</Link>
        </li>
        <li>
          <Link to="/products/2">State Management Guide</Link>
        </li>
        <li>
          <Link to="/products/3">Custom Hooks for Pros</Link>
        </li>
      </ul>
    </div>
  );
}

function NewProduct() {
  return <h3>Add a New Product</h3>;
}

function App() {
  return (
    <div>
      {/* Navbar is outside Routes, so it's always visible */}
      <Navbar />

      <main style={{ padding: "2rem" }}>
        <Routes>
          {/* 1. Basic Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          {/* 2. Nested Routes */}
          <Route path="/products" element={<Products />}>
            {/* The index route renders at the parent's path ('/products') */}
            <Route index element={<ProductList />} />
            <Route path="all" element={<ProductList />} />
            <Route path="new" element={<NewProduct />} />
          </Route>

          {/* 3. Dynamic Route with a URL Parameter */}
          <Route path="/products/:id" element={<ProductDetail />} />

          {/* 4. Catch-all "Not Found" Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
