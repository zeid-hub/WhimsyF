// import { useEffect, useState } from 'react';
// import './SellerProducts.css';
// import SellerDashboard from './SellerDash';

// function SellerProducts() {
//     const [products, setProducts] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         // Fetch products from the API
//         fetch('http://127.0.0.1:5555/products')
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 setProducts(data);
//                 setLoading(false);
//             })
//             .catch(error => {
//                 setError(error);
//                 setLoading(false);
//             });
//     }, []);

//     if (loading) return <div>Loading...</div>;
//     if (error) return <div>Error: {error.message}</div>;

//     return (
//         <div className="div-sell-products">
//             <div className='container'>
//                 <div className='seller-dash'>
//                     <SellerDashboard />
//                 </div>
//                 <div className="div-pro-content">
//                     <h1 className="title-products">Products</h1>
//                     <div className="div-products-container">
//                         {products.length > 0 ? (
//                             products.map(product => (
//                                 <div key={product.id} className="product-card">
//                                     <img src={product.image_url} alt={product.name} className="product-image" />
//                                     <div className="product-info">
//                                         <h2 className="product-name">{product.name}</h2>
//                                         <p className="product-price">${product.price.toFixed(2)}</p>
//                                         <p className="product-description">{product.description}</p>
//                                         <p className="product-quantity">Quantity: {product.quantity}</p>
//                                     </div>
//                                 </div>
//                             ))
//                         ) : (
//                             <p>No products available.</p>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default SellerProducts;








// import { useEffect, useState } from 'react';
// import './SellerProducts.css';
// import SellerDashboard from './SellerDash';

// function SellerProducts() {
//     const [products, setProducts] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [form, setForm] = useState({
//         name: '',
//         price: '',
//         description: '',
//         quantity: '',
//         image_url: ''
//     });
//     const [formError, setFormError] = useState(null);

//     useEffect(() => {
//         // Fetch products from the API
//         fetch('http://127.0.0.1:5555/products')
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 setProducts(data);
//                 setLoading(false);
//             })
//             .catch(error => {
//                 setError(error);
//                 setLoading(false);
//             });
//     }, []);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setForm({
//             ...form,
//             [name]: value
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
        
//         // Validate form fields
//         if (!form.name || !form.price || !form.description || !form.quantity || !form.image_url) {
//             setFormError('All fields are required.');
//             return;
//         }

//         fetch('http://127.0.0.1:5555/products', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(form)
//         })
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return response.json();
//         })
//         .then(data => {
//             // Add the new product to the list
//             setProducts([...products, { ...form, id: Date.now() }]);
//             // Clear the form
//             setForm({
//                 name: '',
//                 price: '',
//                 description: '',
//                 quantity: '',
//                 image_url: ''
//             });
//             setFormError(null);
//         })
//         .catch(error => {
//             setFormError(error.message);
//         });
//     };

//     if (loading) return <div>Loading...</div>;
//     if (error) return <div>Error: {error.message}</div>;

//     return (
//         <div className="div-sell-products">
//             <div className='container'>
//                 <div className='seller-dash'>
//                     <SellerDashboard />
//                 </div>
//                 <div className="div-pro-content">
//                     <h1 className="title-products">Products</h1>

