'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    let names=["brayan","root","admin","juan","esteban","carlos","natha07","xxAnarchyxx","n00bMaster69","faker"]
    
    for (let i = 0; i <10; i++) {  
      await queryInterface.bulkInsert('Usuarios', [{  
          usuario: names[i],  
          contra: 123,  
          createdAt: new Date(),  
          updatedAt: new Date()  
      }], {});  
   } 
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('usuarios', null, {});  
  }
};
