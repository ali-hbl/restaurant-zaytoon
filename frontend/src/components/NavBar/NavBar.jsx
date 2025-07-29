import React, { useState, useContext, useEffect, useCallback } from 'react';
import { UserContext } from 'context/UserContext';
import { CartContext } from '../../context/CartContext';
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx';
import { FaShoppingCart } from 'react-icons/fa';
import { CgLogIn, CgLogOff, CgProfile } from 'react-icons/cg';
import { NavLink, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebaseConfig';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import { Tooltip } from 'react-tooltip';
import Sidebar from '../Sidebar/Sidebar';
import Badge from '../../components/Badge/Badge';
import 'react-toastify/dist/ReactToastify.css';
import 'react-tooltip/dist/react-tooltip.css';
import './styles.scss';

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { toggleModal, currentUser } = useContext(UserContext);
  const cart = useContext(CartContext);
  const navigate = useNavigate();

  const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);

  const handleNavbarStyle = ({ isActive }) => {
    return {
      color: isActive && '#fff',
    };
  };

  const handeGoToProfile = () => navigate('/profile');

  const handeMenuToggle = () => setShowMenu(!showMenu);

  const handleSidebarToggle = () => setIsSidebarOpen(!isSidebarOpen);

  // fix the hamburger menu bug
  const handleResize = useCallback(() => {
    setShowMenu(window.innerWidth >= 768);
  }, []);

  const handleLogout = async () => {
    try {
      // logout, show notification and redirect
      await signOut(auth);

      toast.error(`À bientôt!`, {
        position: 'top-right',
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
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

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  return (
    <header>
      <ToastContainer />
      <Sidebar isOpen={isSidebarOpen} onClose={handleSidebarToggle} />

      <div className="logo">
        <NavLink to="/" style={handleNavbarStyle}>
          <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="Ô Zaytoon" />
        </NavLink>
      </div>

      <div className="navbar">
        {showMenu && (
          <nav>
            <NavLink to="/" style={handleNavbarStyle}>
              Accueil
            </NavLink>
            <NavLink to="/catalogue" style={handleNavbarStyle}>
              La carte
            </NavLink>
            <NavLink to="/reservations" style={handleNavbarStyle}>
              Réservations
            </NavLink>
            {!currentUser && (
              <NavLink to="/sign-up" style={handleNavbarStyle}>
                S'inscrire
              </NavLink>
            )}
            <NavLink to="/contact" style={handleNavbarStyle}>
              Contact
            </NavLink>
            <NavLink to="/about" style={handleNavbarStyle}>
              À Propos
            </NavLink>
          </nav>
        )}
      </div>

      <div className="icons">
        {currentUser ? (
          <>
            <i data-tooltip-id="logout-tooltip" data-tooltip-content="Déconnexion">
              <Tooltip id="logout-tooltip" place="left" className="tooltip" />
              <CgLogOff onClick={handleLogout} />
            </i>

            <i>
              <CgProfile onClick={handeGoToProfile} />
            </i>
          </>
        ) : (
          <i data-tooltip-id="login-tooltip" data-tooltip-content="Se connecter">
            <Tooltip id="login-tooltip" place="left" className="tooltip" />
            <CgLogIn onClick={() => toggleModal('logIn')} />
          </i>
        )}

        <i className="cart">
          {productsCount > 0 && <Badge value={productsCount} className="badge" />}
          <FaShoppingCart onClick={handleSidebarToggle} />
        </i>

        <i className="menu" onClick={handeMenuToggle}>
          {showMenu ? <RxCross1 /> : <RxHamburgerMenu />}
        </i>
      </div>
    </header>
  );
};

export default NavBar;
