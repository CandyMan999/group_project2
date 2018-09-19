module.exports = function (sequelize, DataTypes) {
    var Food_plans = sequelize.define("Food_plans", {
      plan_id: DataTypes.INTEGER,
      food_id: DataTypes.INTEGER
    });
    return Food_plans;
  };