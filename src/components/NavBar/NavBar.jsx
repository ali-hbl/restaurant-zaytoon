import { useState } from 'react';
import { RxHamburgerMenu, RxMagnifyingGlass, RxCross1 } from 'react-icons/rx';
import { FaShoppingCart } from 'react-icons/fa';
import { CgLogIn, CgLogOff } from 'react-icons/cg';
import { NavLink } from 'react-router-dom';
import logo from '../../backend/images/logo.png';
import './styles.scss';

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(true);

  const navStyle = ({ isActive }) => {
    return {
      color: isActive && '#fff',
    };
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header>
      <div className="logo">
        <NavLink to="/" style={navStyle}>
          <img src={logo} alt="Ô Zaytoon" />
        </NavLink>
      </div>

      {showMenu && (
        <nav>
          <NavLink to="/" style={navStyle}>
            Accueil
          </NavLink>
          <NavLink to="/catalogue" style={navStyle}>
            Catalogue
          </NavLink>
          <NavLink to="/menu" style={navStyle}>
            La Carte
          </NavLink>
          <NavLink to="/order" style={navStyle}>
            Commander
          </NavLink>
          <NavLink to="/reservations" style={navStyle}>
            Réservations
          </NavLink>
          <NavLink to="/contact" style={navStyle}>
            Contact
          </NavLink>
        </nav>
      )}

      <div className="icons">
        <i className="icon-login">
          <CgLogIn />
        </i>
        <i className="icon-search">
          <RxMagnifyingGlass />
        </i>
        <i className="icon-cart">
          <FaShoppingCart />
        </i>
        <i className="icon-hamburger" id="menu" onClick={toggleMenu}>
          {showMenu ? <RxCross1 /> : <RxHamburgerMenu />}
        </i>
      </div>
    </header>
  );
};

export default NavBar;
