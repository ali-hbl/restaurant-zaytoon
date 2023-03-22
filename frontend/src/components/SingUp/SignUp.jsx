import { useState, useRef } from 'react';
import './styles.scss';

const SignUp = () => {
  const [validation, setValidation] = useState('');
  const emailRef = useRef();
  const pwdRef = useRef();
  const repeatPwdRef = useRef();

  const handleForm = (e) => {
    e.preventDefault();

    // Password validation
    if ((pwdRef.value.length || repeatPwdRef.value.length) < 6) {
      setValidation('6 caractères minimum.');
    }

    if (pwdRef.value !== repeatPwdRef.value) {
      setValidation('Les mots de passe ne sont pas identiques.');
    }
  };

  return (
    <div className="sign-up">
      <h1 className="sign-up-header">Inscrivez-vous</h1>

      <div className="sign-up-container">
        <form onSubmit={handleForm}>
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

          <button className="btn" type='submit'>S'inscrire</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
