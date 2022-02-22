const {Router} = require('express');
const {check} = require('express-validator');
const { getEvents, createEvent, updateEvent, deleteEvent } = require('../controllers/events');
const { isDate } = require('../helpers/dateValidations');
const validateFields = require('../middlewares/field-validator');
const { validateJWT } = require('../middlewares/token-validator');

const router = Router();
router.use(validateJWT);

router.get('/', getEvents);
router.post('/', [
    check('title', 'El titulo es requerido').not().isEmpty(),
    check('start', 'Start date is required').custom(isDate),
    check('end', 'End date is required').custom(isDate),
    validateFields
], createEvent);
router.put('/:id', [
    validateFields
], updateEvent);
router.delete('/:id', deleteEvent);

module.exports = router;