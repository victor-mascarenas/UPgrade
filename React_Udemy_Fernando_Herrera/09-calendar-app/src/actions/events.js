import { types } from "../types/types"

export const eventAddNew = (event) => ({
    type: types.EVENT_ADD_NEW,
    payload: event
});

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