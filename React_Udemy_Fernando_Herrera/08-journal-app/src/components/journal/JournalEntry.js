import moment from 'moment'
import React from 'react'
import { useDispatch } from 'react-redux';
import { activeNote } from '../../actions/notes';

export const JournalEntry = ({note}) => {
    const dispatch = useDispatch();
    const noteDate = moment(note.date);

    const handleClick = () => {
        dispatch(activeNote(note.id, note));
    };

    return (
        <div className='journal__entry' onClick={handleClick}>
            <div className='journal__entry-picture'></div>
            <div className='journal__entry-body'>
                <p className='journal__entry-title'>{note.title}</p>
                <p className='journal__entry-content'>{note.body}</p>
            </div>
            <div className='journal__entry-date-box'>
                <span>{noteDate.format('dddd')}</span>
                <h4>{noteDate.format('D')}</h4>
            </div>
        </div>
    )
}
