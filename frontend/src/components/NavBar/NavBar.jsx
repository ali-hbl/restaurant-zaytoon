import { useState, useContext } from 'react';
import { UserContext } from '../../context/userContext';
import { RxHamburgerMenu, RxMagnifyingGlass, RxCross1 } from 'react-icons/rx';
import { FaShoppingCart } from 'react-icons/fa';
import { CgLogIn, CgLogOff } from 'react-icons/cg';
import { NavLink, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebaseConfig';

import './styles.scss';

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(true);
  const { toggleModal } = useContext(UserContext);
  const navigate = useNavigate();

  const navStyle = ({ isActive }) => {
    return {
      color: isActive && '#fff',
    };
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      alert('Nous ne pouvons pas vous déconnecter, veuillez réessayer svp.');
    }
  };

  return (
    <header>
      <div className="logo">
        <NavLink to="/" style={navStyle}>
          <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="Ô Zaytoon" />
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
          <NavLink to="/order" style={navStyle}>
            Commander
          </NavLink>
          <NavLink to="/reservations" style={navStyle}>
            Réservations
          </NavLink>
          <NavLink to="/sign-up" style={navStyle}>
            S'inscrire
          </NavLink>
          <NavLink to="/contact" style={navStyle}>
            Contact
          </NavLink>
        </nav>
      )}

      <div className="icons">
        <i className="icon-login">
          <CgLogIn onClick={() => toggleModal('signIn')} />
        </i>
        <i className="icon-logout">
          <CgLogOff onClick={() => handleLogout} />
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
