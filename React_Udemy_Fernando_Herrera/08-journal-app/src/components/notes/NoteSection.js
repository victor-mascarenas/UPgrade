import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activeNote, startDeleting } from '../../actions/notes';
import useForm from '../../hooks/useForm';
import { NoteAppBar } from './NoteAppBar'

export const NoteSection = () => {
    const {active: note} = useSelector(state => state.notes);
    const {values: formValues, inputOnChange, reset} = useForm(note);
    const dispatch = useDispatch();

    useEffect(() => {
        reset();
    }, [note.id]);
    useEffect(() => {
        dispatch(activeNote(note.id, {...formValues}));
    }, [formValues]);

    const {body, title} = formValues;

    const handleDelete = () => {
        dispatch(startDeleting(note.id));
    };

    return (
        <div className='notes__main-content'>
            <NoteAppBar/>
            <div className='notes__content'>
                <input type='text' placeholder='Some awesome title' className='notes__title-input' name='title' value={title} onChange={inputOnChange}/>
                <textarea placeholder='What happened today?' className='notes__text-area' name='body' value={body} onChange={inputOnChange}></textarea>
                {
                    (note.url) &&
                        <div className='notes__images'>
                            <img src={note.url} alt='Cocina'/>
                        </div>
                }
            </div>
            <button className='btn btn-danger' onClick={handleDelete}>Delete</button>
        </div>
    )
}