//                     {/* Product Form */}
//                     <form onSubmit={handleSubmit} className="product-form">
//                         <h2>Add New Product</h2>
//                         {formError && <p className="form-error">{formError}</p>}
//                         <div className="form-group">
//                             <label htmlFor="name">Name:</label>
//                             <input
//                                 type="text"
//                                 id="name"
//                                 name="name"
//                                 value={form.name}
//                                 onChange={handleChange}
//                                 required
//                             />
//                         </div>
//                         <div className="form-group">
//                             <label htmlFor="price">Price:</label>
//                             <input
//                                 type="number"
//                                 id="price"
//                                 name="price"
//                                 value={form.price}
//                                 onChange={handleChange}
//                                 step="0.01"
//                                 required
//                             />
//                         </div>
//                         <div className="form-group">
//                             <label htmlFor="description">Description:</label>
//                             <textarea
//                                 id="description"
//                                 name="description"
//                                 value={form.description}
//                                 onChange={handleChange}
//                                 required
//                             />
//                         </div>
//                         <div className="form-group">
//                             <label htmlFor="quantity">Quantity:</label>
//                             <input
//                                 type="number"
//                                 id="quantity"
//                                 name="quantity"
//                                 value={form.quantity}
//                                 onChange={handleChange}
//                                 required
//                             />
//                         </div>
//                         <div className="form-group">
//                             <label htmlFor="image_url">Image URL:</label>
//                             <input
//                                 type="text"
//                                 id="image_url"
//                                 name="image_url"
//                                 value={form.image_url}
//                                 onChange={handleChange}
//                                 required
//                             />
//                         </div>
//                         <button type="submit">Add Product</button>
//                     </form>

//                     <div className="div-products-container">
//                         {products.length > 0 ? (
//                             products.map(product => (
//                                 <div key={product.id} className="product-card">
//                                     <img src={product.image_url} alt={product.name} className="product-image" />
//                                     <div className="product-info">
//                                         <h2 className="product-name">{product.name}</h2>
//                                         <p className="product-price">${product.price.toFixed(2)}</p>
//                                         <p className="product-description">{product.description}</p>
//                                         <p className="product-quantity">Quantity: {product.quantity}</p>
//                                     </div>
//                                 </div>
//                             ))
//                         ) : (
//                             <p>No products available.</p>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default SellerProducts;













// import { useEffect, useState } from 'react';
// import './SellerProducts.css';
// import SellerDashboard from './SellerDash';

// function SellerProducts() {
//     const [products, setProducts] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [form, setForm] = useState({
//         name: '',
//         price: '',
//         description: '',
//         quantity: '',
//         image: null
//     });
//     const [formError, setFormError] = useState(null);
//     const [editingProduct, setEditingProduct] = useState(null);

//     useEffect(() => {
//         // Fetch products from the API
//         fetch('http://127.0.0.1:5555/products')
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 setProducts(data);
//                 setLoading(false);
//             })
//             .catch(error => {
//                 setError(error);
//                 setLoading(false);
//             });
//     }, []);

//     const handleChange = (e) => {
//         const { name, value, type, files } = e.target;
//         if (type === 'file') {
//             setForm({
//                 ...form,
//                 image: files[0]
//             });
//         } else {
//             setForm({
//                 ...form,
//                 [name]: value
//             });
//         }
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         // Validate form fields
//         if (!form.name || !form.price || !form.description || !form.quantity || !form.image) {
//             setFormError('All fields are required.');
//             return;
//         }

//         const formData = new FormData();
//         formData.append('name', form.name);
//         formData.append('price', form.price);
//         formData.append('description', form.description);
//         formData.append('quantity', form.quantity);
//         formData.append('image', form.image);

//         fetch('http://127.0.0.1:5555/products', {
//             method: 'POST',
//             body: formData
//         })
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return response.json();
//         })
//         .then(data => {
//             setProducts([...products, { ...form, id: Date.now() }]);
//             setForm({
//                 name: '',
//                 price: '',
//                 description: '',
//                 quantity: '',
//                 image: null
//             });
//             setFormError(null);
//         })
//         .catch(error => {
//             setFormError(error.message);
//         });
//     };

//     const handleEditClick = (product) => {
//         setEditingProduct(product);
//         setForm({
//             name: product.name,
//             price: product.price,
//             description: product.description,
//             quantity: product.quantity,
//             image: null
//         });
//     };

//     const handleUpdate = (e) => {
//         e.preventDefault();
//         if (!editingProduct) return;

