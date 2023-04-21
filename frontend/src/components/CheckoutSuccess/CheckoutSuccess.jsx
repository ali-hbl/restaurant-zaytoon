import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.scss';

const CheckoutSuccess = () => {
  return (
    <div className="checkout-success">
      <h1 className="checkout-success-header">Votre commande a été confirmée avec succès!</h1>
      <h3>
        Nous sommes heureux de vous informer que votre plat sera préparé immédiatement et livré dans les meilleurs
        délais.
        <br />
        Nous espérons que vous apprécierez votre plat et que vous passerez une excellente journée!
      </h3>

      <NavLink to="/">Revenir à l'accueil</NavLink>
    </div>
  );
};

export default CheckoutSuccess;
