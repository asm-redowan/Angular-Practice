const {body,header,validationResult} = require('express-validator')
const base64Regex = /^[A-Za-z0-9+/=]+$/;

const addCompanyValidator = [
    body('name').isString().notEmpty().withMessage('Name is required and must be a string'),
    body('email').isString().isEmail().notEmpty().withMessage('Valid email is required'),
    body('package').isString().notEmpty().withMessage('Package is required'),
    body('description').optional().isString().withMessage('Description must be a string'),
    
    (req, res, next) => {
        // console.log(req.body)
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                message: "Please Provide",
                errors: errors.array()
            });
        }
        next(); 
    }
];


const addUserValidator = [
    body('name').isString().notEmpty(),
    body('email').isString().isEmail().notEmpty(),
    body('password').isString().notEmpty(),
    body('company_id').isInt().notEmpty(),
    body('group_id').isInt().notEmpty(),
    
    (req, res, next) => {
        // console.log(req.body)
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                message: "Please Provide",
                errors: errors.array()
            });
        }
        next(); 
    }
];


const updateUserValidator = [
    body('id').isInt().notEmpty(),
    body('company_id').isInt().notEmpty(),
    body('group_id').isInt().notEmpty(),
    
    (req, res, next) => {
        // console.log(req.body)
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                message: "Please Provide",
                errors: errors.array()
            });
        }
        next(); 
    }
];




const addGroupValidator = [
    body('group_name').isString().notEmpty().withMessage('Name is required and must be a string'),
    body('description').optional().isString().withMessage('Description must be a string'),
    (req, res, next) => {
        // console.log(req.body)
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                message: "Please Provide",
                errors: errors.array()
            });
        }
        next(); 
    }
];





module.exports ={ addCompanyValidator, addUserValidator, updateUserValidator, addGroupValidator}