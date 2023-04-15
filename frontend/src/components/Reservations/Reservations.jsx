import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/userContext';
import { toast } from 'react-toastify';
import TimePicker from '../TimePicker/TimePicker';
import './styles.scss';

const Reservations = () => {
  const { currentUser } = useContext(UserContext);
  const [selectedTime, setSelectedTime] = useState(null);
  const navigate = useNavigate();

  const handleTimeChange = (time) => setSelectedTime(time);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const uid = currentUser.uid;
    const numGuests = formData.get('num_guests');
    const name = formData.get('name');
    const phone = formData.get('phone');
    const email = formData.get('email');

    try {
      // POST reservation to database
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}reservations`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ uid, name, email, phone, selectedTime, numGuests }),
      });

      if (response.ok) {
        // clear inputs, show notification and redirect
        form.reset();

        toast.error(`Votre réservation est confirmée!`, {
          position: 'top-right',
          autoClose: 2500,
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
    <>
      <div className="reservation">
        <div className="reservation-header">
          <h3>Bienvenue sur notre page de réservations! </h3>
          <h4>Nous sommes ravis de vous accueillir chez nous et espérons que vous passerez un excellent moment.</h4>
          <p>Ici, vous pouvez réserver une table en indiquant la date, l'heure et le nombre de personnes.</p>
          <p>À très bientôt!</p>
        </div>

        <div className="reservation-container">
          <div className="reservation-container-image"></div>

          <div className="reservation-container-form">
            <h1>Réserver une table</h1>

            <form onSubmit={handleSubmit}>
              <div className="reservation-container-form-holder">
                <div className="reservation-inputs">
                  <select name="num_guests" required>
                    <option value="1">1 couvert</option>
                    <option value="2">2 couverts</option>
                    <option value="3">3 couverts</option>
                    <option value="4">4 couverts</option>
                    <option value="5">5 couverts</option>
                    <option value="6">6 couverts</option>
                    <option value="7">7 couverts</option>
                    <option value="8">8 couverts</option>
                    <option value="9">9 couverts</option>
                    <option value="10">10 couverts</option>
                    <option value="+10">+10 couverts</option>
                  </select>

                  <TimePicker onTimeChange={handleTimeChange} />
                  <input type="text" name="name" placeholder="Nom" required />
                  <input type="text" name="phone" placeholder="Téléphone" pattern="[0-9]{10}" required />
                  <input type="email" name="email" placeholder="Adresse mail" required />
                </div>
              </div>

              <div className="reservation-button">
                <button type="submit" className="btn">
                  Réserver
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reservations;
