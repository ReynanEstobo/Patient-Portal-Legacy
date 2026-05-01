const axios = require('axios');

const getUpcomingAppointments = async (patientId) => {
    try {
        const response = await axios.get(
            `${process.env.ONLINE_APPOINTMENT_URL}/appointments/upcoming/${patientId}`
        );

        return response.data;
    } catch (error) {
        throw new Error('Online Appointment System unavailable');
    }
};

const getAppointmentHistory = async (patientId) => {
    try {
        const response = await axios.get(
            `${process.env.ONLINE_APPOINTMENT_URL}/appointments/history/${patientId}`
        );

        return response.data;
    } catch (error) {
        throw new Error('Unable to fetch appointment history');
    }
};

const createAppointment = async (appointmentData) => {
    try {
        const response = await axios.post(
            `${process.env.ONLINE_APPOINTMENT_URL}/appointments/create`,
            appointmentData
        );

        return response.data;
    } catch (error) {
        throw new Error('Unable to create appointment');
    }
};

module.exports = {
    getUpcomingAppointments,
    getAppointmentHistory,
    createAppointment
};