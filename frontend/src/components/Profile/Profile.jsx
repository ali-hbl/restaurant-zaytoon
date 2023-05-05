import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import useFetch from '../../hooks/useFetch';
import ReservationList from '../ReservationList/ReservationList';
import OrderList from '../OrderList/OrderList';
import 'react-tooltip/dist/react-tooltip.css';
import './styles.scss';

const Profil = () => {
  const { currentUser } = useContext(UserContext);
  const { data } = useFetch(`users/${currentUser.uid}`);

  const uid = currentUser.uid;
  const username = data.results && data.results[0]?.username; // check if not undefined and then assign it because it is undefined on first render

  const [reservations, setReservations] = useState(null);
  const [orders, setOrders] = useState(null);

  useEffect(() => {
    // get reservations
    const fetchReservations = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}profile/${uid}/my-reservations`);
        const data = await response.json();
        setReservations(data.results);
      } catch (error) {
        console.error(error);
      }
    };

    // get orders
    const fetchOrders = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}profile/${uid}/my-orders`);
        const data = await response.json();
        setOrders(data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchReservations();
    fetchOrders();
  }, [uid]);

  const renderOrders = () => {
    return orders && orders.length > 0 ? <OrderList orders={orders} /> : <p>Aucune commande.</p>;
  };

  const renderReservations = () => {
    return reservations && reservations.length > 0 ? (
      <ReservationList reservations={reservations} />
    ) : (
      <p>Aucune réservation.</p>
    );
  };

  return (
    <div className="profile">
      <h1>Bienvenue sur votre page de profil, {username}!</h1>

      <div className="orders">
        <h2>Mes commandes</h2>
        {renderOrders()}
      </div>

      <div className="reservations">
        <h2>Mes réservations</h2>
        {renderReservations()}
      </div>
    </div>
  );
};

export default Profil;
