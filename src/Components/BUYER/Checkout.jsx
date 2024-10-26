// import { useState } from 'react';
// import './Checkout.css';

// function Checkout() {
//   const [checkoutData, setCheckoutData] = useState({
//     name: '',
//     email: '',
//     address: '',
//     city: '',
//     state: '',
//     zip: '',
//     paymentMethod: 'creditCard',
//     cardNumber: '',
//     cardExpiry: '',
//     cardCVC: '',
//     mpesaNumber: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setCheckoutData({ ...checkoutData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('http://127.0.0.1:5555/checkout', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(checkoutData),
//       });
//       if (response.ok) {
//         const result = await response.json();
//         console.log('Checkout successful:', result);
//         // Clear the cart after successful checkout or redirect to a success page
//       } else {
//         throw new Error('Checkout failed');
//       }
//     } catch (error) {
//       console.error('Error during checkout:', error);
//     }
//   };

//   return (
//     <div className="checkout">
//       <h2>Checkout</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-section">
//           <h3>Billing Details</h3>
//           <div className="form-group">
//             <label htmlFor="name">Name:</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={checkoutData.name}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="email">Email:</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={checkoutData.email}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="address">Address:</label>
//             <input
//               type="text"
//               id="address"
//               name="address"
//               value={checkoutData.address}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="city">City:</label>
//             <input
//               type="text"
//               id="city"
//               name="city"
//               value={checkoutData.city}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="state">State:</label>
//             <input
//               type="text"
//               id="state"
//               name="state"
//               value={checkoutData.state}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="zip">Zip Code:</label>
//             <input
//               type="text"
//               id="zip"
//               name="zip"
//               value={checkoutData.zip}
//               onChange={handleChange}
//               required
//             />
//           </div>
//         </div>
//         <div className="form-section">
//           <h3>Payment Information</h3>
//           <div className="form-group">
//             <label htmlFor="paymentMethod">Payment Method:</label>
//             <select
//               id="paymentMethod"
//               name="paymentMethod"
//               value={checkoutData.paymentMethod}
//               onChange={handleChange}
//               required
//             >
//               <option value="creditCard">Credit Card</option>
//               <option value="paypal">PayPal</option>
//               <option value="mpesa">MPesa</option>
//             </select>
//           </div>
//           {checkoutData.paymentMethod === 'creditCard' && (
//             <>
//               <div className="form-group">
//                 <label htmlFor="cardNumber">Card Number:</label>
//                 <input
//                   type="text"
//                   id="cardNumber"
//                   name="cardNumber"
//                   value={checkoutData.cardNumber}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="cardExpiry">Expiry Date:</label>
//                 <input
//                   type="text"
//                   id="cardExpiry"
//                   name="cardExpiry"
//                   placeholder="MM/YY"
//                   value={checkoutData.cardExpiry}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="cardCVC">CVC:</label>
//                 <input
//                   type="text"
//                   id="cardCVC"
//                   name="cardCVC"
//                   value={checkoutData.cardCVC}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//             </>
//           )}
//           {checkoutData.paymentMethod === 'mpesa' && (
//             <div className="form-group">
//               <label htmlFor="mpesaNumber">MPesa Number:</label>
//               <input
//                 type="text"
//                 id="mpesaNumber"
//                 name="mpesaNumber"
//                 value={checkoutData.mpesaNumber}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//           )}
//         </div>
//         <button type="submit" className="btn-submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default Checkout;







import { useState } from 'react';
import './Checkout.css';

function Checkout() {
  const [checkoutData, setCheckoutData] = useState({
    name: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip_code: '',
    country: '',
    date: '',
    paymentMethod: 'creditCard',
    cardNumber: '',
    cardExpiry: '',
    cardCVC: '',
    mpesaNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCheckoutData({ ...checkoutData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const billingDetails = {
      name: checkoutData.name,
      phone: checkoutData.phone,
      address: checkoutData.address,
      city: checkoutData.city,
      state: checkoutData.state,
      zip_code: checkoutData.zip_code,
      country: checkoutData.country,
      date: checkoutData.date,
    };
    try {
      const response = await fetch('http://127.0.0.1:5555/address', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(billingDetails),
      });
      if (response.ok) {
        const result = await response.json();
        console.log('Billing details saved:', result);
        // Proceed with payment processing or redirect to success page
      } else {
        throw new Error('Failed to save billing details');
      }
    } catch (error) {
      console.error('Error during checkout:', error);
    }
  };

  return (
    <div className="checkout">
      <div className="checkout-header">
        <h2>Checkout</h2>
        <img src="https://media.istockphoto.com/id/1682711248/photo/customer-playing-using-smartphone.webp?b=1&s=170667a&w=0&k=20&c=pPOLTm8SNhDR2Pi9119jb14uNxJUhDLx70j3wYdCfaU=" alt="Checkout" className="checkout-image" />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-sections">
          <div className="form-section">
            <h3>Billing Details</h3>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={checkoutData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number:</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={checkoutData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address:</label>
              <input
                type="text"
                id="address"
                name="address"
                value={checkoutData.address}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="city">City:</label>
              <input
                type="text"
                id="city"
                name="city"
                value={checkoutData.city}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="state">State:</label>
              <input
                type="text"
                id="state"
                name="state"
                value={checkoutData.state}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="zip_code">Zip Code:</label>
              <input
                type="text"
                id="zip_code"
                name="zip_code"
                value={checkoutData.zip_code}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="country">Country:</label>
              <input
                type="text"
                id="country"
                name="country"
                value={checkoutData.country}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="date">Date:</label>
              <input
                type="date"
                id="date"
                name="date"
                value={checkoutData.date}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-section">
            <h3>Payment Information</h3>
            <div className="form-group">
              <label htmlFor="paymentMethod">Payment Method:</label>
              <select
                id="paymentMethod"
                name="paymentMethod"
                value={checkoutData.paymentMethod}
                onChange={handleChange}
                required
              >
                <option value="creditCard">Credit Card</option>
                <option value="paypal">PayPal</option>
                <option value="mpesa">MPesa</option>
              </select>
            </div>
            {checkoutData.paymentMethod === 'creditCard' && (
              <>
                <div className="form-group">
                  <label htmlFor="cardNumber">Card Number:</label>
                  <input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    value={checkoutData.cardNumber}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cardExpiry">Expiry Date:</label>
                  <input
                    type="text"
                    id="cardExpiry"
                    name="cardExpiry"
                    placeholder="MM/YY"
                    value={checkoutData.cardExpiry}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cardCVC">CVC:</label>
                  <input
                    type="text"
                    id="cardCVC"
                    name="cardCVC"
                    value={checkoutData.cardCVC}
                    onChange={handleChange}
                    required
                  />
                </div>
              </>
            )}
            {checkoutData.paymentMethod === 'mpesa' && (
              <div className="form-group">
                <label htmlFor="mpesaNumber">MPesa Number:</label>
                <input
                  type="text"
                  id="mpesaNumber"
                  name="mpesaNumber"
                  value={checkoutData.mpesaNumber}
                  onChange={handleChange}
                  required
                />
              </div>
            )}
          </div>
        </div>
        <button type="submit" className="btn-submit">Submit</button>
      </form>
    </div>
  );
}

export default Checkout;
