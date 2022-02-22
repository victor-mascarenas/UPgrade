const {response} = require("express");
const { generateGeneric } = require("../helpers/responseGenerator");
const Event = require("../models/Event");

const getEvents = async (req, res = response) => {
    return generateGeneric(res, 200, 'getEvents');
};
const createEvent = async (req, res = response) => {
    let resp;
    const event = new Event(req.body);
    event.user = req.uid;
    try {
        await event.save();
        resp = res.status(201).json({
            ok: true,
            evento: event
        });
    } catch (error) {
        resp = generateGeneric(res, 500, 'Contacte al administrador');
    }
    return resp;
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