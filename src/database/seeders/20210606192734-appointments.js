"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			"Appointments",
			[
				{
					physicianId: 1,
          patientId: 1,
					appointmentDate: "2021-06-03",
					description: "Consulta Médica Junho",
				},
				{
					physicianId: 1,
          patientId: 6,
					appointmentDate: "2021-06-27",
					description: "Consulta Médica Junho",
				},
        {
					physicianId: 2,
          patientId: 2,
					appointmentDate: "2021-07-10",
					description: "Consulta Médica Julho",
				},
        {
					physicianId: 2,
          patientId: 5,
					appointmentDate: "2021-07-01",
					description: "Consulta Médica Julho",
				},
        {
					physicianId: 3,
          patientId: 3,
					appointmentDate: "2021-08-28",
					description: "Consulta Médica Agosto",
				},
        {
					physicianId: 3,
          patientId: 4,
					appointmentDate: "2021-08-15",
					description: "Consulta Médica Agosto",
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("Appointments", null, {});
	},
};