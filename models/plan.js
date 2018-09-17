module.exports = function(sequelize, DataTypes) {
    var Plans = sequelize.define("Plans", {
      name: DataTypes.STRING,
      isVeg: DataTypes.BOOLEAN,
      isFree: DataTypes.BOOLEAN
    });
    return Plans;
};