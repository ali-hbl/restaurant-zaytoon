import React, { useState, useEffect } from 'react';
import useFetch from '../../../../hooks/useFetch';
import { FiDelete } from 'react-icons/fi';
import { Tooltip } from 'react-tooltip';
import { toast } from 'react-toastify';
import './styles.scss';

const DashboardOrders = () => {
  const [orders, setOrders] = useState([]);
  const { data: ordersData } = useFetch('orders');

  const handleDeleteOrder = (timestamp) => {
    setOrders((prevOrders) => prevOrders.filter((order) => order.created_at !== timestamp));
  };

  useEffect(() => {
    setOrders(ordersData?.results ?? []);
  }, [ordersData?.results]);

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

  const renderDashboardOrders = () => {
    return orders.map((order, i) => (
      <div key={i} className="dashboard-orders-container">
        <p className="dashboard-orders-container-id">Commande de {order.order_details.firstname}</p>
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
        {order.order_details.dishes.length === 1 ? (
          <p>
            <span>Total: </span> {order.order_details.dishes[0].price.toFixed(2)}€
          </p>
        ) : (
          <p>
            <span>Total: </span>
            {order.order_details.dishes.reduce((total, dish) => total + dish.price * dish.quantity, 0).toFixed(2)}€
          </p>
        )}
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
      <div className="dashboard-orders">{orders.length !== 0 ? renderDashboardOrders() : <p>Aucune commande.</p>}</div>
    </>
  );
};

export default DashboardOrders;
