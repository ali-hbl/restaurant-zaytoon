import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.scss';

const CheckoutSuccess = () => {
  return (
    <div className="checkout-success">
      <h1 className="checkout-success-header">Votre commande a été confirmée avec succès!</h1>
      <h3>
        Un email de confirmation vous a été envoyé.
        <br />
        Votre plat sera préparé immédiatement et livré dans les meilleurs délais.
      </h3>
      <NavLink to="/">Revenir à l'accueil</NavLink>
    </div>
  );
};

export default CheckoutSuccess;
