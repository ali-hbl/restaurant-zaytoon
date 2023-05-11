import React, { useState } from 'react';
import Loader from '../../../Loader/Loader';
import CatalogueTable from '../../../CatalogueTable/CatalogueTable';
import useFetch from '../../../../hooks/useFetch';
import './styles.scss';

const DashboardCatalogue = () => {
  const { data, isLoading } = useFetch('catalogue');
  const catalogueItems = data.results;

  const [dishData, setDishData] = useState({
    name: '',
    description: '',
    price: '',
    image_url: '',
    category: 'plat',
  });

  const handleChange = (e) => {
    setDishData({ ...dishData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Ajouter la logique pour enregistrer le plat dans le catalogue
    console.log(dishData);
  };

  const renderForm = () => {
    return (
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nom du plat:</label>
            <input type="text" id="name" name="name" value={dishData.name} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              value={dishData.description}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="price">Prix:</label>
            <input type="number" id="price" name="price" value={dishData.price} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="image_url">Image:</label>
            <input
              type="file"
              id="image_url"
              name="image_url"
              value={dishData.image_url}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="category">Catégorie:</label>
            <select id="category" name="category" value={dishData.category} onChange={handleChange} required>
              <option value="entree">Entrée</option>
              <option value="plat">Plat</option>
              <option value="dessert">Dessert</option>
            </select>
          </div>

          <button type="submit">Ajouter</button>
        </form>
      </div>
    );
  };

  const renderCatalogueTable = () => {
    return (
      <table className="catalogue-table">
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
        {catalogueItems.map((item) => (
          <CatalogueTable key={item.id} item={item} />
        ))}
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
    </div>
  );
};

export default DashboardCatalogue;
