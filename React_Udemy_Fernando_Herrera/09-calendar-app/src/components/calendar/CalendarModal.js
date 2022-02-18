import React, { useState } from 'react';
import Modal from 'react-modal';
import './modal.css';
import DateTimePicker from 'react-datetime-picker';
import moment from 'moment';

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
const now = moment().minutes(0).seconds(0).add(1, 'hours');

export const CalendarModal = () => {
    const [startDate, setStartDate] = useState(now.toDate());
    const [endDate, setEndDate] = useState(now.clone().add(1, 'hours').toDate());
    const [formValues, setFormValues] = useState({
        title: 'evento',
        notes: '',
        start: startDate,
        end: endDate
    });

    const {notes, title} = formValues;

    const onAfterOpen = () => {
        
    };
    const onRequestClose = () => {
        
    };
    const handleStartDateChange = (e) => {
        setStartDate(e);
        setFormValues({
            ...formValues,
            start: e
        });
    };
    const handleEndDateChange = (e) => {
        setEndDate(e);
        setFormValues({
            ...formValues,
            start: e
        });
    };
    const handleInputChange = ({target}) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
    };

    return (
        <Modal isOpen={true} onAfterOpen={onAfterOpen} onRequestClose={onRequestClose} style={customStyles} className='modal' overlayClassName='modal-fondo' closeTimeoutMS={200}>
            <h1> Nuevo evento </h1>
            <hr />
            <form className="container" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Fecha y hora inicio</label>
                    <DateTimePicker onChange={handleStartDateChange} value={startDate} className='form-control'/>
                </div>
                <div className="form-group">
                    <label>Fecha y hora fin</label>
                    <DateTimePicker onChange={handleEndDateChange} value={endDate} className='form-control' minDate={startDate}/>
                </div>
                <hr />
                <div className="form-group">
                    <label>Titulo y notas</label>
                    <input type="text" className="form-control" placeholder="Título del evento" name="title" autoComplete="off" value={title} onChange={handleInputChange}/>
                    <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
                </div>
                <div className="form-group">
                    <textarea type="text" className="form-control" placeholder="Notas" rows="5" name="notes" value={notes} onChange={handleInputChange}></textarea>
                    <small id="emailHelp" className="form-text text-muted">Información adicional</small>
                </div>
                <button type="submit" className="btn btn-outline-primary btn-block">
                    <i className="far fa-save"></i>
                    <span> Guardar</span>
                </button>
            </form>
        </Modal>
    );
};
