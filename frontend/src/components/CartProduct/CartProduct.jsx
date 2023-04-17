import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './styles.scss';

const CartProduct = (props) => {
  const cart = useContext(CartContext);
  const id = props.id;
  const quantity = props.quantity;
  const productData = cart.getProductData(id);

  return (
    <>
      <h3>{productData.name}</h3>
      <p>{quantity} total</p>
      <p>{(quantity * productData.price).toFixed(2)} €</p>
      <button onClick={() => cart.deleteFromCart(id)}>Supprimer</button>
      <hr />
    </>
  );
};

export default CartProduct;