//         const updatedProduct = new FormData();
//         updatedProduct.append('name', form.name);
//         updatedProduct.append('price', form.price);
//         updatedProduct.append('description', form.description);
//         updatedProduct.append('quantity', form.quantity);
//         if (form.image) updatedProduct.append('image', form.image);

//         fetch(`http://127.0.0.1:5555/products/${editingProduct.id}`, {
//             method: 'PATCH',
//             body: updatedProduct
//         })
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return response.json();
//         })
//         .then(data => {
//             setProducts(products.map(p => p.id === editingProduct.id ? { ...p, ...form } : p));
//             setEditingProduct(null);
//             setForm({
//                 name: '',
//                 price: '',
//                 description: '',
//                 quantity: '',
//                 image: null
//             });
//             setFormError(null);
//         })
//         .catch(error => {
//             setFormError(error.message);
//         });
//     };

//     const handleDelete = (productId) => {
//         fetch(`http://127.0.0.1:5555/products/${productId}`, {
//             method: 'DELETE'
//         })
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             setProducts(products.filter(p => p.id !== productId));
//         })
//         .catch(error => {
//             setError(error);
//         });
//     };

//     if (loading) return <div>Loading...</div>;
//     if (error) return <div>Error: {error.message}</div>;

//     return (
//         <div className="div-sell-products">
//             <div className='container'>
//                 <div className='seller-dash'>
//                     <SellerDashboard />
//                 </div>
//                 <div className="div-pro-content">
//                     <h1 className="title-products">Products</h1>

//                     {/* Product Form */}
//                     <form onSubmit={handleSubmit} className="product-form">
//                         <h2>{editingProduct ? 'Edit Product' : 'Add New Product'}</h2>
//                         {formError && <p className="form-error">{formError}</p>}
//                         <div className="form-group">
//                             <label htmlFor="name">Name:</label>
//                             <input
//                                 type="text"
//                                 id="name"
//                                 name="name"
//                                 value={form.name}
//                                 onChange={handleChange}
//                                 required
//                             />
//                         </div>
//                         <div className="form-group">
//                             <label htmlFor="price">Price:</label>
//                             <input
//                                 type="number"
//                                 id="price"
//                                 name="price"
//                                 value={form.price}
//                                 onChange={handleChange}
//                                 step="0.01"
//                                 required
//                             />
//                         </div>
//                         <div className="form-group">
//                             <label htmlFor="description">Description:</label>
//                             <textarea
//                                 id="description"
//                                 name="description"
//                                 value={form.description}
//                                 onChange={handleChange}
//                                 required
//                             />
//                         </div>
//                         <div className="form-group">
//                             <label htmlFor="quantity">Quantity:</label>
//                             <input
//                                 type="number"
//                                 id="quantity"
//                                 name="quantity"
//                                 value={form.quantity}
//                                 onChange={handleChange}
//                                 required
//                             />
//                         </div>
//                         <div className="form-group">
//                             <label htmlFor="image">Image:</label>
//                             <input
//                                 type="file"
//                                 id="image"
//                                 name="image"
//                                 onChange={handleChange}
//                                 />
//                         </div>
//                         <button type="submit">{editingProduct ? 'Update Product' : 'Add Product'}</button>
//                     </form>

//                     <div className="div-products-container">
//                         {products.length > 0 ? (
//                             products.map(product => (
//                                 <div key={product.id} className="product-card">
//                                     <img src={product.image_url} alt={product.name} className="product-image" />
//                                     <div className="product-info">
//                                         <h2 className="product-name">{product.name}</h2>
//                                         <p className="product-price">${product.price.toFixed(2)}</p>
//                                         <p className="product-description">{product.description}</p>
//                                         <p className="product-quantity">Quantity: {product.quantity}</p>
//                                         <button onClick={() => handleEditClick(product)}>Edit</button>
//                                         <button onClick={() => handleDelete(product.id)}>Delete</button>
//                                     </div>
//                                 </div>
//                             ))
//                         ) : (
//                             <p>No products available.</p>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default SellerProducts;


