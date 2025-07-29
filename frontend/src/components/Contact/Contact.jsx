import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/usercontext.jsx';
import { toast } from 'react-toastify';
import './styles.scss';

const Contact = () => {
  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const uid = currentUser.uid;
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const message = formData.get('message');

    try {
      // POST message to database
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}messages/post-message`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ uid, name, email, phone, message }),
      });

      if (response.ok) {
        // clear inputs, show notification and redirect
        form.reset();

        toast.error(`Votre message a été envoyé.`, {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          progress: undefined,
          theme: 'dark',
          icon: false,
          className: 'notification',
          bodyClassName: 'toastify-color-welcome',
        });

        setTimeout(() => {
          navigate('/');
        }, 1000);
      }
    } catch (error) {
      alert('Une erreur est survenue. Veuillez réessayer svp.');
      console.error(error);
    }
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
          <input type="text" name="name" placeholder="Nom d'utilisateur" required />
          <input type="email" name="email" placeholder="Adresse email" required />
          <input type="text" name="phone" placeholder="Votre téléphone" required />
          <textarea name="message" placeholder="Votre message" required></textarea>

          <button type="submit" className="btn">
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
