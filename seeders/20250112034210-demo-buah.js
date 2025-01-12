'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Buahs',
      [
        {
          name: 'Apel',
          warna: 'Merah',
          price: 40000,
          stock: 1000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Jeruk',
          warna: 'Oranye',
          price: 30000,
          stock: 1500,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Mangga',
          warna: 'Kuning',
          price: 50000,
          stock: 800,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Pisang',
          warna: 'Kuning',
          price: 20000,
          stock: 1200,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Semangka',
          warna: 'Hijau',
          price: 60000,
          stock: 500,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Anggur',
          warna: 'Ungu',
          price: 80000,
          stock: 300,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Stroberi',
          warna: 'Merah',
          price: 90000,
          stock: 700,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Buahs', null, {});
  },
};
