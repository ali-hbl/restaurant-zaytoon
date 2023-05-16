import React from 'react';
import { FiEdit, FiDelete } from 'react-icons/fi';
import { Tooltip } from 'react-tooltip';
import './styles.scss';

const CatalogueTable = ({ item }) => {
  const handleDelete = (id) => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}catalogue/delete-dish/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          // TODO show notification 
          console.log('Plat supprimé avec succès');
        } else {
          // TODO show alert
          console.error('Erreur lors de la suppression du plat');
        }
      })
      .catch((error) => {
        //TODO show alert and transalte log
        console.error('Une erreur est survenue lors de la suppression du plat', error);
      });
  };

  return (
    <tr key={item.id}>
      <td>{item.name}</td>
      <td>{item.description}</td>
      <td>{item.price} €</td>
      <td>
        <img src={process.env.REACT_APP_BACKEND_URL + item.image_url} alt={item.name} />
      </td>
      <td>{item.category.charAt(0).toUpperCase() + item.category.slice(1, -1)}</td>
      <td>
        <span
          data-tooltip-id="edit-tooltip"
          place="left"
          data-tooltip-content="Pour modifier un élément, double-cliquez dessus"
        >
          <Tooltip id="edit-tooltip" />
          <FiEdit />
        </span>
        <span
          data-tooltip-id="delete-tooltip"
          data-tooltip-content="Supprimer ce plat"
          onClick={() => handleDelete(item.id)}
        >
          <Tooltip id="delete-tooltip" />
          <FiDelete />
        </span>
      </td>
    </tr>
  );
};

export default CatalogueTable;
