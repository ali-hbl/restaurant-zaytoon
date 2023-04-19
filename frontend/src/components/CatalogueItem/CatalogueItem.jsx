import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CatalogueItem = ({ item }) => {
  const cart = useContext(CartContext);

  return (
    <div className="box">
      <div className="box-image">
        <img src={process.env.REACT_APP_BACKEND_URL + item.image_url} alt={item.title} />
      </div>
      <div className="catalogue-content">
        <h3>{item.name}</h3>
        <p className="item-price">{item.price} €</p>
        <p className="item-description">{item.description}</p>
        <button type="submit" className="btn" onClick={() => cart.addOneToCart(item.id)}>
          Commander
        </button>
      </div>
    </div>
  );
};

export default CatalogueItem;
