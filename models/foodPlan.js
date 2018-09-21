module.exports = function (sequelize, DataTypes) {
    var Food_plans = sequelize.define("Food_plans", {
        qty: DataTypes.INTEGER
    });

    Food_plans.associate = function (models) {
        models.Plans.belongsToMany(models.Foods, { through: "Food_plans" });
        models.Foods.belongsToMany(models.Plans, { through: "Food_plans" });
    };

    return Food_plans;
};