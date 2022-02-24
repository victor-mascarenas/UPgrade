import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import './modal.css';
import DateTimePicker from 'react-datetime-picker';
import moment from 'moment';
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';
import { uiCloseModal } from '../../actions/ui';
import { eventAddNew, eventClearActive, eventUpdated } from '../../actions/events';

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
const nowPlusOne = now.clone().add(1, 'hours');
const initEvent = {
    title: '',
    notes: '',
    start: now.toDate(),
    end: nowPlusOne.toDate()
};

export const CalendarModal = () => {
    const [formValues, setFormValues] = useState(initEvent);
    const [titleValid, setTitleValid] = useState(true);
    const dispatch = useDispatch();
    const {modalOpen} = useSelector(state => state.ui);
    const {active, selectedSlot} = useSelector(state => state.calendar);
    useEffect(() => {
        if (active) {
            setFormValues(active);
        } else if (selectedSlot) {
            setFormValues({
                ...initEvent,
                start: selectedSlot.start,
                end: selectedSlot.end
            });
        } else {
            setFormValues(initEvent);
        }
    }, [active, selectedSlot]);

    const {notes, title, start, end} = formValues;

    const onAfterOpen = () => {
        
    };
    const onRequestClose = () => {
        dispatch(uiCloseModal());
        dispatch(eventClearActive());
        setFormValues(initEvent);
    };
    const handleStartDateChange = (e) => {
        setFormValues({
            ...formValues,
            start: e
        });
    };
    const handleEndDateChange = (e) => {
        setFormValues({
            ...formValues,
            end: e
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
        if (validateForm()) {
            if (active) {
                dispatch(eventUpdated(formValues));
            } else {
                dispatchAddNew();
            }
            setTitleValid(true);
            onRequestClose();
        }
    };

    const validateForm = () => {
        let valid = false;
        const momentStart = moment(start);
        const momentEnd = moment(end);
        if (momentStart.isSameOrAfter(momentEnd)) {
            Swal.fire('Error', 'Fecha de fin debe ser mayor a la de inicio', 'error');
        } else if (title.trim().length < 2) {
            setTitleValid(false);
        } else {
            valid = true;
        }
        return valid;
    };
    const dispatchAddNew = () => {
        dispatch(eventAddNew({
            ...formValues,
            id: new Date().getTime(),
            user: {
                _id: '123',
                name: 'Victor'
            }
        }));
    };

    return (
        <Modal isOpen={modalOpen} onAfterOpen={onAfterOpen} onRequestClose={onRequestClose} style={customStyles} className='modal' overlayClassName='modal-fondo' closeTimeoutMS={200}>
            <h1>{active ? 'Modificar evento' : 'Nuevo evento'}</h1>
            <hr />
            <form className="container" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Fecha y hora inicio</label>
                    <DateTimePicker onChange={handleStartDateChange} value={start} className='form-control' name='start'/>
                </div>
                <div className="form-group">
                    <label>Fecha y hora fin</label>
                    <DateTimePicker onChange={handleEndDateChange} value={end} className='form-control' minDate={start} name='end'/>
                </div>
                <hr />
                <div className="form-group">
                    <label>Titulo y notas</label>
                    <input type="text" className={`form-control ${!titleValid && 'is-invalid'}`} placeholder="Título del evento" name="title" autoComplete="off" value={title} onChange={handleInputChange}/>
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
