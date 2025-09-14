import { Link, Outlet } from 'react-router-dom';

export default function Products() {
  return (
    <div>
      <h1>Products</h1>
      <p>Browse our amazing products below.</p>
      <nav>
        {/* These links will navigate within the nested route */}
        <Link to="/products/all">All Products</Link> |{' '}
        <Link to="/products/new">Add New Product</Link>
      </nav>
      <hr />
      {/* The Outlet is where the nested child component will be rendered */}
      <Outlet />
    </div>
  );
}