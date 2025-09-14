import { Link } from 'react-router-dom';

export default function Navbar() {
  const navStyle = {
    display: 'flex',
    gap: '2rem',
    padding: '1rem',
    backgroundColor: '#f0f0f0',
    borderBottom: '1px solid #ccc',
  };

  return (
    <nav style={navStyle}>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}
