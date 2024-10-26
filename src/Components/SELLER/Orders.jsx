import { useState, useEffect } from 'react';
import './Orders.css';

function MyOrders() {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [form, setForm] = useState({
        product_id: '',
        quantity: 1,
        price: '',
        status: 'pending',
    });
    const [formError, setFormError] = useState(null);
    const [editingOrder, setEditingOrder] = useState(null);
    const [success, setSuccess] = useState(false);

    // Fetch orders
    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await fetch('http://127.0.0.1:5555/orders', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                });
                if (!response.ok) throw new Error('Failed to fetch orders.');
                const data = await response.json();
                setOrders(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchOrders();
    }, []);

    // Handle input change
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    // Handle form submission for creating or updating an order
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setFormError(null);
        setSuccess(false);

        const method = editingOrder ? 'PATCH' : 'POST';
        const url = editingOrder
            ? `http://127.0.0.1:5555/orders/${editingOrder.id}`
            : 'http://127.0.0.1:5555/orders';

        try {
            const response = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
                body: JSON.stringify(form),
            });

            if (!response.ok) throw new Error('Failed to process order.');

            const data = await response.json();

            if (editingOrder) {
                setOrders((prevOrders) =>
                    prevOrders.map((order) =>
                        order.id === editingOrder.id ? data : order
                    )
                );
            } else {
                setOrders((prevOrders) => [...prevOrders, data]);
            }

            resetForm();
            setSuccess(true);
        } catch (error) {
            setFormError(error.message);
        }
    };

    // Handle edit click
    const handleEditClick = (order) => {
        setEditingOrder(order);
        setForm({
            product_id: order.product_id,
            quantity: order.quantity,
            price: order.price,
            status: order.status,
        });
    };

    // Handle delete
    const handleDelete = async (orderId) => {
        try {
            const response = await fetch(`http://127.0.0.1:5555/orders/${orderId}`, {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
            if (!response.ok) throw new Error('Failed to delete order.');

            setOrders((prevOrders) => prevOrders.filter((order) => order.id !== orderId));
        } catch (error) {
            setError(error.message);
        }
    };

    // Reset form
    const resetForm = () => {
        setForm({
            product_id: '',
            quantity: 1,
            price: '',
            status: 'pending',
        });
        setEditingOrder(null);
        setFormError(null);
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="div-orders">
            <h1>My Orders</h1>

            <form onSubmit={handleSubmit} className="order-form">
                <h2>{editingOrder ? 'Edit Order' : 'Create Order'}</h2>
                {formError && <p className="form-error">{formError}</p>}
                {success && <p className="form-success">Order {editingOrder ? 'updated' : 'created'} successfully!</p>}
                <div>
                    <label>Product ID:</label>
                    <input
                        type="text"
                        name="product_id"
                        value={form.product_id}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Quantity:</label>
                    <input
                        type="number"
                        name="quantity"
                        value={form.quantity}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Price:</label>
                    <input
                        type="text"
                        name="price"
                        value={form.price}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Status:</label>
                    <input
                        type="text"
                        name="status"
                        value={form.status}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className='order-btn'>{editingOrder ? 'Update Order' : 'Create Order'}</button>
            </form>

            <div className="order-list">
                {orders.length > 0 ? (
                    orders.map((order) => (
                        <div key={order.id} className="order-item">
                            <h2>Order ID: {order.id}</h2>
                            <p>User ID: {order.user_id}</p>
                            <p>Product ID: {order.product_id}</p>
                            <p>Quantity: {order.quantity}</p>
                            <p>Price: {order.price}</p>
                            <p>Status: {order.status}</p>
                            <button onClick={() => handleEditClick(order)}>Edit</button>
                            <button onClick={() => handleDelete(order.id)}>Delete</button>
                        </div>
                    ))
                ) : (
                    <p>No orders available.</p>
                )}
            </div>
        </div>
    );
}

export default MyOrders;
