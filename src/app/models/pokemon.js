'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pokemon = sequelize.define('Pokemon', {
    name: DataTypes.STRING,
  }, {});
  Pokemon.associate = function(models) {
    Pokemon.belongsToMany(models.Instructor, {
      through: 'PokemonInstructor', foreignKey: 'pokemonId', as: 'instructors'
    })
  };
  return Pokemon;
};