// import { useEffect, useState } from 'react';
// import './SellerProducts.css';

// function SellerProducts() {
//     const [products, setProducts] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [form, setForm] = useState({
//         name: '',
//         price: '',
//         description: '',
//         quantity: '',
//         image: null,
//     });
//     const [formError, setFormError] = useState(null);
//     const [editingProduct, setEditingProduct] = useState(null);

//     useEffect(() => {
//         const fetchProducts = async () => {
//             try {
//                 const response = await fetch('http://127.0.0.1:5555/products');
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 const data = await response.json();
//                 setProducts(data);
//             } catch (error) {
//                 setError(error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchProducts();
//     }, []);

//     const handleChange = (e) => {
//         const { name, value, type, files } = e.target;
//         setForm(prevForm => ({
//             ...prevForm,
//             [name]: type === 'file' ? files[0] : value,
//         }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         if (!form.name || !form.price || !form.description || !form.quantity || !form.image) {
//             setFormError('All fields are required.');
//             return;
//         }

//         const formData = new FormData();
//         Object.keys(form).forEach(key => {
//             formData.append(key, form[key]);
//         });

//         try {
//             const response = await fetch('http://127.0.0.1:5555/products', {
//                 method: 'POST',
//                 body: formData,
//             });
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             const newProduct = await response.json();
//             setProducts(prevProducts => [...prevProducts, newProduct]);
//             resetForm();
//         } catch (error) {
//             setFormError(error.message);
//         }
//     };

//     const handleEditClick = (product) => {
//         setEditingProduct(product);
//         setForm({
//             name: product.name,
//             price: product.price,
//             description: product.description,
//             quantity: product.quantity,
//             image: null,
//         });
//     };

//     const handleUpdate = async (e) => {
//         e.preventDefault();
//         if (!editingProduct) return;

//         const updatedProduct = new FormData();
//         Object.keys(form).forEach(key => {
//             if (form[key]) updatedProduct.append(key, form[key]);
//         });

//         try {
//             const response = await fetch(`http://127.0.0.1:5555/products/${editingProduct.id}`, {
//                 method: 'PATCH',
//                 body: updatedProduct,
//             });
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             const updatedData = await response.json();
//             setProducts(prevProducts => prevProducts.map(p => p.id === editingProduct.id ? updatedData : p));
//             resetForm();
//         } catch (error) {
//             setFormError(error.message);
//         }
//     };

//     const handleDelete = async (productId) => {
//         try {
//             const response = await fetch(`http://127.0.0.1:5555/products/${productId}`, {
//                 method: 'DELETE',
//             });
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             setProducts(prevProducts => prevProducts.filter(p => p.id !== productId));
//         } catch (error) {
//             setError(error);
//         }
//     };

//     const resetForm = () => {
//         setForm({
//             name: '',
//             price: '',
//             description: '',
//             quantity: '',
//             image: null,
//         });
//         setEditingProduct(null);
//         setFormError(null);
//     };

//     if (loading) return <div>Loading...</div>;
//     if (error) return <div>Error: {error.message}</div>;

//     return (
//         <div className="div-sell-products">
//             <div className="container">
//                     <h1 className="title-products">Products</h1>

