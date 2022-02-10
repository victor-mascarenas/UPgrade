import React from 'react'
import { NoteAppBar } from './NoteAppBar'

export const NoteSection = () => {
    return (
        <div className='notes__main-content'>
            <NoteAppBar/>
            <div className='notes__content'>
                <input type='text' placeholder='Some awesome title' className='notes__title-input'/>
                <textarea placeholder='What happened today?' className='notes__text-area'></textarea>
                <div className='notes__images'>
                    <img src='https://bombaykitchencabinets.com/wp-content/uploads/2021/11/Modular-Kitchen-in-Etobicoke.png' alt='Cocina'/>
                </div>
            </div>
        </div>
    )
}
