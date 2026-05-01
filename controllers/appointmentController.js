const appointmentService = require('../services/appointmentService');

const fetchUpcomingAppointments = async (req, res, next) => {
    try {
        const patientId = req.user.id;

        const appointments = await appointmentService.getUpcomingAppointments(patientId);

        res.status(200).json({
            success: true,
            appointments
        });
    } catch (error) {
        next(error);
    }
};

const fetchAppointmentHistory = async (req, res, next) => {
    try {
        const patientId = req.user.id;

        const history = await appointmentService.getAppointmentHistory(patientId);

        res.status(200).json({
            success: true,
            history
        });
    } catch (error) {
        next(error);
    }
};

const scheduleAppointment = async (req, res, next) => {
    try {
        const result = await appointmentService.createAppointment(req.body);

        res.status(201).json({
            success: true,
            message: 'Appointment created successfully',
            result
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    fetchUpcomingAppointments,
    fetchAppointmentHistory,
    scheduleAppointment
};