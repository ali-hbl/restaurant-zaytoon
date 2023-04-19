import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CartProduct from '../CartProduct/CartProduct';
import './styles.scss';

const Sidebar = ({ isOpen, onClose }) => {
  const cart = useContext(CartContext);
  const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);

  const handleCheckout = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}checkout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ items: cart.items }),
      });

      const data = await response.json();
      if (data.url) window.location.assign(data.url);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="btn-close" onClick={onClose}>
        &#x2715;
      </button>

      <div className="sidebar-body">
        {productsCount > 0 ? (
          <>
            <h1>Panier ({productsCount})</h1>
            {cart.items.map((item, index) => {
              return <CartProduct key={index} id={item.id} quantity={item.quantity}></CartProduct>;
            })}

            <div className="sidebar-body-summary">
              <div className="sidebar-body-summary-price">
                <h1>Total :</h1>
                <h1>{cart.getTotalCost().toFixed(2)} €</h1>
              </div>

              <div className="sidebar-body-summary-button">
                <button className="btn-checkout" onClick={handleCheckout}>
                  Finalisation de la commande
                </button>
              </div>
            </div>
          </>
        ) : (
          <h1>Votre panier est vide.</h1>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
