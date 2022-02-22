const {Router} = require('express');
const {check} = require('express-validator');
const { getEvents, createEvent, updateEvent, deleteEvent } = require('../controllers/events');
const validateFields = require('../middlewares/field-validator');
const { validateJWT } = require('../middlewares/token-validator');

const router = Router();

router.get('/', [
    validateJWT
], getEvents);
router.post('/', [
    validateFields,
    validateJWT
], createEvent);
router.put('/:id', [
    validateFields,
    validateJWT
], updateEvent);
router.delete('/:id', [
    validateJWT
], deleteEvent);

module.exports = router;