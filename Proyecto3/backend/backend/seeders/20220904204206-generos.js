'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    let generos=["comedia","drama","sci-fi","horror","misterio","musical","accion","romance","superheroe"]
    let urls=[
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Contour_comedy_mask.png/640px-Contour_comedy_mask.png",
      "https://upload.wikimedia.org/wikipedia/commons/1/10/Drama_Masks.svg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-YDQxdHyFmhhPAIHkkOib5VxHKe_t3BpnsnkA6chnlXBFno8dEQZtV2ahrhQYxSHBgFc&usqp=CAU",
      "http://cdn.onlinewebfonts.com/svg/img_505240.png",
      "https://svgsilh.com/svg/310080.svg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Music_1_-_The_Noun_Project.svg/640px-Music_1_-_The_Noun_Project.svg.png",
      "http://cdn.onlinewebfonts.com/svg/img_432002.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Ei-heart.svg/1200px-Ei-heart.svg.png",
      "https://cdn-icons-png.flaticon.com/512/1705/1705687.png",
    ]
    for (let i = 0; i <9; i++) {  
      await queryInterface.bulkInsert('Generos', [{  
          nombre: generos[i],  
          url: urls[i]  ,
          createdAt: new Date(),  
          updatedAt: new Date()  
      }], {});  
   } 
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('generos', null, {});  
  }
};
