'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  
      return queryInterface.bulkInsert('users', [{
        email: 'tmrijalul@gmail.com',
        password: '123456789',
        name: 'TM Rijalul Humaidillah',
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
  
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('users', null, {});
  
  }
};
