import { useState, useContext } from 'react';
import { UserContext } from '../../context/userContext';
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx';
import { FaShoppingCart } from 'react-icons/fa';
import { CgLogIn, CgLogOff, CgProfile } from 'react-icons/cg';
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

  const toggleMenu = () => setShowMenu(!showMenu);

  const goToProfile = () => navigate('/profile');

  const handleLogout = async () => {
    try {
      // logout, show notification and redirect
      await signOut(auth);

      toast.error(`À bientôt!`, {
        position: 'top-right',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: 'dark',
        icon: false,
        className: 'notification',
        bodyClassName: 'toastify-color-welcome',
      });

      navigate('/');
    } catch (error) {
      alert("Nous n'avons pas réussi à vous déconnecter, veuillez réessayer svp.");
      console.error(error);
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
          <NavLink to="/orders" style={navStyle}>
            Commander
          </NavLink>
          <NavLink to="/reservations" style={navStyle}>
            Réservations
          </NavLink>
          {!currentUser && (
            <NavLink to="/sign-up" style={navStyle}>
              S'inscrire
            </NavLink>
          )}
          <NavLink to="/contact" style={navStyle}>
            Contact
          </NavLink>
        </nav>
      )}

      <div className="icons">
        {currentUser ? (
          <>
            <i data-tooltip-id="logout-tooltip" data-tooltip-content="Déconnexion">
              <Tooltip id="logout-tooltip" place="left" className="tooltip" />
              <CgLogOff onClick={handleLogout} />
            </i>

            <i>
              <CgProfile onClick={goToProfile} />
            </i>
          </>
        ) : (
          <i data-tooltip-id="login-tooltip" data-tooltip-content="Se connecter">
            <Tooltip id="login-tooltip" place="left" className="tooltip" />
            <CgLogIn onClick={() => toggleModal('logIn')} />
          </i>
        )}
        <i>
          <FaShoppingCart />
        </i>
        <i className="menu" onClick={toggleMenu}>
          {showMenu ? <RxCross1 /> : <RxHamburgerMenu />}
        </i>
      </div>
    </header>
  );
};

export default NavBar;
