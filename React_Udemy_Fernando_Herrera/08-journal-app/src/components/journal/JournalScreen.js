import React from 'react'
import { useSelector } from 'react-redux'
import { NoteSection } from '../notes/NoteSection'
import { NothingSelected } from './NothingSelected'
import { Sidebar } from './Sidebar'

export const JournalScreen = () => {
    const {active} = useSelector(state => state.notes);

    return (
        <div className='journal__main-content animate__animated animate__fadeIn'>
            <Sidebar/>
            <main>
                {
                    (active) ?
                        <NoteSection/> :
                        <NothingSelected/>
                }
            </main>
        </div>
    )
}
