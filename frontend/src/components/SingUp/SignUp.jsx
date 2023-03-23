import { useState, useRef } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebaseConfig';
import { useNavigate } from 'react-router-dom';
import './styles.scss';

const SignUp = () => {
  const [validation, setValidation] = useState('');
  const formRef = useRef();
  const emailRef = useRef();
  const pwdRef = useRef();
  const repeatPwdRef = useRef();
  const navigate = useNavigate();

  // Handle Form
  const handleForm = async (e) => {
    e.preventDefault();

    if ((pwdRef.current.value.length || repeatPwdRef.current.value.length) < 6) setValidation('6 caractères minimum.');

    if (pwdRef.current.value !== repeatPwdRef.current.value) setValidation('Les mots de passe ne sont pas identiques.');

    // sign up the user
    createUserWithEmailAndPassword(auth, emailRef.current.value, pwdRef.current.value)
      .then(() => {
        // clear inputs and redirect
        setValidation('');
        navigate('/');
      })
      .catch((error) => {
        if (error.code === 'auth/invalid-email') {
          setValidation("Format d'email invalide.");
        }

        if (error.code === 'auth/email-already-in-use') {
          setValidation('Adresse email déjà utilisée.');
        }
      });
  };

  return (
    <div className="sign-up">
      <h1 className="sign-up-header">Inscrivez-vous</h1>

      <div className="sign-up-container">
        <form onSubmit={handleForm} ref={formRef}>
          <input
            ref={emailRef}
            type="email"
            name="email"
            id="signUpEmail"
            placeholder="Adresse email"
            className="input-form"
            required
          />
          <input
            ref={pwdRef}
            type="password"
            name="pwd"
            id="signUpPwd"
            placeholder="Mot de passe"
            className="input-form"
            required
          />
          <input
            ref={repeatPwdRef}
            type="password"
            name="repeatPwd"
            id="repeatPwd"
            placeholder="Confirmer le mot de passe"
            className="input-form"
            required
          />
          <p>{validation}</p>

          <button className="btn" type="submit">
            S'inscrire
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
