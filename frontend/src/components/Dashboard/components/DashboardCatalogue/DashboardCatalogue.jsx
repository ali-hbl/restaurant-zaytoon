import React, { useState } from 'react';
import './styles.scss';

const DashboardCatalogue = () => {
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

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nom du plat:</label>
          <input type="text" id="name" name="name" value={dishData.name} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea id="description" name="description" value={dishData.description} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="price">Prix:</label>
          <input type="number" id="price" name="price" value={dishData.price} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="image_url">URL de l'image:</label>
          <input
            type="text"
            id="image_url"
            name="image_url"
            value={dishData.image_url}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="category">Catégorie:</label>
          <select id="category" name="category" value={dishData.category} onChange={handleChange}>
            <option value="plat">Plat</option>
            <option value="entree">Entrée</option>
            <option value="dessert">Dessert</option>
          </select>
        </div>
        <button type="submit">Ajouter</button>
      </form>
    </>
  );
};

export default DashboardCatalogue;
