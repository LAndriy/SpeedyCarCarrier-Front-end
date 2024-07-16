import React, { useState, useEffect, useContext } from 'react';
import API_BASE_URL from '../../config';
import '../styles/Dashboard.css';
import { AuthContext } from '../../contexts/AuthContext';

function Dashboard() {
    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);
    const [trackingInfo, setTrackingInfo] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            const response = await fetch(`${API_BASE_URL}/orders`, {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            });
            const data = await response.json();
            setOrders(data);
        };

        const fetchTrackingInfo = async () => {
            const response = await fetch(`${API_BASE_URL}/tracking`, {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            });
            const data = await response.json();
            setTrackingInfo(data);
        };

        fetchOrders();
        fetchTrackingInfo();
    }, [user]);

    return (
        <div className="dashboard">
            <div className="orders">
                <h2>Orders</h2>
                <p>Create a new order</p>
                <form>
                    <input type="text" placeholder="Car Brand" />
                    <input type="text" placeholder="Car Model" />
                    <input type="text" placeholder="Year of production" />
                    <input type="text" placeholder="Pickup Location" />
                    <input type="text" placeholder="Delivery Location" />
                    <input type="date" placeholder="Delivery Date" />
                    <textarea placeholder="Comments"></textarea>
                    <input type="submit" value="Create Order" />
                </form>
                <ul>
                    {orders.map(order => (
                        <li key={order.id}>{order.description}</li>
                    ))}
                </ul>
            </div>
            <div className="tracking">
                <h2>Tracking info</h2>
                <ul>
                    {trackingInfo.map(info => (
                        <li key={info.id}>{info.status}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Dashboard;
