import { Tooltip } from 'react-tooltip';
import { BsFillQuestionSquareFill } from 'react-icons/bs';
import { toast } from 'react-toastify';
import './styles.scss';

const CatalogueForm = () => {
  const tooltipContent = `Obtenez le Stripe ID en enregistrant d'abord votre produit sur Stripe.`;

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
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}catalogue/insert-dish`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ stripeID, name, description, price, category, image }),
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
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name" className="stripe-tooltip-container">
            Stripe ID&nbsp;&nbsp;
            <BsFillQuestionSquareFill data-tooltip-id="stripe-tooltip" data-tooltip-content={tooltipContent} />
          </label>
          <input type="text" name="stripe_id" required />
          <Tooltip id="stripe-tooltip" place="right" className="tooltip" />
        </div>

        <div className="form-group">
          <label htmlFor="name">Nom du plat</label>
          <input type="text" name="name" required />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea name="description" required />
        </div>

        <div className="form-group">
          <label htmlFor="price">Prix</label>
          <input type="number" name="price" required />
        </div>

        <div className="form-group">
          <label htmlFor="image">Image</label>
          <input type="file" name="image" accept="image/*" onChange={handleFileUpload} />
        </div>

        <div className="form-group">
          <label htmlFor="category">Catégorie</label>
          <select name="category" required>
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
