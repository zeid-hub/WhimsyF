// import "./Cart.css"
// import { useState, useEffect } from 'react';

// function ShoppingCart() {
//   const [cartItems, setCartItems] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('http://127.0.0.1:5555/userCart', {
//           headers: {
//             // If you are not using JWT, you can adjust this header or remove it
//             // 'Authorization': `Bearer ${localStorage.getItem('token')}`
//           }
//         });
//         if (!response.ok) {
//           throw new Error('Failed to fetch cart items');
//         }
//         const cartData = await response.json();
//         setCartItems(cartData);
//       } catch (error) {
//         console.error('Error fetching cart items:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleRemoveFromCart = async (itemId) => {
//     try {
//       const response = await fetch(`http://127.0.0.1:5555/userCart/${itemId}`, {
//         method: 'DELETE',
//         // If you are not using JWT, you can adjust this header or remove it
//         // headers: {
//         //   'Authorization': `Bearer ${localStorage.getItem('token')}`
//         // }
//       });
//       if (response.ok) {
//         setCartItems(cartItems.filter(item => item.id !== itemId));
//       } else {
//         throw new Error('Failed to remove item from cart');
//       }
//     } catch (error) {
//       console.error('Error removing item from cart:', error);
//     }
//   };

//   const handleClearCart = async () => {
//     const promises = cartItems.map(item => handleRemoveFromCart(item.id));
//     await Promise.all(promises);
//   };

//   const calculateTotal = () => {
//     return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
//   };

//   return (
//     <div className="shopping-cart">
//       <h2 className="cart-header">Shopping Cart</h2>
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <div>
//           <ul>
//             {cartItems.map(item => (
//               <li key={item.id} className="cart-item">
//                 <div className="cart-item-image">
//                   {item.image_url && (
//                     <img src={item.image_url} alt={`Product ${item.product_id}`} />
//                   )}
//                 </div>
//                 <div className="item-name">{item.name}</div>
//                 <div className="item-quantity">Quantity: {item.quantity}</div>
//                 <div className="item-price">Price: ${item.price}</div>
//                 <button onClick={() => handleRemoveFromCart(item.id)} className="btn-remove">Remove</button>
//               </li>
//             ))}
//           </ul>
//           <p className="item-total">Total: ${calculateTotal()}</p>
//           <button onClick={handleClearCart} className="btn-clear">Clear Cart</button>
//           <button className="btn-checkout">Checkout</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default ShoppingCart;


















import "./Cart.css";
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function ShoppingCart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5555/userCart');
        if (!response.ok) {
          throw new Error('Failed to fetch cart items');
        }
        const cartData = await response.json();
        setCartItems(cartData);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchData();
  }, []);

  const handleRemoveFromCart = async (itemId) => {
    try {
      const response = await fetch(`http://127.0.0.1:5555/userCart/${itemId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setCartItems(cartItems.filter(item => item.id !== itemId));
      } else {
        throw new Error('Failed to remove item from cart');
      }
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };

  const handleIncreaseQuantity = (itemId) => {
    const updatedItems = cartItems.map(item => {
      if (item.id === itemId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartItems(updatedItems);
  };

  const handleDecreaseQuantity = (itemId) => {
    const updatedItems = cartItems.map(item => {
      if (item.id === itemId && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartItems(updatedItems);
  };

  const handleClearCart = async () => {
    const promises = cartItems.map(item => handleRemoveFromCart(item.id));
    await Promise.all(promises);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  const navigate = useNavigate();

  return (
    <div className="shopping-cart">
      <h2 className="cart-header">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map(item => (
              <li key={item.id} className="cart-item">
                <div className="cart-item-image">
                  {item.image_url && (
                    <img src={item.image_url} alt={`Product ${item.product_id}`} />
                  )}
                </div>
                <div className="item-name">{item.name}</div>
                <div className="item-quantity">
                  Quantity: {item.quantity}
                  <button onClick={() => handleIncreaseQuantity(item.id)} className="btn-increase">+</button>
                  <button onClick={() => handleDecreaseQuantity(item.id)} className="btn-decrease">-</button>
                </div>
                <div className="item-price">Price: ${item.price}</div>
                <button onClick={() => handleRemoveFromCart(item.id)} className="btn-remove">Remove</button>
              </li>
            ))}
          </ul>
          <p className="item-total">Total: ${calculateTotal()}</p>
          <button onClick={handleClearCart} className="btn-clear">Clear Cart</button>
          <button className="btn-checkout" onClick={() => navigate("/checkout")} >Checkout</button>
        </div>
      )}
    </div>
  );
}

export default ShoppingCart;
