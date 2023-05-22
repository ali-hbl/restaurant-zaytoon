import React from 'react';
import { toast } from 'react-toastify';
import './styles.scss';

const CatalogueForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const stripeID = formData.get('stripe_id');
    const name = formData.get('name');
    const description = formData.get('description');
    const price = formData.get('price');
    const imageFile = formData.get('image');
    const category = formData.get('category');

    // formData.append('name', e.target.elements.name.value);
    // formData.append('description', e.target.elements.description.value);
    // formData.append('price', e.target.elements.price.value);
    // formData.append('image', e.target.elements.image.files[0]);
    // formData.append('category', e.target.elements.category.value);

    try {
      const image = imageFile.name;

      // POST dish to database
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}catalogue/insert-dish`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // headers: {
        //   'Content-Type': 'multipart/form-data, application/json',
        // },
        // body: formData,
        body: JSON.stringify({ stripeID, name, description, price, image, category }),
      });

      if (response.ok) {
        // clear form inputs and show notification
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
    <>
      {/* TEST */}
      {/* <form action={`${process.env.REACT_APP_BACKEND_URL}upload`} method="POST" encType="multipart/form-data">
        <input type="file" name="image" />
        <button type="submit">Upload</button>
      </form> */}
      {/* END TEST */}

      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Stripe ID:</label>
            <input type="text" name="stripe_id" required />
          </div>

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
            <label htmlFor="image">Image:</label>
            <input type="file" name="image" />
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
    </>
  );
};

export default CatalogueForm;
