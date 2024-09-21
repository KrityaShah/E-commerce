const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth-controller');
const signupSchema = require('../validator/auth-validator');
const validate = require('../middleware/validate-middleware');
// for home:


router.route("/").get(authController.home)
router.route("/register").post(validate(signupSchema), authController.register)
router.route("/login").post(authController.login)



module.exports = router;