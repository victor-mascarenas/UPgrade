import Swal from "sweetalert2";
import { db } from "../firebase/firebase-config";
import { fileUpload } from "../helpers/fileUpload";
import { loadNotes } from "../helpers/loadNotes";
import { types } from "../reducers/types/types";

export const startNewNote = () => {
    return async (dispatch, getState) => {
        const uid = getState().auth.uid;
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        };
        const docRef = await db.collection(`${uid}/journal/notes`).add(newNote);
        dispatch(activeNote(docRef.id, newNote));
    };
};

export const activeNote = (id, note) => ({
    type: types.NOTES_ACTIVE,
    payload: {
        id,
        ...note
    }
});

export const startLoadingNotes = (uid) => {
    return async (dispatch) => {
        const notes = await loadNotes(uid);
        dispatch(setNotes(notes));
    };
};

export const setNotes = (notes) => ({
    type: types.NOTES_LOAD,
    payload: notes
});

export const startSaveNote = (note) => {
    return async (dispatch, getState) => {
        const uid = getState().auth.uid;
        if (!note.url) {
            delete note.url;
        }
        const noteToFirestore = {...note};
        delete noteToFirestore.id;
        await db.doc(`${uid}/journal/notes/${note.id}`).update(noteToFirestore);
        dispatch(refreshNote(note.id, noteToFirestore));
        Swal.fire({
            title: 'Saved',
            body: note.title,
            icon: 'success',
            timer: 1000,
            showConfirmButton: false
        });
    };
};

export const  refreshNote = (id, note) => ({
    type: types.NOTES_UPDATED,
    payload: {
        id,
        note: {
            id,
            ...note
        }
    }
});

export const startUploading = (file) => {
    return async (dispatch, getState) => {
        const activeNote = getState().notes.active;
        Swal.fire({
            title: 'Uploading...',
            text: 'Please wait',
            allowOutsideClick: false,
            willOpen: () => {
                Swal.showLoading();
            },
            showConfirmButton: false
        });
        const fileUrl = await fileUpload(file);
        activeNote.url = fileUrl;
        dispatch(startSaveNote(activeNote));
        Swal.close();
    };
};