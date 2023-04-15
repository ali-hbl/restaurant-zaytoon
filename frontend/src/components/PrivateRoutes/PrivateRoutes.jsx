import { useContext, useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { UserContext } from '../../context/userContext';
import { toast } from 'react-toastify';

const PrivateRoutes = () => {
  const { currentUser, toggleModal } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      // redirect, open login modal and show notification
      navigate('/');
      toggleModal('logIn');

      toast.error(`Veuillez vous connecter pour accéder à cette page.`, {
        position: 'top-right',
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        progress: undefined,
        theme: 'dark',
        icon: false,
        className: 'notification',
        bodyClassName: 'toastify-color-welcome',
      });
    }
  }, [currentUser, navigate, toggleModal]);

  return <>{currentUser ? <Outlet /> : null}</>;
};

export default PrivateRoutes;
