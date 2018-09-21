module.exports = function(sequelize, DataTypes) {
    var Plans = sequelize.define("Plans", {
      name: DataTypes.STRING,
      isVeg: DataTypes.BOOLEAN,
      isFree: DataTypes.BOOLEAN,
      maxKcal: DataTypes.INTEGER
    });
    return Plans;
};