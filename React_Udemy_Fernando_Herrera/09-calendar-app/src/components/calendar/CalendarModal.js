import React, { useState } from 'react';
import Modal from 'react-modal';
import './modal.css';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)'
    }
};
Modal.setAppElement('#root');

export const CalendarModal = () => {
    const [isOpen, setIsOpen] = useState(true);

    const onAfterOpen = () => {
        setIsOpen(true);
    };
    const onRequestClose = () => {
        setIsOpen(false);
    };

    return (
        <Modal isOpen={isOpen} onAfterOpen={onAfterOpen} onRequestClose={onRequestClose} style={customStyles} className='modal' overlayClassName='modal-fondo' closeTimeoutMS={200}>
            <h1>Hola Mundo</h1>
            <hr/>
            <span>Hola de nuevo...</span>
        </Modal>
    );
};
