import { useEffect, useContext } from 'react';
import { UserContext } from '../../context/userContext';
// import Orders from './components/Orders/Orders';
// import Reservations from './components/Reservations/Reservations';
import './styles.scss';

const Profil = () => {
  const { currentUser } = useContext(UserContext);
  const username = localStorage.getItem('username');

  // const [orders, setOrders] = useState([]);
  // const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      // const ordersRef = firestore.collection('orders').where('uid', '==', currentUser.uid);
      // const snapshot = await ordersRef.get();
      // const ordersData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      // setOrders(ordersData);
    };

    const fetchReservations = async () => {
      // const reservationsRef = firestore.collection('reservations').where('uid', '==', currentUser.uid);
      // const snapshot = await reservationsRef.get();
      // const reservationsData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      // setReservations(reservationsData);
    };

    fetchOrders();
    fetchReservations();
  }, [currentUser]);

  return (
    <div className="profil">
      <h1>Bienvenue sur votre page de profil, {username}!</h1>

      <div className="photo"></div>

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
