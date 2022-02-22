const {Router} = require('express');
const {createUser, userLogin, revalidateToken} = require('../controllers/auth');
const {check} = require('express-validator');
const validateFields = require('../middlewares/field-validator');
const { validateJWT } = require('../middlewares/token-validator');

const router = Router();

/*
...post([route], [middlewares], [controller function]);
*/
router.post('/new', [
    check('name', 'El nombre es requerido').not().isEmpty(),
    check('email', 'El email no es valido').isEmail(),
    check('password', 'La contraseña debe contener al menos 6 caracteres').isLength({
        min: 6
    }),
    validateFields
], createUser);
router.post('/', [
    check('email', 'El email no es valido').isEmail(),
    check('password', 'La contraseña debe contener al menos 6 caracteres').isLength({
        min: 6
    }),
    validateFields
], userLogin);
router.get('/renew', [
    validateJWT
], revalidateToken);

module.exports = router;