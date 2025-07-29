import React, { useContext } from 'react';
import { UserContext } from '../../context/usercontext.jsx';
import { CartContext } from '../../context/CartContext';
import CartProduct from '../CartProduct/CartProduct';
import { toast } from 'react-toastify';
import './styles.scss';

const Sidebar = ({ isOpen, onClose }) => {
  const { currentUser, toggleModal } = useContext(UserContext);
  const cart = useContext(CartContext);
  const productsCount = cart.items.reduce((totalQuantity, product) => totalQuantity + product.quantity, 0);

  const handleCheckout = async () => {
    // only a connected user can proceed to checkout
    if (currentUser !== null) {
      const dataToSend = {
        uid: currentUser.uid,
        email: currentUser.email,
        productId: cart.items.product_id,
        name: cart.items.name,
        quantity: cart.items.quantity,
        price: cart.items.price,
        items: [...cart.items],
      };

      try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}orders/post-order`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(dataToSend),
        });

        const data = await response.json();
        if (data.url) window.location.assign(data.url); // redirect on success/error page
      } catch (error) {
        console.error(error);
      }
    } else {
      // display login modal and show notification
      toggleModal('logIn');
      toast.error(`Veuillez vous connecter pour procéder au paiement.`, {
        position: 'top-right',
        autoClose: 2500,
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
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="btn-close" onClick={onClose}>
        &#x2715;
      </button>

      <div className="sidebar-body">
        {productsCount > 0 ? (
          <>
            <h1>Panier ({productsCount})</h1>
            {cart.items.map((item, index) => {
              return <CartProduct key={index} id={item.id} quantity={item.quantity}></CartProduct>;
            })}

            <div className="sidebar-body-summary">
              <div className="sidebar-body-summary-price">
                <h1>Total :</h1>
                <h1>{cart.getTotalCost().toFixed(2)} €</h1>
              </div>

              <div className="sidebar-body-summary-button">
                <button className="btn-checkout" onClick={handleCheckout}>
                  Finalisation de la commande
                </button>
                <button className="btn-empty" onClick={() => cart.deleteAllFromCart()}>
                  Vider le panier
                </button>
              </div>
            </div>
          </>
        ) : (
          <h1>Votre panier est vide.</h1>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
