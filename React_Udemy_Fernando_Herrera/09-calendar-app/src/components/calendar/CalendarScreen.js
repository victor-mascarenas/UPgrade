import React, { useState } from 'react';
import { Navbar } from '../ui/Navbar';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/es';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { messages } from '../../helpers/calendar-messages-esp';
import { CalendarEvent } from './CalendarEvent';
import { CalendarModal } from './CalendarModal';
import { useDispatch } from 'react-redux';
import { uiOpenModal } from '../../actions/ui';
import { eventSetActive } from '../../actions/events';
import { AddNewFab } from '../ui/AddNewFab';

moment.locale('es');

const localizer = momentLocalizer(moment);
const events = [{
    title: 'Cumpleaños del jefe',
    start: moment().toDate(),
    end: moment().add(2, 'hours').toDate(),
    bgcolor: '#fafafa',
    notes: 'Comprar el pastel',
    user: {
        _id: '123',
        name: 'Victor'
    }
}];

export const CalendarScreen = () => {
    const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month');
    const dispatch = useDispatch();

    const eventStyleGetter = (event, start, end, isSelected) => {
        const style = {
            backgroundColor: '#367cf7',
            boderRadius: '0px',
            opacity: 0.8,
            display: 'block',
            color: 'white'
        };
        return {
            style
        };
    };

    const onDoubleClick = (e) => {
        dispatch(uiOpenModal());
    };
    const onSelect = (e) => {
        dispatch(eventSetActive(e));
        dispatch(uiOpenModal());
    };
    const onViewChanged = (e) => {
        setLastView(e);
        localStorage.setItem('lastView', e);
    };

    return (
        <div className='calendar-screen'>
            <Navbar/>
            <Calendar localizer={localizer} events={events} messages={messages} eventPropGetter={eventStyleGetter} onDoubleClickEvent={onDoubleClick} onSelectEvent={onSelect} onView={onViewChanged} view={lastView} components={{
                event: CalendarEvent
            }}/>
            <AddNewFab/>
            <CalendarModal/>
        </div>
    )
};
