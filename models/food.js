module.exports = function(sequelize, DataTypes) {
    var Foods = sequelize.define("Foods", {
      name: DataTypes.STRING,
      serving_size: DataTypes.STRING,
      kcal: DataTypes.INTEGER,
      isVeg: DataTypes.BOOLEAN,
      isFree: DataTypes.BOOLEAN
    });

    return Foods;
  };