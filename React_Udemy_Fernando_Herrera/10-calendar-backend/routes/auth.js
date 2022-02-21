const {Router} = require('express');
const {createUser, userLogin, revalidateToken} = require('../controllers/auth');
const {check} = require('express-validator');

const router = Router();

/*
...post([route], [middlewares], [controller function]);
*/
router.post('/new', [
    check('name', 'El nombre es requerido').not().isEmpty(),
    check('email', 'El email no es valido').isEmail(),
    check('password', 'La contraseña debe contener al menos 6 caracteres').isLength({
        min: 6
    })
], createUser);
router.post('/', [
    check('email', 'El email no es valido').isEmail(),
    check('password', 'La contraseña debe contener al menos 6 caracteres').isLength({
        min: 6
    })
], userLogin);
router.get('/renew', revalidateToken);

module.exports = router;