'use strict';

module.exports = (sequelize, DataTypes) => {
  const Instructor = sequelize.define('Instructor', {
    name: DataTypes.STRING,
  }, {});
  Instructor.associate = function(models) {
    Instructor.belongsToMany(models.Pokemon ,{
      through: 'PokemonInstructor', foreignKey: 'instructorId', as: 'pokemons'})
    };
  return Instructor;
}