import React, { useContext } from 'react';
import { UserContext } from '../../context/userContext';
import './styles.scss';

const Login = () => {
  const { loginModal, toggleModal } = useContext(UserContext);

  return (
    <>
      {loginModal && (
        <div className="modal">
          <div className="modal-overlay" onClick={() => toggleModal('close')}></div>
          <div className="modal-content">
            <div className="modal-header">
              <h2>Connectez-vous</h2>
              <button onClick={() => toggleModal('close')}>&#x2715;</button>
            </div>

            <form>
              <input
                type="email"
                name="email"
                id="signUpEmail"
                placeholder="Adresse email"
                className="input-form"
                required
              />

              <input
                type="password"
                name="pwd"
                id="signUpPwd"
                placeholder="Mot de passe"
                className="input-form"
                required
              />

              <button className="btn-login" type='submit'>Se connecter</button>

              <p>Mot de passe oublié?</p>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
