import { createContext, useState, useEffect } from 'react';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { toast } from 'react-toastify';
import { auth } from '../firebaseConfig';

export const UserContext = createContext();

export const UserContextProvider = (props) => {
  const [loginModal, setLoginModal] = useState(false);
  const [currentUser, setCurrentUser] = useState();
  const [loadingData, setLoadingData] = useState(true);
  const [validation, setValidation] = useState('');

  const signIn = (email, pwd) => {
    signInWithEmailAndPassword(auth, email, pwd)
      .then((user) => {
        // clear inputs, show notification and redirect
        setValidation('');
        toggleModal('close');

        toast.error(`Rebonjour!`, {
          position: 'top-right',
          autoClose: 700,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          progress: undefined,
          theme: 'dark',
          icon: false,
          className: 'notification',
          bodyClassName: 'toastify-color-welcome',
        });
      })
      .catch((error) => {
        error.code === 'auth/user-not-found'
          ? setValidation('Adresse email invalide.')
          : setValidation('Mot de passe invalide.');
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoadingData(false);
    });

    // clean up function
    return unsubscribe;
  }, []);

  const toggleModal = (modal) => {
    if (modal === 'logIn') setLoginModal(true);
    if (modal === 'close') setLoginModal(false);
  };

  return (
    <UserContext.Provider value={{ loginModal, toggleModal, currentUser, signIn, validation }}>
      {!loadingData && props.children}
    </UserContext.Provider>
  );
};
