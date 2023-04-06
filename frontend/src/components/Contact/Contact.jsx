import './styles.scss';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: submit form data to backend + toast notification on success, store datas to backend?
  };

  return (
    <div className="contact">
      <h1 className="contact-header">Contactez-nous</h1>
      <h3 className="contact-sub-header">
        Une demande de renseignement ou un commentaire? Veuillez remplir notre formulaire de contact ci-dessous. <br />
        Nous serions heureux d’avoir de vos nouvelles!
      </h3>

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
