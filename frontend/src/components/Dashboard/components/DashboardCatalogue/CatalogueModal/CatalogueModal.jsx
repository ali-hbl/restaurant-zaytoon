import React, { useRef } from 'react';
import { toast } from 'react-toastify';
import './styles.scss';

const CatalogueModal = ({ showModal, setShowModal, productId, onItemUpdate, onFileChange }) => {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) setShowModal(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const name = formData.get('name');
    const description = formData.get('description');
    const price = formData.get('price');
    const imageFile = formData.get('image');
    const category = formData.get('category');

    try {
      const image = imageFile.name;

      // UPDATE dish in the database
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}catalogue/update-dish/${productId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId, name, description, price, image, category }),
      });

      if (response.ok) {
        const reqBody = await response.json();

        // clear form inputs, update item, show notification and close modal
        form.reset();

        toast.error(`Plat modifié avec succès.`, {
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

        onItemUpdate(productId, reqBody.updatedItem);
        setShowModal(false);
      }
    } catch (error) {
      alert('Une erreur est survenue. Veuillez réessayer svp.');
      console.error(error);
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      onFileChange(productId, file.name); // set new image on UI

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
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="modal-name">Nom du plat:</label>
            <input type="text" name="name" id="modal-name" />
          </div>

          <div className="form-group">
            <label htmlFor="modal-description">Description:</label>
            <textarea name="description" id="modal-description" />
          </div>

          <div className="form-group">
            <label htmlFor="modal-price">Prix:</label>
            <input type="number" name="price" id="modal-price" />
          </div>

          <div className="form-group">
            <label htmlFor="modal-image">Image:</label>
            <input type="file" name="image" id="modal-image" accept="image/*" onChange={handleFileUpload} />
          </div>

          <div className="form-group">
            <label htmlFor="modal-category">Catégorie:</label>
            <select name="category" id="modal-category">
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

  return (
    <>
      {showModal && (
        <div className="catalogue-modal">
          <div className="catalogue-modal-overlay" onClick={closeModal} ref={modalRef}></div>
          <div className="catalogue-modal-content">
            <div className="catalogue-modal-header">
              <h2>Modifier le plat</h2>
              <button onClick={() => setShowModal((prev) => !prev)}>&#x2715;</button>
            </div>

            {renderForm()}
          </div>
        </div>
      )}
    </>
  );
};

export default CatalogueModal;
