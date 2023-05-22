import React, { useRef } from 'react';
import { toast } from 'react-toastify';
import './styles.scss';

const CatalogueModal = ({ showModal, setShowModal, productId }) => {
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
        // clear form inputs, show notification and close modal
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

        setShowModal(false);
      }
    } catch (error) {
      alert('Une erreur est survenue. Veuillez réessayer svp.');
      console.error(error);
    }
  };

  const renderForm = () => {
    return (
      <div className="form-container">
        <form onSubmit={handleSubmit}>
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
    );
  };

  return (
    <>
      {showModal && (
        <div className="modal">
          <div className="modal-overlay" onClick={closeModal} ref={modalRef}></div>
          <div className="modal-content">
            <div className="modal-header">
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
