import React, { useContext, useState, useRef } from 'react';
import { UserContext } from '../../context/userContext';
import { useNavigate } from 'react-router-dom';
import './styles.scss';

const Login = () => {
  const [validation, setValidation] = useState('');
  const { loginModal, toggleModal, signIn } = useContext(UserContext);
  const emailRef = useRef();
  const loginPwdRef = useRef();
  const formRef = useRef();
  const navigate = useNavigate();

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      await signIn(emailRef.current.value, loginPwdRef.current.value);

      setValidation(''); // clear inputs and redirect
      toggleModal('close');

      //TODO: toast avec message de retour
      navigate('/');

      console.log('bienvenu user');
    } catch (error) {
      setValidation('Adresse email et/ou mot de passe incorrect.');
    }
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

              <button className="btn-login" type="submit">
                Se connecter
              </button>

              <p>{validation}</p>

              <p>Mot de passe oublié?</p>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
