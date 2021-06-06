"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			"Physicians",
			[
				{
					name: "João Carvalho",
					email: "j_carvalho@mail.com",
					password: "abc123",
				},
				{
					name: "Carla Faria",
					email: "cfaria@mail.com",
					password: "abc123",
				},
				{
					name: "Mathes Motta",
					email: "m_motta@mail.com",
					password: "abc123",
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => { 
    //await queryInterface.destroy("Physicians", null, {});
		return queryInterface.bulkDelete("Physicians", null, {});
	},
};