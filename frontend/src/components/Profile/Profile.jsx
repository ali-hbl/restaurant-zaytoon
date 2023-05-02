import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import useFetch from '../../hooks/useFetch';
import './styles.scss';

const Profil = () => {
  const { currentUser } = useContext(UserContext);
  const { data } = useFetch(`users/${currentUser.uid}`);
  const [reservationsData, setReservationsData] = useState(null);
  // const { orders } = useFetch('profile/my-orders');
  const [profilePic, setProfilePic] = useState(localStorage.getItem('profilePic'));

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = () => {
      localStorage.setItem('profilePic', reader.result);
      setProfilePic(reader.result);
    };
  };

  const handleDelete = () => setProfilePic('');

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
        {profilePic && (
          <>
            <img src={profilePic} alt="Profile Pic" onClick={() => document.getElementById('profile-pic').click()} />
            <button className="delete-btn" onClick={handleDelete}>
              &#x2715;
            </button>
          </>
        )}
      </div>

      {!profilePic && (
        <label htmlFor="profile-pic" className="profile-label">
          Ajouter une photo de profil
        </label>
      )}

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
