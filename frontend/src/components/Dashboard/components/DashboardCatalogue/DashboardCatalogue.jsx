import React, { useState, useEffect } from 'react';
import CatalogueModal from './CatalogueModal/CatalogueModal';
import CatalogueForm from './CatalogueForm/CatalogueForm';
import Loader from '../../../Loader/Loader';
import useFetch from '../../../../hooks/useFetch';
import { FiEdit, FiDelete } from 'react-icons/fi';
import { Tooltip } from 'react-tooltip';
import { toast } from 'react-toastify';
import './styles.scss';

const DashboardCatalogue = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const { data: catalogueData, isLoading } = useFetch('catalogue');
  const [catalogueItems, setCatalogueItems] = useState([]);

  useEffect(() => {
    setCatalogueItems(catalogueData.results ?? []);
  }, [catalogueData]);

  // open a modal to edit the dish
  const openModal = (productId) => {
    setShowModal(true);
    setSelectedProductId(productId);
  };

  const handleCatalogueItemInsert = (newItem) => {
    setCatalogueItems((prevItems) => [...prevItems, newItem]);
  };

  const handleCatalogueItemDelete = (id) => {
    setCatalogueItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleCatalogueItemUpdate = (id, updatedItem) => {
    setCatalogueItems((prevItems) => {
      const updatedItems = prevItems.map((item) => {
        return item.id === id ? { ...item, ...updatedItem } : item; // update the item that matches the id, otherwise return item as is
      });

      return updatedItems;
    });
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm('Êtes-vous sûr de vouloir supprimer cet élément?');

    if (confirmDelete) {
      fetch(`${process.env.REACT_APP_BACKEND_URL}catalogue/delete-dish/${id}`, {
        method: 'DELETE',
      })
        .then((response) => {
          if (response.ok) {
            // show notification
            toast.error(`Plat supprimé de la base de données.`, {
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

            handleCatalogueItemDelete(id); // remove the deleted item from the state
          } else {
            alert('Erreur lors de la suppression du plat, veuillez réessayer.');
          }
        })
        .catch((error) => {
          alert('Une erreur est survenue lors de la suppression du plat', error);
          console.error('Une erreur est survenue lors de la suppression du plat', error);
        });
    }
  };

  const renderForm = () => {
    return <CatalogueForm onItemInsert={handleCatalogueItemInsert} />;
  };

  const renderCatalogueTable = () => {
    return (
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Description</th>
            <th>Prix</th>
            <th>Image</th>
            <th>Catégorie</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {catalogueItems.map((item) => (
            <tr key={item.id}>
              <td>{item.name === '' ? 'Pas de titre.' : item.name}</td>
              <td>{item.description === '' ? 'Pas de description.' : item.description}</td>
              <td>{item.price === null ? 'Pas de prix.' : `${item.price}€`}</td>
              <td>
                <img
                  src={
                    item.image_url
                      ? process.env.REACT_APP_BACKEND_URL + item.image_url
                      : process.env.REACT_APP_BACKEND_URL + 'default-image.jpeg'
                  }
                  alt={item.name}
                />
              </td>
              <td>{item.category.charAt(0).toUpperCase() + item.category.slice(1, -1)}</td>
              <td>
                <span onClick={() => openModal(item.id)}>
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
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div className="dashboard-catalogue">
      <h2>Ajouter un plat</h2>
      {renderForm()}

      <h2>Modifier un plat</h2>
      {isLoading && <Loader />}
      {!isLoading && renderCatalogueTable()}

      {!isLoading && showModal && (
        <CatalogueModal
          showModal={showModal}
          setShowModal={setShowModal}
          productId={selectedProductId}
          onItemUpdate={handleCatalogueItemUpdate}
        />
      )}
    </div>
  );
};

export default DashboardCatalogue;
