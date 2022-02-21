import React, { useState } from 'react';
import { Navbar } from '../ui/Navbar';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/es';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { messages } from '../../helpers/calendar-messages-esp';
import { CalendarEvent } from './CalendarEvent';
import { CalendarModal } from './CalendarModal';
import { useDispatch, useSelector } from 'react-redux';
import { uiOpenModal } from '../../actions/ui';
import { eventSetActive } from '../../actions/events';
import { AddNewFab } from '../ui/AddNewFab';

moment.locale('es');

const localizer = momentLocalizer(moment);

export const CalendarScreen = () => {
    const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month');
    const dispatch = useDispatch();
    const {events} = useSelector(state => state.calendar);

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
