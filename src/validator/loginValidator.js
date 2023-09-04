const {check} = require('express-validator');

module.exports = [
    check('name')
        .notEmpty()
        .withMessage('El campo es requerido'),
    check('email')
        .notEmpty()
        .withMessage('El campo es requerido')
        .isEmail()
        .withMessage('Ingrese un mail valido'),
    check('age')
        .notEmpty()
        .isInt({gt:1})
        .withMessage('debe ser positivo'),
    check('categoryColor')
        .notEmpty()
        .withMessage('Es requerida')
]