import React, { useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../firebaseConfig';
import './styles.scss';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleResetPassword = (e) => {
    e.preventDefault();

    sendPasswordResetEmail(auth, email)
      .then(() => {
        setMessage(
          `Un email a été envoyé à l'adresse ${email}. \n Veuillez suivre les instructions pour réinitialiser votre mot de passe.`
        );
      })
      .catch((error) => {
        error.code === 'auth/user-not-found'
          ? setMessage('Utilisateur inexistant.')
          : setMessage(`Une erreur s'est produite, veuillez réessayer.`);
      });
  };

  return (
    <div className="reset-password">
      <h1 className="reset-password-header">Mot de passe oublié?</h1>

      <div className="reset-password-container">
        <form onSubmit={handleResetPassword}>
          <input
            type="email"
            name="email"
            id="signUpEmail"
            placeholder="Adresse email"
            className="input-form"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button type="submit">Récupérer mon mot de passe</button>
        </form>

        <p>{message}</p>
      </div>
    </div>
  );
};

export default ResetPassword;
