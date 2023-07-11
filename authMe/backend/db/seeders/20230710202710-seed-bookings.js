'use strict';

const { Booking } = require('../models')

let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = 'Bookings';
    await Booking.bulkCreate(options,[
      {
        spotId: 1,
        userId: 1,
        startDate: "2021-11-19",
        endDate: "2021-11-20"
      },
      {
        spotId: 2,
        userId: 2,
        startDate: "2022-11-19",
        endDate: "2022-11-20"
      },
      {
        spotId: 3,
        userId: 2,
        startDate: "2023-11-19",
        endDate: "2023-11-20"
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Bookings';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      startDate: { [Op.in]: ['2021-11-19', '2022-11-19', '2023-11-19'] }
    }, {});
  }
};
