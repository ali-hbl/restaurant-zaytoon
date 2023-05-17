import React, { useRef } from 'react';
import CatalogueForm from '../CatalogueForm/CatalogueForm';
import './styles.scss';

const CatalogueModal = ({ showModal, setShowModal }) => {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const renderForm = () => {
    return <CatalogueForm />;
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
