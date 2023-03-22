import React from 'react';
import { Link } from 'react-router-dom';
import { FaAngleUp } from 'react-icons/fa';
import './styles.scss';

const Footer = () => {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <>
      <footer>
        <div className="footer-container">
          <div>
            <h3>A PROPOS</h3>
            <p>
              Notre restaurant oriental propose une cuisine authentique et savoureuse préparée avec des ingrédients
              frais et de qualité par notre équipe de chefs passionnés.
            </p>
          </div>

          <div>
            <h3>CONTACT</h3>
            <span>
              Des questions ou des commentaires à propos de notre restaurant? Veuillez prendre contact via notre
              <Link to="/contact"> formulaire de contact</Link> et nous vous répondrons dans les plus brefs délais.
            </span>
          </div>

          <div>
            <h3>HEURES D'OUVERTURE</h3>
            <ul>
              <li>
                <u>Lundi</u> : Fermé
              </li>
              <li>
                <u>Mardi</u> - Jeudi : 11h30 - 14h30 / 17h30 - 21h00
              </li>
              <li>
                <u>Vendredi</u> : 11h30 - 14h30 / 17h30 - 22h00
              </li>
              <li>
                <u>Samedi</u> : 17h30 - 22h00
              </li>
              <li>
                <u>Dimanche</u> : 11h30 - 14h30 / 17h30 - 20h00
              </li>
            </ul>
          </div>
        </div>
        <p className="footer-copyright">&copy;2022-2023 Haboula Ali</p>
      </footer>

      <FaAngleUp className="btn-top" onClick={goToTop} />
    </>
  );
};

export default Footer;
