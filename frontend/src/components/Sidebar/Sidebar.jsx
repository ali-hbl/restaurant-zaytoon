import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CartProduct from '../CartProduct/CartProduct';
import './styles.scss';

const Sidebar = ({ isOpen, onClose }) => {
  const cart = useContext(CartContext);
  const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button onClick={onClose}>&#x2715;</button>

      <div className="sidebar-body">
        {productsCount > 0 ? (
          <>
            <p>Votre panier :</p>
            {cart.items.map((item, index) => {
              return <CartProduct key={index} id={item.id} quantity={item.quantity}></CartProduct>;
            })}

            <h1>Total: {cart.getTotalCost().toFixed(2)} €</h1>
            <button>Commander maintenant!</button>
          </>
        ) : (
          <h1>Votre panier est vide.</h1>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
