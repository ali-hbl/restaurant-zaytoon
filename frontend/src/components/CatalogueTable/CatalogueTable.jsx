import React from 'react';
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
        <td>{item.category}</td>
        <td>
          <button className="btn">Modifier</button>
          <button className="btn btn-danger">Supprimer</button>
        </td>
      </tr>
    </tbody>
  );
};

export default CatalogueTable;
