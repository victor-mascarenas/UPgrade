import Swal from "sweetalert2";
import { fetchWithToken } from "../helpers/fetch";
import { prepareEvents } from "../helpers/prepareEvents";
import { types } from "../types/types"

const eventAddNew = (event) => ({
    type: types.EVENT_ADD_NEW,
    payload: event
});
const eventLoaded = (events) => ({
    type: types.EVENT_LOADED,
    payload: events
});

export const eventStartAddNew = (event) => {
    return async (dispatch, getState) => {
        const {uid, name} = getState().auth;
        try {
            const resp = await fetchWithToken('events', event, 'POST');
            const body = await resp.json();
            if (body.ok) {
                event.id = body.evento.id;
                event.user = {
                    _id: uid,
                    name
                };
                dispatch(eventAddNew(event));
            } else {
                Swal.fire('Error', body.msg, 'error');
            }
        } catch(error) {
            Swal.fire('Error', error.message, 'error');
        }
    };
};
export const eventStartLoading = () => {
    return async (dispatch) => {
        try {
            const res = await fetchWithToken('events');
            const body = await res.json();
            if (body.ok) {
                const events = prepareEvents(body.events);
                dispatch(eventLoaded(events));
            } else {
                Swal.fire('Error', body.msg, 'error');
            }
        } catch (error) {
            Swal.fire('Error', error.message, 'error');
        }
    };
};

export const eventSetActive = (event) => ({
    type: types.EVENT_SET_ACTIVE,
    payload: event
});
export const eventClearActive = () => ({
    type: types.EVENT_CLEAR_ACTIVE
});
export const eventUpdated = (event) => ({
    type: types.EVENT_UPDATED,
    payload: event
});
export const eventDeleted = () => ({
    type: types.EVENT_DELETED
});
export const eventSlotSelected = (start, end) => ({
    type: types.EVENT_SLOT_SELECTED,
    payload: {
        start,
        end
    }
});