//                     <form onSubmit={editingProduct ? handleUpdate : handleSubmit} className="product-form">
//                         <h2>{editingProduct ? 'Edit Product' : 'Add New Product'}</h2>
//                         {formError && <p className="form-error">{formError}</p>}
//                         <div className="form-group">
//                             <label htmlFor="name">Name:</label>
//                             <input
//                                 type="text"
//                                 id="name"
//                                 name="name"
//                                 value={form.name}
//                                 onChange={handleChange}
//                                 required
//                             />
//                         </div>
//                         <div className="form-group">
//                             <label htmlFor="price">Price:</label>
//                             <input
//                                 type="number"
//                                 id="price"
//                                 name="price"
//                                 value={form.price}
//                                 onChange={handleChange}
//                                 step="0.01"
//                                 required
//                             />
//                         </div>
//                         <div className="form-group">
//                             <label htmlFor="description">Description:</label>
//                             <textarea
//                                 id="description"
//                                 name="description"
//                                 value={form.description}
//                                 onChange={handleChange}
//                                 required
//                             />
//                         </div>
//                         <div className="form-group">
//                             <label htmlFor="quantity">Quantity:</label>
//                             <input
//                                 type="number"
//                                 id="quantity"
//                                 name="quantity"
//                                 value={form.quantity}
//                                 onChange={handleChange}
//                                 required
//                             />
//                         </div>
//                         <div className="form-group">
//                             <label htmlFor="image">Image:</label>
//                             <input
//                                 type="file"
//                                 id="image"
//                                 name="image"
//                                 onChange={handleChange}
//                             />
//                         </div>
//                         <button type="submit">
//                             {editingProduct ? 'Update Product' : 'Add Product'}
//                         </button>
//                     </form>

//                     <div className="div-products-container">
//                         {products.length > 0 ? (
//                             products.map(product => (
//                                 <div key={product.id} className="product-card">
//                                     <img
//                                         src={product.image_url}
//                                         alt={product.name}
//                                         className="product-image"
//                                     />
//                                     <div className="product-info">
//                                         <h2 className="product-name">{product.name}</h2>
//                                         <p className="product-price">${product.price.toFixed(2)}</p>
//                                         <p className="product-description">{product.description}</p>
//                                         <p className="product-quantity">Quantity: {product.quantity}</p>
//                                         <button onClick={() => handleEditClick(product)}>Edit</button>
//                                         <button onClick={() => handleDelete(product.id)}>Delete</button>
//                                     </div>
//                                 </div>
//                             ))
//                         ) : (
//                             <p>No products available.</p>
//                         )}
//                     </div>
                
//             </div>
//         </div>
//     );
// }

// export default SellerProducts;













// import { useEffect, useState } from 'react';
// import './SellerProducts.css';

// function SellerProducts() {
//     const [products, setProducts] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [form, setForm] = useState({
//         name: '',
//         price: '',
//         description: '',
//         quantity: '',
//         image: null,
//     });
//     const [formError, setFormError] = useState(null);
//     const [editingProduct, setEditingProduct] = useState(null);

//     useEffect(() => {
//         const fetchProducts = async () => {
//             try {
//                 const response = await fetch('http://127.0.0.1:5555/products');
//                 if (!response.ok) throw new Error('Failed to fetch products.');
                
//                 const data = await response.json();
//                 setProducts(data);
//             } catch (error) {
//                 setError(error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchProducts();
//     }, []);

//     const handleChange = ({ target: { name, value, type, files } }) => {
//         setForm((prevForm) => ({
//             ...prevForm,
//             [name]: type === 'file' ? files[0] : value,
//         }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         if (!Object.values(form).every((value) => value)) {
//             setFormError('All fields are required.');
//             return;
//         }

//         const formData = new FormData();
//         Object.entries(form).forEach(([key, value]) => formData.append(key, value));

//         try {
//             const response = await fetch('http://127.0.0.1:5555/products', {
//                 method: 'POST',
//                 body: formData,
//             });
//             if (!response.ok) throw new Error('Failed to add product.');

//             const newProduct = await response.json();
//             setProducts((prevProducts) => [...prevProducts, newProduct]);
//             resetForm();
//         } catch (error) {
//             setFormError(error.message);
//         }
//     };

//     const handleEditClick = (product) => {
//         setEditingProduct(product);
//         setForm({
//             name: product.name,
//             price: product.price,
//             description: product.description,
//             quantity: product.quantity,
//             image: null,
//         });
//     };

//     const handleUpdate = async (e) => {
//         e.preventDefault();
//         if (!editingProduct) return;

//         const updatedProduct = new FormData();
//         Object.entries(form).forEach(([key, value]) => {
//             if (value) updatedProduct.append(key, value);
//         });

