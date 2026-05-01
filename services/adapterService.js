const axios = require('axios');

const getPatientProfile = async (patientId) => {
    try {
        const response = await axios.get(
            `${process.env.ADAPTER_LAYER_URL}/patient/${patientId}`
        );

        return response.data;
    } catch (error) {
        throw new Error('Adapter Layer unavailable');
    }
};

const getConsultationSummary = async (appointmentId) => {
    try {
        const response = await axios.get(
            `${process.env.ADAPTER_LAYER_URL}/consultation/${appointmentId}`
        );

        return response.data;
    } catch (error) {
        throw new Error('Unable to fetch consultation summary');
    }
};

module.exports = {
    getPatientProfile,
    getConsultationSummary
};