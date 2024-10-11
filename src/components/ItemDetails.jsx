import React from 'react';
import './ItemDetails.css';

const ItemDetails = ({ item }) => {
    if (!item) return <div className="item-message">Select an item to view details.</div>;

    return (
        <div className="item-details">
            <h2>{item.name}</h2>
            <img src={item.image_url} alt={item.name} />
            <p><strong>Price:</strong> ${item.price}</p>
            <p><strong>Brand:</strong> {item.brand}</p>
            <p><strong>Status:</strong> {item.status}</p>
        </div>
    );
};

export default ItemDetails;
