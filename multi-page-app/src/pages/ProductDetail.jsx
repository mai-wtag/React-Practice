import { useParams } from 'react-router-dom';

// Mock data
const productData = [
  { id: '1', name: 'React Router Handbook', price: 29 },
  { id: '2', name: 'State Management Guide', price: 39 },
  { id: '3', name: 'Custom Hooks for Pros', price: 49 },
];

export default function ProductDetail() {
  // Use the useParams hook to get the 'id' from the URL
  const { id } = useParams();
  const product = productData.find(p => p.id === id);

  if (!product) {
    return <h2>Product not found!</h2>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
    </div>
  );
}
