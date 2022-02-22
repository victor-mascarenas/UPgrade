const {response} = require("express");
const { generateGeneric } = require("../helpers/responseGenerator");

const getEvents = async (req, res = response) => {
    


    return generateGeneric(res, 200, 'getEvents');
};
const createEvent = async (req, res = response) => {
    return generateGeneric(res, 200, 'createEvent');
};
const updateEvent = async (req, res = response) => {
    return generateGeneric(res, 200, 'updateEvent');
};
const deleteEvent = async (req, res = response) => {
    return generateGeneric(res, 200, 'deleteEvent');
};

module.exports = {
    getEvents,
    createEvent,
    updateEvent,
    deleteEvent
};