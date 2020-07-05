'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('PokemonInstructors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      pokemonId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Pokemons',
          key: 'id'
        }
      },
      instructorId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Instructors',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('PokemonInstructors');
  }
};