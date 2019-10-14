'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
 
      return queryInterface.bulkInsert('posts', [{
        title: 'Test Title 1',
        is_done: false,
        created_by: 1,
        createdAt: new Date(),
        updatedAt: new Date(),

      }], {});
    
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('posts', null, {});
    
  }
};
