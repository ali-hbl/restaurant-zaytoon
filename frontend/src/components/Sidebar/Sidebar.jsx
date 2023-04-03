import React from 'react';
import './styles.scss';

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button onClick={onClose}>&#x2715;</button>
      <p>Contenu de la sidebar : shopping cart recap et bouton pour passer la commande</p>
    </div>
  );
};

export default Sidebar;
