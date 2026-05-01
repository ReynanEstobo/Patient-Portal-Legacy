const adapterService = require('../services/adapterService');

const fetchPatientProfile = async (req, res, next) => {
    try {
        const patientId = req.user.id;

        const profile = await adapterService.getPatientProfile(patientId);

        res.status(200).json({
            success: true,
            profile
        });
    } catch (error) {
        next(error);
    }
};

const fetchConsultationSummary = async (req, res, next) => {
    try {
        const appointmentId = req.params.id;

        const summary = await adapterService.getConsultationSummary(appointmentId);

        res.status(200).json({
            success: true,
            summary
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    fetchPatientProfile,
    fetchConsultationSummary
};