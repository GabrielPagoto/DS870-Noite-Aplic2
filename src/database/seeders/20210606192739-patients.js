"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			"Patients",
			[
				{
					name: "Maria Lacerda",
					email: "marial@mail.com",
					phone: "6194775851",
				},
				{
					name: "Jade Gomes",
					email: "jgomes@mail.com",
					phone: "5199103553",
				},
				{
					name: "Bianca Muniz",
					email: "b_muniz@mail.com",
					phone: "849412683",
				},
        {
					name: "Pedro Freitas",
					email: "pedrinho@mail.com",
					phone: "859231118",
				},
        {
					name: "Alan Carvalho",
					email: "a_carvalho@mail.com",
					phone: "279142476",
				},
        {
					name: "Henrique Andrade ",
					email: "henri_andrade@mail.com",
					phone: "2192764665",
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("Patients", null, {});
	},
};