//         try {
//             const response = await fetch(`http://127.0.0.1:5555/products/${editingProduct.id}`, {
//                 method: 'PATCH',
//                 body: updatedProduct,
//             });
//             if (!response.ok) throw new Error('Failed to update product.');

//             const updatedData = await response.json();
//             setProducts((prevProducts) =>
//                 prevProducts.map((p) => (p.id === editingProduct.id ? updatedData : p))
//             );
//             resetForm();
//         } catch (error) {
//             setFormError(error.message);
//         }
//     };

//     const handleDelete = async (productId) => {
//         try {
//             const response = await fetch(`http://127.0.0.1:5555/products/${productId}`, {
//                 method: 'DELETE',
//             });
//             if (!response.ok) throw new Error('Failed to delete product.');

//             setProducts((prevProducts) => prevProducts.filter((p) => p.id !== productId));
//         } catch (error) {
//             setError(error);
//         }
//     };

//     const resetForm = () => {
//         setForm({
//             name: '',
//             price: '',
//             description: '',
//             quantity: '',
//             image: null,
//         });
//         setEditingProduct(null);
//         setFormError(null);
//     };

//     if (loading) return <div>Loading...</div>;
//     if (error) return <div>Error: {error.message}</div>;

//     return (
//         <div className="div-sell-products">
//             <div className="container">
//                 <h1 className="title-products">Products</h1>

//                 <form
//                     onSubmit={editingProduct ? handleUpdate : handleSubmit}
//                     className="product-form"
//                 >
//                     <h2>{editingProduct ? 'Edit Product' : 'Add New Product'}</h2>
//                     {formError && <p className="form-error">{formError}</p>}
                    
//                     {['name', 'price', 'description', 'quantity'].map((field) => (
//                         <div className="form-group" key={field}>
//                             <label htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1)}:</label>
//                             <input
//                                 type={field === 'price' || field === 'quantity' ? 'number' : 'text'}
//                                 id={field}
//                                 name={field}
//                                 value={form[field]}
//                                 onChange={handleChange}
//                                 required
//                                 step={field === 'price' ? '0.01' : undefined}
//                             />
//                         </div>
//                     ))}

//                     {/* <div className="form-group">
//                         <label htmlFor="image">Image:</label>
//                         <input
//                             type="file"
//                             id="image"
//                             name="image"
//                             onChange={handleChange}
//                         />
//                     </div> */}
                    
//                     <div className="form-group">
//                     <label htmlFor="image_url">Image URL:</label>
//                     <input
//                     type="text"
//                     id="image_url"
//                     name="image_url"
//                     value={form.image_url}
//                     onChange={handleChange}
//                     required
//                     />
//                     </div>
//                     <button type="submit" className='btn-submit'>
//                         {editingProduct ? 'Update Product' : 'Add Product'}
//                     </button>
//                 </form>

//                 <div className="div-products-container">
//                     {products.length > 0 ? (
//                         products.map((product) => (
//                             <div key={product.id} className="product-card">
//                                 <img
//                                     src={product.image_url}
//                                     alt={product.name}
//                                     className="product-image"
//                                 />
//                                 <div className="product-info">
//                                     <h2 className="product-name">{product.name}</h2>
//                                     <p className="product-price">${product.price.toFixed(2)}</p>
//                                     <p className="product-description">{product.description}</p>
//                                     <p className="product-quantity">Quantity: {product.quantity}</p>
//                                     <button onClick={() => handleEditClick(product)} className='btn-edit'>Edit</button>
//                                     <button onClick={() => handleDelete(product.id)} className='btn-delete'>Delete</button>
//                                 </div>
//                             </div>
//                         ))
//                     ) : (
//                         <p>No products available.</p>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default SellerProducts;






import { useEffect, useState } from 'react';
import './SellerProducts.css';

