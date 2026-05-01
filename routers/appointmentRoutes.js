const express = require('express');
const router = express.Router();

const verifyToken = require('../middleware/authMiddleware');
const appointmentController = require('../controllers/appointmentController');

router.get(
    '/upcoming',
    verifyToken,
    appointmentController.fetchUpcomingAppointments
);

router.get(
    '/history',
    verifyToken,
    appointmentController.fetchAppointmentHistory
);

router.post(
    '/schedule',
    verifyToken,
    appointmentController.scheduleAppointment
);

module.exports = router;