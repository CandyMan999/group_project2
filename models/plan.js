module.exports = function(sequelize, DataTypes) {
    var Plans = sequelize.define("Plans", {
      name: DataTypes.STRING,
      isVeg: DataTypes.BOOLEAN,
      isFree: DataTypes.BOOLEAN,
      maxKcal: DataTypes.INTEGER
    });

    Plans.associate = function (models) {
      models.Plans.hasMany(models.Food_plans);
      
  };
    return Plans;
};