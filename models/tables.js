// const createPlansTable = function(sequelize, DataTypes) {
//     var Plans = sequelize.define("Plans", {
//       name: DataTypes.STRING,
//       isVeg: DataTypes.BOOLEAN,
//       isFree: DataTypes.BOOLEAN
//     });
//     return Plans;
// };


// const createFoodsTable = function(sequelize, DataTypes) {
//   var Foods = sequelize.define("Foods", {
//     name: DataTypes.STRING,
//     serving_size: DataTypes.STRING,
//     kcal: DataTypes.INTEGER,
//     isVeg: DataTypes.BOOLEAN,
//     isFree: DataTypes.BOOLEAN
//   });
//   return Foods;
// };

// const createFoodPlansTable = function (sequelize, DataTypes) {
//     var Food_plans = sequelize.define("Food_plans", {
//       plan_id: DataTypes.INTEGER,
//       food_id: DataTypes.INTEGER
//     });
//     return Food_plans;
//   };

// module.exports = {
//     createFoodPlansTable,
//     createFoodsTable,
//     createPlansTable
// }

module.exports = () => true