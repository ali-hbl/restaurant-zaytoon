import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './styles.scss';

const CartProduct = (props) => {
  const cart = useContext(CartContext);
  const id = props.id;
  const quantity = props.quantity;
  const productData = cart.getProductData(id);

  return (
    <div className="cart-product">
      <div className="cart-product-image">
        <img src={process.env.REACT_APP_BACKEND_URL + productData.image_url} alt={productData.name} />
      </div>

      <div className="cart-product-details">
        <h3>{productData.name}</h3>
        <p>{(quantity * productData.price).toFixed(2)} €</p>
        <p>Quantité : {quantity}</p>

        <button onClick={() => cart.addOneToCart(id)}>Ajouter</button>
        <button onClick={() => cart.removeOneFromCart(id)}>Supprimer</button>
      </div>
    </div>
  );
};

export default CartProduct;
