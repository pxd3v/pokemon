'use strict';
module.exports = (sequelize, DataTypes) => {
  const PokemonInstructor = sequelize.define('PokemonInstructor', {
    pokemonId: DataTypes.INTEGER,
    instructorId: DataTypes.INTEGER
  }, {});
  PokemonInstructor.associate = function(models) {
    PokemonInstructor.belongsTo(models.Pokemon, {foreignKey: 'pokemonId'})
    PokemonInstructor.belongsTo(models.Instructor, {foreignKey: 'instructorId'})
  };
  
  return PokemonInstructor;
};