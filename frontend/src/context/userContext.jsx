import { createContext, useState } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebaseConfig';

export const UserContext = createContext();

export const UserContextProvider = (props) => {
  const [loginModal, setLoginModal] = useState(false);

  const toggleModal = (modal) => {
    if (modal === 'signIn') setLoginModal(true);
    if (modal === 'close') setLoginModal(false);
  };

  return <UserContext.Provider value={{ loginModal, toggleModal }}>{props.children}</UserContext.Provider>;
};
