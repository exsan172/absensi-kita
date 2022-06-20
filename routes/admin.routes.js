const express = require('express');
const router = express.Router();
const adminControllers = require("../controllers/admin.controllers")

router.get('/', [
    adminControllers.login
]);

router.get('/register', [
    adminControllers.register
]);

router.get('/register-employe', [
    adminControllers.registerEmploye
]);

router.get('/forgot-password', [
    adminControllers.forgotPass
]);

router.get('/dashboard', [
    adminControllers.dashboard
]);

module.exports = router;
