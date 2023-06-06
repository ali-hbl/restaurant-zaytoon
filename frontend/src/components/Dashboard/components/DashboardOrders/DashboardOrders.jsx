import React, { useState, useEffect } from 'react';
import useFetch from '../../../../hooks/useFetch';
import { FiDelete } from 'react-icons/fi';
import { Tooltip } from 'react-tooltip';
import { toast } from 'react-toastify';
import './styles.scss';

const DashboardOrders = () => {
  const [filterValue, setFilterValue] = useState('');
  const [orders, setOrders] = useState([]);
  const { data: ordersData } = useFetch('orders');

  const vowels = ['A', 'E', 'I', 'O', 'U', 'Y'];

  useEffect(() => {
    setOrders(ordersData?.results ?? []);
  }, [ordersData?.results]);

  const handleFilterChange = (e) => setFilterValue(e.target.value);

  const handleDeleteOrder = (timestamp) => {
    setOrders((prevOrders) => prevOrders.filter((order) => order.created_at !== timestamp));
  };

  const handleDelete = (timestamp) => {
    const confirmDelete = window.confirm('Êtes-vous sûr de vouloir supprimer ce message?');

    if (confirmDelete) {
      fetch(`${process.env.REACT_APP_BACKEND_URL}orders/delete-order/${timestamp}`, {
        method: 'DELETE',
      })
        .then((response) => {
          if (response.ok) {
            // show notification
            toast.error(`Commande supprimée de la base de données.`, {
              position: 'top-right',
              autoClose: 1500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              progress: undefined,
              theme: 'dark',
              icon: false,
              className: 'notification',
              bodyClassName: 'toastify-color-welcome',
            });

            handleDeleteOrder(timestamp);
          } else {
            alert('Erreur lors de la suppression de la commande, veuillez réessayer.');
          }
        })
        .catch((error) => {
          alert('Une erreur est survenue lors de la suppression de la commande.', error);
          console.error('Une erreur est survenue lors de la suppression de la commande.', error);
        });
    }
  };

  const calculateTotalPrice = (dishes) => {
    return dishes
      .reduce((total, dish) => {
        return total + dish.price;
      }, 0)
      .toFixed(2);
  };

  const filterAndSortOrdersBy = (orders, filterValue) => {
    const filterOrders = (order) => {
      switch (filterValue) {
        case 'single-dish':
          return order.order_details.dishes.length === 1;
        case 'multiple-dishes':
          return order.order_details.dishes.length > 1;
        default:
          return true;
      }
    };

    const sortBy = (a, b) => {
      switch (filterValue) {
        case 'timestamp':
          return new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
        case 'total':
          const aTotal = a.order_details.dishes.reduce((total, dish) => total + dish.price * dish.quantity, 0);
          const bTotal = b.order_details.dishes.reduce((total, dish) => total + dish.price * dish.quantity, 0);
          return aTotal - bTotal;
        case 'alphabetical':
          return a.order_details.firstname.localeCompare(b.order_details.firstname);
        default:
          return 0;
      }
    };

    return orders.filter(filterOrders).sort(sortBy);
  };

  const filteredOrders = filterAndSortOrdersBy(orders, filterValue);

  const renderDashboardOrders = () => {
    return filteredOrders.map((order, i) => (
      <div key={i} className="dashboard-orders-container">
        <p className="dashboard-orders-container-id">
          {vowels.includes(order.order_details.firstname.charAt(0).toUpperCase())
            ? `Commande d'${order.order_details.firstname}`
            : `Commande de ${order.order_details.firstname}`}
        </p>
        <p>
          <span>Date de commande: </span>
          {`Le ${new Date(order.created_at).toLocaleDateString('fr-FR')} à ${new Date(
            order.created_at
          ).toLocaleTimeString('fr-FR')}`}
        </p>
        <p>
          <span>Produit(s): </span>
          {order.order_details.dishes.map((dish) => `${dish.title} (${dish.quantity}x)`).join(', ')}
        </p>
        <p>
          <span>Total: </span>
          {calculateTotalPrice(order.order_details.dishes)}€
        </p>
        <span>
          <Tooltip id="delete-order-tooltip" place="left" className="tooltip" />
          <FiDelete
            className="btn-delete"
            data-tooltip-id="delete-order-tooltip"
            data-tooltip-content="Supprimer cette commande."
            onClick={() => handleDelete(order.created_at)}
          />
        </span>
      </div>
    ));
  };

  return (
    <>
      <h2>Récapitulatif des commandes clients ({orders.length})</h2>
      <div className="filter-container">
        <span>Filtrer par: </span>
        <select onChange={handleFilterChange}>
          <option value="">Toutes les commandes</option>
          <option value="timestamp">Date de commande</option>
          <option value="single-dish">Plat unique</option>
          <option value="multiple-dishes">Plats multiples</option>
          <option value="alphabetical">Utilisateurs par ordre alphabétique</option>
          <option value="total">Total</option>
        </select>
      </div>
      <div className="dashboard-orders">{orders.length !== 0 ? renderDashboardOrders() : <p>Aucune commande.</p>}</div>
    </>
  );
};

export default DashboardOrders;
