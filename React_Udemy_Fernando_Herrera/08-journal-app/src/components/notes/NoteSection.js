import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import useForm from '../../hooks/useForm';
import { NoteAppBar } from './NoteAppBar'

export const NoteSection = () => {
    const {active: note} = useSelector(state => state.notes);
    const {values: formValues, inputOnChance, reset} = useForm(note);
    useEffect(() => {
        reset();
    }, [note]);

    const {body, title} = formValues;

    return (
        <div className='notes__main-content'>
            <NoteAppBar/>
            <div className='notes__content'>
                <input type='text' placeholder='Some awesome title' className='notes__title-input' name='title' value={title} onChange={inputOnChance}/>
                <textarea placeholder='What happened today?' className='notes__text-area' name='body' value={body} onChange={inputOnChance}></textarea>
                {
                    (note.url) &&
                        <div className='notes__images'>
                            <img src='https://bombaykitchencabinets.com/wp-content/uploads/2021/11/Modular-Kitchen-in-Etobicoke.png' alt='Cocina'/>
                        </div>
                }
            </div>
        </div>
    )
}
