import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startSaveNote, startUploading } from '../../actions/notes';

export const NoteAppBar = () => {
    const dispatch = useDispatch();
    const {active: note} = useSelector(state => state.notes);

    const fileInputStyle = {
        display: 'none'
    };

    const handleSave = () => {
        dispatch(startSaveNote(note));
    };
    const handlePicture = () => {
        document.querySelector('#fileSelector').click();
    };
    const handleFileChanged = (e) => {
        const file = e.target.files[0];
        if (file) {
            dispatch(startUploading(file));
        }
    };

    return (
        <div className='notes__appbar'>
            <span>28 de Agosto de 2022</span>
            <input id='fileSelector' name='file' type='file' style={fileInputStyle} onChange={handleFileChanged}/>
            <div>
                <button className='btn' onClick={handlePicture}>Add picture</button>
                <button className='btn' onClick={handleSave}>Save</button>
            </div>
        </div>
    )
}
