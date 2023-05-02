import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import useFetch from '../../hooks/useFetch';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import './styles.scss';

const Profil = () => {
  const { currentUser } = useContext(UserContext);
  const { data } = useFetch(`users/${currentUser.uid}`);
  const [reservationsData, setReservationsData] = useState(null);
  // const { orders } = useFetch('profile/my-orders');
  const [profilePic, setProfilePic] = useState(localStorage.getItem('profilePic'));

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        localStorage.setItem('profilePic', reader.result);
        setProfilePic(event.target.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleDelete = () => {
    setProfilePic(null);
    localStorage.clear();

    const fileInput = document.getElementById('profile-pic');
    fileInput.value = ''; // reset input file value
  };

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}profile/my-reservations`);
        const data = await response.json();
        setReservationsData(data.results[0].phone);
      } catch (error) {
        console.error(error);
      }
    };

    fetchReservations();
  }, []);

  console.log('reservationsData ===>', reservationsData);

  // check if not undefined and then assign it because it is undefined on first render
  const username = data.results && data.results[0]?.username;

  return (
    <div className="profile">
      <h1>Bienvenue sur votre page de profil, {username}!</h1>

      <div className="profile-pic">
        <input type="file" name="profile-pic" id="profile-pic" onChange={handleFileChange} />

        {profilePic ? (
          <>
            <img src={profilePic} alt="Profile Pic" onClick={() => document.getElementById('profile-pic').click()} />
            <button className="delete-btn" onClick={handleDelete}>
              &#x2715;
            </button>
          </>
        ) : (
          <>
            <img
              src={process.env.PUBLIC_URL + '/images/default-profile-pic.jpeg'}
              className="default-pic"
              alt="Default profile pic"
              data-tooltip-id="profilePic-tooltip"
              data-tooltip-content="Ajouter une photo de profil"
              onClick={() => document.getElementById('profile-pic').click()}
            />
            <Tooltip id="profilePic-tooltip" place="right" className="tooltip" />
          </>
        )}
      </div>

      <div className="orders">
        <h2>Mes commandes</h2>
        <ul>
          <li>Commande #123456</li>
          <li>Commande #789012</li>
          <li>Commande #345678</li>
        </ul>
      </div>

      <div className="reservations">
        <h2>Mes réservations</h2>
        <ul>
          <li>Réservation #123</li>
          <li>Réservation #456</li>
          <li>Réservation #789</li>
        </ul>
      </div>
    </div>
  );
};

export default Profil;
