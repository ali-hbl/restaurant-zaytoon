import React, { useState, useEffect } from 'react';
import useFetch from '../../../../hooks/useFetch';
import { FiDelete } from 'react-icons/fi';
import { Tooltip } from 'react-tooltip';
import { toast } from 'react-toastify';
import './styles.scss';

const DashboardMessages = () => {
  const [clientMessages, setClientMessages] = useState([]);
  const { data: messagesData } = useFetch('messages');

  useEffect(() => {
    setClientMessages(messagesData?.results ?? []);
  }, [messagesData]);

  const handleDeleteMessage = (id) => {
    setClientMessages((prevMessage) => prevMessage.filter((msg) => msg.id !== id));
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm('Êtes-vous sûr de vouloir supprimer ce message?');

    if (confirmDelete) {
      fetch(`${process.env.REACT_APP_BACKEND_URL}messages/delete-message/${id}`, {
        method: 'DELETE',
      })
        .then((response) => {
          if (response.ok) {
            // show notification
            toast.error(`Message supprimé de la base de données.`, {
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

            handleDeleteMessage(id);
          } else {
            alert('Erreur lors de la suppression du message, veuillez réessayer.');
          }
        })
        .catch((error) => {
          alert('Une erreur est survenue lors de la suppression du message', error);
          console.error('Une erreur est survenue lors de la suppression du message', error);
        });
    }
  };

  const renderMessages = () => {
    return clientMessages.map((message, i) => (
      <div key={i} className="dashboard-messages-container">
        <p>
          <span>Date: </span>
          {`Le ${new Date(message.created_at).toLocaleDateString()} à ${new Date(
            message.created_at
          ).toLocaleTimeString()}`}
        </p>
        <p>
          <span>Utilisateur: </span>
          {message.name}
        </p>
        <p>
          <span>Email: </span>
          {message.email}
        </p>
        <p>
          <span>Téléphone: </span>
          {message.phone}
        </p>
        <p>
          <span>Message: </span>
          {message.message}
        </p>
        <span>
          <Tooltip id="delete-msg-tooltip" place="left" className="tooltip" />
          <FiDelete
            data-tooltip-id="delete-msg-tooltip"
            data-tooltip-content="Supprimer ce message"
            onClick={() => handleDelete(message.id)}
          />
        </span>
      </div>
    ));
  };

  return (
    <>
      <h2>Récapitulatif des messages clients ({clientMessages.length})</h2>
      <div className="dashboard-messages">{clientMessages.length !== 0 ? renderMessages() : <p>Aucun message.</p>}</div>
    </>
  );
};

export default DashboardMessages;
