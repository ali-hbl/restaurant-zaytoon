import React from 'react';
import { Tooltip } from 'react-tooltip';
import { BsFillQuestionSquareFill } from 'react-icons/bs';
import { toast } from 'react-toastify';
import './styles.scss';

const CatalogueForm = ({ onItemInsert }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const stripeID = formData.get('stripe_id');
    const name = formData.get('name');
    const description = formData.get('description');
    const price = formData.get('price');
    const category = formData.get('category');
    const file = formData.get('image');

    try {
      const image = file.name;

      // POST dish to database
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}catalogue/post-dish`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ stripeID, name, description, price, category, image }),
      });

      if (response.ok) {
        const reqBody = await response.json();

        // clear form inputs, set new item and show notification
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

        // update the catalogueItems state with the newly inserted data
        onItemInsert(reqBody.insertedItem);
      }
    } catch (error) {
      alert('Une erreur est survenue. Veuillez réessayer svp.');
      console.error(error);
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      // UPLOAD image to folder
      const formData = new FormData();
      formData.append('image', file);

      fetch(`${process.env.REACT_APP_BACKEND_URL}catalogue/upload`, {
        method: 'POST',
        body: formData,
      }).then((response) => {
        if (!response.ok) alert('Une erreur est survenue. Veuillez réessayer svp.');
      });
    }
  };

  const renderForm = () => {
    return (
      <form onSubmit={handleSubmit} >
        <div className="form-group">
          <label htmlFor="name" className="stripe-tooltip-container">
            Stripe ID&nbsp;&nbsp;
            <BsFillQuestionSquareFill
              data-tooltip-id="stripe-tooltip"
              data-tooltip-content="Obtenez le Stripe ID en enregistrant d'abord votre produit sur Stripe."
            />
          </label>
          <input type="text" name="stripe_id" id="name" required />
          <Tooltip id="stripe-tooltip" place="right" className="tooltip" />
        </div>

        <div className="form-group">
          <label htmlFor="name">Nom du plat</label>
          <input type="text" name="name" id="name" required />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea name="description" id="description" required />
        </div>

        <div className="form-group">
          <label htmlFor="price">Prix</label>
          <input type="number" name="price" id="price" required />
        </div>

        <div className="form-group">
          <label htmlFor="image">Image</label>
          <input type="file" name="image" id="image" accept="image/*" onChange={handleFileUpload} />
        </div>

        <div className="form-group">
          <label htmlFor="category">Catégorie</label>
          <select name="category" id="category" required>
            <option value="entrees">Entrée</option>
            <option value="plats">Plat</option>
            <option value="desserts">Dessert</option>
            <option value="boissons">Boisson</option>
          </select>
        </div>

        <button type="submit">Enregistrer</button>
      </form>
    );
  };

  return <div className="form-container">{renderForm()}</div>;
};

export default CatalogueForm;
