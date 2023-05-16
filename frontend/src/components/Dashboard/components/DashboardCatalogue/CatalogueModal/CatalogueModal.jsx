import React, { useState, useContext } from 'react';
import { UserContext } from '../../../../../context/UserContext';
import CatalogueForm from '../CatalogueForm/CatalogueForm';
import './styles.scss';

const CatalogueModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const { toggleModal } = useContext(UserContext);

  const handleModal = () => setIsModalOpen(!isModalOpen);

  const renderForm = () => {
    return <CatalogueForm />;
  };

  return (
    <div className="modal">
      <div className="modal-overlay" onClick={() => handleModal()}></div>
      <div className="modal-content">
        <div className="modal-header">
          <h2>Modifier le plat</h2>
          <button onClick={() => toggleModal('close')}>&#x2715;</button>
        </div>

        {renderForm()}
        <button type="submit">Modifier</button>
      </div>
    </div>
  );
};

export default CatalogueModal;
