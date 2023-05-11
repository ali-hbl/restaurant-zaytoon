import React from 'react';
import { FiEdit, FiDelete } from 'react-icons/fi';
import { Tooltip } from 'react-tooltip';
import './styles.scss';

const CatalogueTable = ({ item }) => {
  return (
    <tbody>
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
          <span data-tooltip-id="delete-tooltip" data-tooltip-content="Supprimer ce plat">
            <Tooltip id="delete-tooltip" />
            <FiDelete />
          </span>
        </td>
      </tr>
    </tbody>
  );
};

export default CatalogueTable;
