import React, { useState, useEffect } from 'react';
import useFetch from '../../../../hooks/useFetch';
import { FiDelete } from 'react-icons/fi';
import { Tooltip } from 'react-tooltip';
import { toast } from 'react-toastify';
import './styles.scss';

const DashboardReservations = () => {
  const [reservations, setReservations] = useState([]);
  const { data: reservationsData } = useFetch('reservations');

  useEffect(() => {
    setReservations(reservationsData?.results ?? []);
  }, [reservationsData?.results]);

  const handleDeleteReservation = (id) => {
    setReservations((prevReservation) => prevReservation.filter((res) => res.id !== id));
  };

  const handleUpdateReservation = (id, updatedStatus) => {
    setReservations((prevReservations) => {
      const updatedReservations = prevReservations.map((reservation) => {
        return reservation.id === id ? { ...reservation, status: updatedStatus } : reservation;
      });

      return updatedReservations;
    });
  };

  const handleUpdateStatus = (id) => {
    const reservation = reservations.find((res) => res.id === id);
    const updatedStatus = reservation.status === 'confirmed' ? 'cancelled' : 'confirmed';

    fetch(`${process.env.REACT_APP_BACKEND_URL}reservations/update-reservation/${id}`, {
      method: 'POST',
      body: JSON.stringify({ updatedStatus }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) alert('Une erreur est survenue lors de la mise à jour du statut.');
        handleUpdateReservation(id, updatedStatus);

        // show notification
        toast.error(`Mise à jour du statut effectuée.`, {
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
      })
      .catch((error) => {
        alert('Une erreur est survenue lors de la mise à jour du statut.');
        console.error('Une erreur est survenue lors de la mise à jour du statut.', error);
      });
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm('Êtes-vous sûr de vouloir supprimer ce message?');

    if (confirmDelete) {
      fetch(`${process.env.REACT_APP_BACKEND_URL}reservations/delete-reservation/${id}`, {
        method: 'DELETE',
      })
        .then((response) => {
          if (response.ok) {
            // show notification
            toast.error(`Réservation supprimée de la base de données.`, {
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

            handleDeleteReservation(id);
          } else {
            alert('Erreur lors de la suppression de la réservation, veuillez réessayer.');
          }
        })
        .catch((error) => {
          alert('Une erreur est survenue lors de la suppression de la réservation.', error);
          console.error('Une erreur est survenue lors de la suppression de la réservation.', error);
        });
    }
  };

  const renderDashboardReservations = () => {
    return reservations.map((reservation, i) => (
      <div key={i} className="dashboard-reservations-container">
        <p className="dashboard-reservations-container-id">Réservation #{reservation.id}</p>
        <p>
          <span>Utilisateur:&nbsp;</span> {reservation.name}
        </p>
        <p>
          <span>Email:&nbsp;</span> {reservation.email}
        </p>
        <p>
          <span>Téléphone:&nbsp;</span> {reservation.phone}
        </p>
        <p>
          <span>Date:&nbsp;</span>
          {`Le ${new Date(reservation.time).toLocaleDateString()} à ${new Date(reservation.time).toLocaleTimeString()}`}
        </p>
        <p>
          <span>Nombre d'invités:&nbsp;</span> {reservation.num_guests}
        </p>
        <div className="status-container">
          <div>
            <span>Statut:&nbsp;</span>
            {reservation.status === 'confirmed' ? (
              <p className="appt-booked">Confirmée</p>
            ) : (
              <p className="appt-canceled">Annulée</p>
            )}
          </div>
          <div>
            {reservation.status === 'confirmed' ? (
              <button className="btn-cancel-booking" onClick={() => handleUpdateStatus(reservation.id)}>
                Annuler la réservation
              </button>
            ) : (
              <button className="btn-confirm-booking" onClick={() => handleUpdateStatus(reservation.id)}>
                Confirmer la réservation
              </button>
            )}
          </div>
        </div>
        <span>
          <Tooltip id="delete-msg-tooltip" place="left" className="tooltip" />
          <FiDelete
            className="btn-delete"
            data-tooltip-id="delete-msg-tooltip"
            data-tooltip-content="Supprimer cette réservation"
            onClick={() => handleDelete(reservation.id)}
          />
        </span>
      </div>
    ));
  };

  return (
    <>
      <h2>Récapitulatif des réservations clients ({reservations.length})</h2>
      <div className="dashboard-reservations">
        {reservations.length !== 0 ? renderDashboardReservations() : <p>Aucune réservation.</p>}
      </div>
    </>
  );
};

export default DashboardReservations;
