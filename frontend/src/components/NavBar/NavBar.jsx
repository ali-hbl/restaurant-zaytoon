import { useState, useContext } from 'react';
import { UserContext } from '../../context/userContext';
import { RxHamburgerMenu, RxMagnifyingGlass, RxCross1 } from 'react-icons/rx';
import { FaShoppingCart } from 'react-icons/fa';
import { CgLogIn, CgLogOff } from 'react-icons/cg';
import { NavLink, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebaseConfig';
import { ToastContainer, toast } from 'react-toastify';
import { Tooltip } from 'react-tooltip';
import 'react-toastify/dist/ReactToastify.css';
import 'react-tooltip/dist/react-tooltip.css';
import './styles.scss';

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(true);
  const { toggleModal, currentUser } = useContext(UserContext);
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

      toast.error(`Déconnexion en cours...`, {
        className: 'notification',
        position: 'top-right',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: 'colored',
        icon: false,
        bodyClassName: 'toastify-color-welcome',
      });

      navigate('/');
    } catch (error) {
      alert("Nous n'avons pas réussi à vous déconnecter, veuillez réessayer svp.");
    }
  };

  return (
    <header>
      <ToastContainer />

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
        {currentUser ? (
          <i className="icon-logout" data-tooltip-id="logout-tooltip" data-tooltip-content="Déconnexion">
            <Tooltip id="logout-tooltip" place="left" className="tooltip" />
            <CgLogOff onClick={handleLogout} />
          </i>
        ) : (
          <i className="icon-login" data-tooltip-id="login-tooltip" data-tooltip-content="Se connecter">
            <Tooltip id="login-tooltip" place="left" className="tooltip" />
            <CgLogIn onClick={() => toggleModal('signIn')} />
          </i>
        )}
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
