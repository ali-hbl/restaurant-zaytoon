import React, { useContext, useRef } from 'react';
import { UserContext } from 'context/UserContext';
import { Link, useNavigate } from 'react-router-dom';
import './styles.scss';

const Login = () => {
  const { loginModal, toggleModal, signIn, validation } = useContext(UserContext);
  const emailRef = useRef();
  const loginPwdRef = useRef();
  const formRef = useRef();
  const navigate = useNavigate();

  const handleForm = async (e) => {
    e.preventDefault();

    await signIn(emailRef.current.value, loginPwdRef.current.value);
    navigate('/');
  };

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

            <form onSubmit={handleForm} ref={formRef}>
              <input
                ref={emailRef}
                type="email"
                name="email"
                id="signInEmail"
                placeholder="Adresse email"
                className="input-form"
                required
              />
              <input
                ref={loginPwdRef}
                type="password"
                name="pwd"
                id="signInPwd"
                placeholder="Mot de passe"
                className="input-form"
                required
              />

              <button type="submit">Se connecter</button>
              <p>{validation}</p>

              <Link to="/reset-password" onClick={() => toggleModal('close')}>
                Mot de passe oublié?
              </Link>

              <Link to="/sign-up" onClick={() => toggleModal('close')}>
                Pas de compte? Inscrivez-vous!
              </Link>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