function SellerProducts() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [form, setForm] = useState({
        name: '',
        price: '',
        description: '',
        quantity: '',
        image_url: '',  // Changed from 'image' to 'image_url'
    });
    const [formError, setFormError] = useState(null);
    const [editingProduct, setEditingProduct] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://127.0.0.1:5555/products');
                if (!response.ok) throw new Error('Failed to fetch products.');
                
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const handleChange = ({ target: { name, value } }) => {
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!Object.values(form).every((value) => value)) {
            setFormError('All fields are required.');
            return;
        }

        try {
            const response = await fetch('http://127.0.0.1:5555/products', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });
            if (!response.ok) throw new Error('Failed to add product.');

            const newProduct = await response.json();
            setProducts((prevProducts) => [...prevProducts, newProduct]);
            resetForm();
        } catch (error) {
            setFormError(error.message);
        }
    };

    const handleEditClick = (product) => {
        setEditingProduct(product);
        setForm({
            name: product.name,
            price: product.price,
            description: product.description,
            quantity: product.quantity,
            image_url: product.image_url,  // Use the image_url field
        });
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        if (!editingProduct) return;

        try {
            const response = await fetch(`http://127.0.0.1:5555/products/${editingProduct.id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });
            if (!response.ok) throw new Error('Failed to update product.');

            const updatedData = await response.json();
            setProducts((prevProducts) =>
                prevProducts.map((p) => (p.id === editingProduct.id ? updatedData : p))
            );
            resetForm();
        } catch (error) {
            setFormError(error.message);
        }
    };

    const handleDelete = async (productId) => {
        try {
            const response = await fetch(`http://127.0.0.1:5555/products/${productId}`, {
                method: 'DELETE',
            });
            if (!response.ok) throw new Error('Failed to delete product.');

            setProducts((prevProducts) => prevProducts.filter((p) => p.id !== productId));
        } catch (error) {
            setError(error);
        }
    };

    const resetForm = () => {
        setForm({
            name: '',
            price: '',
            description: '',
            quantity: '',
            image_url: '',  // Reset the image_url field
        });
        setEditingProduct(null);
        setFormError(null);
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className="div-sell-products">
            <div className="container">
                <h1 className="title-products">Products</h1>

                <form
                    onSubmit={editingProduct ? handleUpdate : handleSubmit}
                    className="product-form"
                >
                    <h2>{editingProduct ? 'Edit Product' : 'Add New Product'}</h2>
                    {formError && <p className="form-error">{formError}</p>}
                    
                    {['name', 'price', 'description', 'quantity'].map((field) => (
                        <div className="form-group" key={field}>
                            <label htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1)}:</label>
                            <input
                                type={field === 'price' || field === 'quantity' ? 'number' : 'text'}
                                id={field}
                                name={field}
                                value={form[field]}
                                onChange={handleChange}
                                required
                                step={field === 'price' ? '0.01' : undefined}
                            />
                        </div>
                    ))}

                    <div className="form-group">
                        <label htmlFor="image_url">Image URL:</label>
                        <input
                            type="text"
                            id="image_url"
                            name="image_url"
                            value={form.image_url}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button type="submit" className='btn-submit'>
                        {editingProduct ? 'Update Product' : 'Add Product'}
                    </button>
                </form>

                <div className="div-products-container">
                    {products.length > 0 ? (
                        products.map((product) => (
                            <div key={product.id} className="product-card">
                                <img
                                    src={product.image_url}
                                    alt={product.name}
                                    className="product-image"
                                />
                                <div className="product-info">
                                    <h2 className="product-name">{product.name}</h2>
                                    <p className="product-price">${product.price.toFixed(2)}</p>
                                    <p className="product-description">{product.description}</p>
                                    <p className="product-quantity">Quantity: {product.quantity}</p>
                                    <button onClick={() => handleEditClick(product)} className='btn-edit'>Edit</button>
                                    <button onClick={() => handleDelete(product.id)} className='btn-delete'>Delete</button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No products available.</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default SellerProducts;
