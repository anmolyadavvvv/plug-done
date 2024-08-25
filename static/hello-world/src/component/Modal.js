import React from 'react';

const Modal = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="modal">
        <div className="modal-content">
        <span className="close" onClick={onClose}>
            &times;
          </span> 
          <div className="modal-body">{content}</div>
        </div>
      </div>
    </>
  );
};

export default Modal;
