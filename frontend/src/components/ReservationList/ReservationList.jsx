import React from 'react';
import './styles.scss';

const ReservationList = ({ reservations }) => {
  return (
    <div className="reservation-list">
      {reservations.map((reservation, i) => (
        <div className="reservation-list-container" key={i}>
          <div className="reservation-list-details">
            <p>
              <span>Date et heure:</span> {new Date(reservation.time).toLocaleString()}
            </p>
            <p>
              <span>Réservé au nom de:</span> {reservation.name}
            </p>
            {/* <p>
              <span>Adresse email:</span> {reservation.email}
            </p> */}
            <p>
              <span>Téléphone:</span> {reservation.phone}
            </p>
            <p>
              <span>Nombre d'invités:</span> {reservation.num_guests}
            </p>
          </div>
          {/* <div className="reservation-list-status">{reservation.status}</div> */}
        </div>
      ))}
    </div>
  );
};

export default ReservationList;
