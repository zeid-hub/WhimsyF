import { useState, useEffect } from 'react';
import './MyShop.css';

function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5555/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const productsData = await response.json();
        setProducts(productsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchProducts();
  }, []);

  const addToCart = async (productId) => {
    try {
      const response = await fetch('http://127.0.0.1:5555/userCart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          product_id: productId,
          quantity: 1,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to add product to cart');
      }

      const result = await response.json();
      console.log('Product added to cart:', result);
    } catch (error) {
      console.error('Error adding product to cart:', error);
    }
  };

  return (
    <div className="div-shop">
      <h2 className="Header">Welcome to Our Shop</h2>
      <div className="product-container">
        {products.map(product => (
          <div key={product.id} className="product">
            <div className="product-images">
              {product.image_url && (
                <img src={product.image_url} alt={`Product ${product.id}`} />
              )}
            </div>
            <div className="divtoshta">
              <h3>{product.name}</h3>
              <p className='p-price'>Price: ${product.price}</p>
              <p className='p-description'>{product.description}</p>
              <p className='p-quantity'>Available Quantity: {product.quantity}</p>
            </div>
            <button className="cart-button" onClick={() => addToCart(product.id)}>
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
