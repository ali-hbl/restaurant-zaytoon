import React, { useState, useEffect } from 'react';
import useFetch from '../../../../hooks/useFetch';
import { FiDelete } from 'react-icons/fi';
import { Tooltip } from 'react-tooltip';
import { toast } from 'react-toastify';
import './styles.scss';

const DashboardUsers = () => {
  const [users, setUsers] = useState([]);
  const { data: usersData } = useFetch('users/get-users');

  useEffect(() => {
    setUsers(usersData?.results ?? []);
  }, [usersData]);

  const handleDeleteUser = (id) => {
    setUsers((prevUser) => prevUser.filter((user) => user.id !== id));
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm('Êtes-vous sûr de vouloir supprimer cet utilisateur?');

    if (confirmDelete) {
      fetch(`${process.env.REACT_APP_BACKEND_URL}users/delete-user/${id}`, {
        method: 'DELETE',
      })
        .then((response) => {
          if (response.ok) {
            // show notification
            toast.error(`Utilisateur supprimé de la base de données.`, {
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

            handleDeleteUser(id);
          } else {
            alert("Erreur lors de la suppression de l'utilisateur, veuillez réessayer.");
          }
        })
        .catch((error) => {
          alert("Une erreur est survenue lors de la suppression de l'utilisateur.", error);
          console.error("Une erreur est survenue lors de la suppression de l'utilisateur.", error);
        });
    }
  };

  const renderUsers = () => {
    return users.map((user, i) => (
      <div key={i} className="dashboard-users-container">
        <p className="dashboard-users-container-id">Utilisateur #{user.id}</p>
        <p>
          <span>Pseudo: </span>
          {user.username}
        </p>
        <p>
          <span>Email: </span>
          {user.email}
        </p>
        <span>
          <Tooltip id="delete-user-tooltip" place="left" className="tooltip" />
          <FiDelete
            data-tooltip-id="delete-user-tooltip"
            data-tooltip-content="Supprimer cet utilisateur"
            onClick={() => handleDelete(user.id)}
          />
        </span>
      </div>
    ));
  };

  return (
    <>
      <h2>Liste des utilisateurs du site ({users.length})</h2>
      <div className="dashboard-users">{users.length !== 0 ? renderUsers() : <p>Aucun utilisateur.</p>}</div>
    </>
  );
};

export default DashboardUsers;
