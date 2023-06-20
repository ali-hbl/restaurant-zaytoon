import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div>
          <h3>HEURES D'OUVERTURE</h3>
          <p>
            <u>Ouvert</u> : mardi à samedi de 12h00 à 23h00.
            <br />
            <u>Fermé</u> : dimanche et lundi.
          </p>
        </div>

        <div>
          <h3>CONTACT</h3>
          <p>
            Des questions ou des commentaires à propos de notre restaurant? Veuillez prendre contact via notre{' '}
            <Link to="/contact">formulaire de contact</Link> et nous vous répondrons dans les plus brefs délais.
          </p>
        </div>

        <div>
          <h3>A PROPOS</h3>
          <p>
            Notre restaurant oriental propose une cuisine authentique et savoureuse préparée avec des ingrédients frais
            et de qualité par notre équipe de chefs passionnés.
            <br />
            Nous avons hâte de vous servir bientôt!
          </p>
        </div>

        <div className="logo">
          <a href="/">
            <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="Ô Zaytoon" />
          </a>
        </div>
      </div>

      <p className="footer-copyright">&copy;2022-2023 HABOULA Ali</p>
    </footer>
  );
};

export default Footer;
