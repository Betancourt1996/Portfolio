'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    let names=["Excelente","Muy Buena","Buena","Mala","Muy Mala"]
    
    for (let i = 0; i <5; i++) {  
      await queryInterface.bulkInsert('Opinions', [{  
          nombre: names[i],  
          
          createdAt: new Date(),  
          updatedAt: new Date()  
      }], {});  
   } 
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('opinions', null, {});  
  }
};
