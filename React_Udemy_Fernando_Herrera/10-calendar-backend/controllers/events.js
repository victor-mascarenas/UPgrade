const {response} = require("express");
const { generateGeneric } = require("../helpers/responseGenerator");
const Event = require("../models/Event");

const getEvents = async (req, res = response) => {
    let resp;
    try {
        const events = await Event.find().populate('user', 'name');
        resp = res.status(200).json({
            ok: true,
            events
        });
    } catch(error) {
        resp = generateGeneric(res, 500, 'Contacte al administrador');
    }
    return resp;
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
    let resp;
    const eventId = req.params.id;
    const uid = req.uid;
    try {
        const event = await Event.findById(eventId);
        if (event) {
            if (event.user.toString() !== uid) {
                generateGeneric(res, 401, 'No cuentas con sficientes privilegios para modificar este evento');
            } else {
                const newEvent = {
                    ...req.body,
                    user: uid
                };
                const updatedEvent = await Event.findByIdAndUpdate(eventId, newEvent, {
                    new: true
                });
                resp = res.status(200).json({
                    ok: true,
                    evento: updatedEvent
                });
            }
        } else {
            generateGeneric(res, 404, 'El evento solicitado no existe');
        }
    } catch(error) {
        resp = generateGeneric(res, 500, 'Contacte al administrador');
    }
    return resp;
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