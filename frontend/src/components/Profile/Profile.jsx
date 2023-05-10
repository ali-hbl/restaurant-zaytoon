import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import useFetch from '../../hooks/useFetch';
import ReservationList from '../ReservationList/ReservationList';
import OrderList from '../OrderList/OrderList';
import Pagination from '../Pagination/Pagination';
import 'react-tooltip/dist/react-tooltip.css';
import './styles.scss';

const Profil = () => {
  const { currentUser } = useContext(UserContext);
  const { data } = useFetch(`users/${currentUser.uid}`);
  const [reservations, setReservations] = useState(null);
  const [orders, setOrders] = useState(null);
  const [currentOrdersPage, setCurrentOrdersPage] = useState(1);
  const [currentReservationsPage, setCurrentReservationsPage] = useState(1);

  // User infos
  const uid = currentUser.uid;
  const username = data.results?.[0]?.username ?? ''; // check if not undefined and then assign it because it is undefined on first render

  // Pagination
  const reservationsPostsPerPage = 5;
  const ordersPostsPerPage = 15;

  const lastOrdersIndex = currentOrdersPage * ordersPostsPerPage;
  const firstOrdersIndex = lastOrdersIndex - ordersPostsPerPage;
  const currentOrders = orders?.slice(firstOrdersIndex, lastOrdersIndex);

  const lastReservationsIndex = currentReservationsPage * reservationsPostsPerPage;
  const firstReservationsIndex = lastReservationsIndex - reservationsPostsPerPage;
  const currentReservations = reservations?.slice(firstReservationsIndex, lastReservationsIndex);

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
    return orders?.length > 0 ? <OrderList orders={currentOrders} /> : <p>Aucune commande.</p>;
  };

  const renderReservations = () => {
    return reservations?.length > 0 ? (
      <ReservationList reservations={currentReservations} />
    ) : (
      <p>Aucune réservation.</p>
    );
  };

  return (
    <div className="profile">
      <h1>Bienvenue sur votre page de profil, {username}!</h1>

      <div className="profile-container">
        <div className="orders">
          <h2>Mes commandes</h2>
          {renderOrders()}
          <Pagination
            totalPosts={orders?.length ?? 0}
            postsPerPage={ordersPostsPerPage}
            currentPage={currentOrdersPage}
            setCurrentPage={setCurrentOrdersPage}
          />
        </div>

        <div className="reservations">
          <h2>Mes réservations</h2>
          {renderReservations()}
          <Pagination
            totalPosts={reservations?.length ?? 0}
            postsPerPage={reservationsPostsPerPage}
            currentPage={currentReservationsPage}
            setCurrentPage={setCurrentReservationsPage}
          />
        </div>
      </div>
    </div>
  );
};

export default Profil;
