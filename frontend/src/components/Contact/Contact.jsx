// import { useState } from 'react';
import './styles.scss';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: submit form data to backend
  };

  return (
    <div className="contact">
      <h1 className="contact-header">Contactez-nous</h1>

      <div className="contact-container">
        <form onSubmit={handleSubmit}>
          <input type="text" id="name" name="name" placeholder="Nom d'utilisateur" />
          <input type="email" id="email" name="email" placeholder="Adresse email" />
          <input type="text" id="phone" name="phone" placeholder="Votre téléphone" />
          <textarea id="message" name="message" placeholder="Votre message"></textarea>

          <button className="btn" type="submit">
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
