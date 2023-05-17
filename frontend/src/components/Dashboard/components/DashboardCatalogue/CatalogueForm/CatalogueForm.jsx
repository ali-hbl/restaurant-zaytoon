import React from 'react';
import { toast } from 'react-toastify';
import './styles.scss';

const CatalogueForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const name = formData.get('name');
    const description = formData.get('description');
    const price = formData.get('price');
    const imageUrl = formData.get('image_url');
    const category = formData.get('category');

    try {
      const fileName = imageUrl.name;

      // POST dish to database
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}catalogue/insert-dish`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, description, price, fileName, category }),
      });

      if (response.ok) {
        // clear input and show notification
        form.reset();

        toast.error(`Nouveau plat ajouté dans la base de données.`, {
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
      }
    } catch (error) {
      alert('Une erreur est survenue. Veuillez réessayer svp.');
      console.error(error);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="form-group">
          <label htmlFor="name">Nom du plat:</label>
          <input type="text" name="name" required />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea name="description" required />
        </div>

        <div className="form-group">
          <label htmlFor="price">Prix:</label>
          <input type="number" name="price" required />
        </div>

        <div className="form-group">
          <label htmlFor="image_url">Image:</label>
          <input type="file" name="image_url" />
        </div>

        <div className="form-group">
          <label htmlFor="category">Catégorie:</label>
          <select name="category" required>
            <option value="entrees">Entrée</option>
            <option value="plats">Plat</option>
            <option value="desserts">Dessert</option>
            <option value="boissons">Boisson</option>
          </select>
        </div>

        <button type="submit">Enregistrer</button>
      </form>
    </div>
  );
};

export default CatalogueForm;
