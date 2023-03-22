import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserContextProvider = (props) => {
  const [loginModal, setLoginModal] = useState(false);

  const toggleModal = (modal) => {
    if (modal === 'signIn') setLoginModal(true);
    if (modal === 'close') setLoginModal(false);
  };

  return <UserContext.Provider value={{ loginModal, toggleModal }}>{props.children}</UserContext.Provider>;
};
