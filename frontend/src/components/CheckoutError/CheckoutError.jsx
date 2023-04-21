import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.scss';

const CheckoutError = () => {
  return (
    <div className="checkout-error">
      <h1 className="checkout-error-header">
        Désolé, votre commande n'a pas été traitée correctement en raison d'un problème technique.
      </h1>
      <h3>
        Nous ferons tout notre possible pour résoudre ce problème dès que possible. Merci pour votre compréhension et
        votre patience. <br /> Veuillez nous excuser pour ce désagrément.
      </h3>

      <NavLink to="/">Revenir à l'accueil</NavLink>
    </div>
  );
};

export default CheckoutError;
