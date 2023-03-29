import React, { useContext, useState, useRef } from 'react';
import { UserContext } from '../../context/userContext';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles.scss';

const Login = () => {
  const { loginModal, toggleModal, signIn } = useContext(UserContext);
  const [validation, setValidation] = useState('');
  const emailRef = useRef();
  const loginPwdRef = useRef();
  const formRef = useRef();
  const navigate = useNavigate();

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      await signIn(emailRef.current.value, loginPwdRef.current.value);

      // clear inputs, show notification and redirect
      setValidation('');
      toggleModal('close');

      toast.error(`Rebonjour!`, {
        className: 'notification',
        position: 'top-right',
        autoClose: 750,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: 'dark',
        icon: false,
        bodyClassName: 'toastify-color-welcome',
      });

      navigate('/');
    } catch (error) {
      setValidation('Adresse email et/ou mot de passe incorrect.');
    }
  };

  return (
    <>
      <ToastContainer />

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
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
