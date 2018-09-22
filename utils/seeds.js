const db = require("../models/index");

db.Foods.create({
  name: "Apple",
  kcal: 59,
  serving_size: "4oz",
  isVeg: true,
  isFree: true
});

db.Foods.create({
  name: "Banana",
  kcal: 151,
  serving_size: "6oz",
  isVeg: true,
  isFree: true
});

db.Foods.create({
  name: "Grapes",
  kcal: 100,
  serving_size: "1 cup",
  isVeg: true,
  isFree: true
});

db.Foods.create({
  name: "Orange",
  kcal: 53,
  serving_size: "4 oz",
  isVeg: true,
  isFree: true
});

db.Foods.create({
  name: "Pear",
  kcal: 82,
  serving_size: "5 oz",
  isVeg: true,
  isFree: true
});

db.Foods.create({
  name: "Peach",
  kcal: 67,
  serving_size: "6 oz",
  isVeg: true,
  isFree: true
});

db.Foods.create({
  name: "Pineapple",
  kcal: 82,
  serving_size: "1 cup",
  isVeg: true,
  isFree: true
});

db.Foods.create({
  name: "Strawberries",
  kcal: 53,
  serving_size: "1 cup",
  isVeg: true,
  isFree: true
});

db.Foods.create({
  name: "Watermelon",
  kcal: 50,
  serving_size: "1 cup",
  isVeg: true,
  isFree: true
});

db.Foods.create({
  name: "Aspragus",
  kcal: 27,
  serving_size: "1 cup",
  isVeg: true,
  isFree: true
});

db.Foods.create({
  name: "Brocolli",
  kcal: 45,
  serving_size: "1 cup",
  isVeg: true,
  isFree: true
});

db.Foods.create({
  name: "Carrots",
  kcal: 50,
  serving_size: "1 cup",
  isVeg: true,
  isFree: true
});

db.Foods.create({
  name: "Cucumber",
  kcal: 17,
  serving_size: "4 oz",
  isVeg: true,
  isFree: true
});

db.Foods.create({
  name: "Eggplant",
  kcal: 35,
  serving_size: "1 cup",
  isVeg: true,
  isFree: true
});

db.Foods.create({
  name: "Lettuce",
  kcal: 5,
  serving_size: "1 cup",
  isVeg: true,
  isFree: true
});

db.Foods.create({
  name: "Tomato",
  kcal: 22,
  serving_size: "1 cup",
  isVeg: true,
  isFree: true
});

db.Foods.create({
  name: "Bread",
  kcal: 75,
  serving_size: "1 slice",
  isVeg: true,
  isFree: false
});

db.Foods.create({
  name: "Butter",
  kcal: 102,
  serving_size: "1 tablespoon",
  isVeg: false,
  isFree: true
});

db.Foods.create({
  name: "Ceasar Salad",
  kcal: 551,
  serving_size: "3 cups",
  isVeg: false,
  isFree: false
});

db.Foods.create({
  name: "Rice",
  kcal: 206,
  serving_size: "1 cup cooked",
  isVeg: true,
  isFree: false
});

db.Foods.create({
  name: "Beer",
  kcal: 154,
  serving_size: "1 can",
  isVeg: true,
  isFree: true
});

db.Foods.create({
  name: "Yogurt (low-fat)",
  kcal: 154,
  serving_size: "1 cup",
  isVeg: false,
  isFree: true
});

db.Foods.create({
  name: "Yogurt (no fat)",
  kcal: 110,
  serving_size: "1 cup",
  isVeg: false,
  isFree: true
});

db.Foods.create({
  name: "Beef, Regular, Cooked",
  kcal: 426,
  serving_size: "6 oz",
  isVeg: false,
  isFree: true
});

db.Foods.create({
  name: "Chicken, Cooked",
  kcal: 408,
  serving_size: "6 oz",
  isVeg: false,
  isFree: true
});

db.Foods.create({
  name: "Tofu",
  kcal: 172,
  serving_size: "8 oz",
  isVeg: true,
  isFree: true
});

db.Foods.create({
  name: "Shrimp",
  kcal: 112,
  serving_size: "8 oz",
  isVeg: false,
  isFree: true
});

db.Foods.create({
  name: "Pork",
  kcal: 548,
  serving_size: "8 oz",
  isVeg: false,
  isFree: true
});

db.Foods.create({
  name: "Potato",
  kcal: 130,
  serving_size: "6 oz",
  isVeg: false,
  isFree: false
});

db.Foods.create({
  name: "Small Cheeseburger",
  kcal: 285,
  serving_size: "1 Sandwich",
  isVeg: false,
  isFree: false
});

db.Foods.create({
    name: "Plant Protein Powder",
    kcal: 120,
    serving_size: "30g",
    isVeg: true,
    isFree: true
  });

db.Plans.create({name: "Diet Plan 1",isVeg: false,isFree: false,maxKcal: 2500});
db.Plans.create({name: "Diet Plan 2",isVeg: false,isFree: false,maxKcal: 2000});
db.Plans.create({name: "Diet Plan 3",isVeg: false,isFree: false,maxKcal: 1500});

db.Plans.create({name: "Diet Plan 4",isVeg: false,isFree: true,maxKcal: 2500});
db.Plans.create({name: "Diet Plan 5",isVeg: false,isFree: true,maxKcal: 2000});
db.Plans.create({name: "Diet Plan 6",isVeg: false,isFree: true,maxKcal: 1500});

db.Plans.create({name: "Diet Plan 7",isVeg: true,isFree: false,maxKcal: 2500});
db.Plans.create({name: "Diet Plan 8",isVeg: true,isFree: false,maxKcal: 2000});
db.Plans.create({name: "Diet Plan 9",isVeg: true,isFree: false,maxKcal: 1500});

db.Plans.create({name: "Diet Plan 10",isVeg: true,isFree: true,maxKcal: 2500});
db.Plans.create({name: "Diet Plan 11",isVeg: true,isFree: true,maxKcal: 2000});
db.Plans.create({name: "Diet Plan 12",isVeg: true,isFree: true,maxKcal: 1500});


db.Food_plans.create({PlanId: 1,FoodId: 25,qty: 2});
db.Food_plans.create({PlanId: 1,FoodId: 29,qty: 1});
db.Food_plans.create({PlanId: 1,FoodId: 20,qty: 2});
db.Food_plans.create({PlanId: 1,FoodId: 19,qty: 1});
db.Food_plans.create({PlanId: 1,FoodId: 3,qty: 1});
db.Food_plans.create({PlanId: 1,FoodId: 4,qty: 2});
db.Food_plans.create({PlanId: 1,FoodId: 17,qty: 2});
db.Food_plans.create({PlanId: 1,FoodId: 13,qty: 2});
db.Food_plans.create({PlanId: 1,FoodId: 9,qty: 1});

db.Food_plans.create({PlanId: 2,FoodId:25,qty:2});
db.Food_plans.create({PlanId: 2,FoodId:29,qty:1});
db.Food_plans.create({PlanId: 2,FoodId:20,qty:2});
db.Food_plans.create({PlanId: 2,FoodId:9,qty:1});
db.Food_plans.create({PlanId: 2,FoodId:2,qty:1});
db.Food_plans.create({PlanId: 2,FoodId:16,qty:1});
db.Food_plans.create({PlanId: 2,FoodId:15,qty:1});
db.Food_plans.create({PlanId: 2,FoodId:22,qty:1});
db.Food_plans.create({PlanId: 2,FoodId:3,qty:2});
db.Food_plans.create({PlanId: 2,FoodId:12,qty:1});

db.Food_plans.create({PlanId: 3,FoodId:25,qty:2});
db.Food_plans.create({PlanId: 3,FoodId:29,qty:1});
db.Food_plans.create({PlanId: 3,FoodId:20,qty:2});
db.Food_plans.create({PlanId: 3,FoodId:9,qty:1});
db.Food_plans.create({PlanId: 3,FoodId:2,qty:1});
db.Food_plans.create({PlanId: 3,FoodId:16,qty:1});
db.Food_plans.create({PlanId: 3,FoodId:15,qty:1});

db.Food_plans.create({PlanId: 4,FoodId:31,qty:2});
db.Food_plans.create({PlanId: 4,FoodId:3,qty:3});
db.Food_plans.create({PlanId: 4,FoodId:12,qty:2});
db.Food_plans.create({PlanId: 4,FoodId:4,qty:2});
db.Food_plans.create({PlanId: 4,FoodId:7,qty:2});
db.Food_plans.create({PlanId: 4,FoodId:26,qty:2});
db.Food_plans.create({PlanId: 4,FoodId:25,qty:1});
db.Food_plans.create({PlanId: 4,FoodId:9,qty:1});
db.Food_plans.create({PlanId: 4,FoodId:14,qty:2});
db.Food_plans.create({PlanId: 4,FoodId:24,qty:1});
db.Food_plans.create({PlanId: 4,FoodId:16,qty:1});
db.Food_plans.create({PlanId: 4,FoodId:13,qty:1});

db.Food_plans.create({PlanId: 5,FoodId:31,qty:2});
db.Food_plans.create({PlanId: 5,FoodId:3,qty:3});
db.Food_plans.create({PlanId: 5,FoodId:12,qty:2});
db.Food_plans.create({PlanId: 5,FoodId:4,qty:2});
db.Food_plans.create({PlanId: 5,FoodId:7,qty:2});
db.Food_plans.create({PlanId: 5,FoodId:26,qty:2});
db.Food_plans.create({PlanId: 5,FoodId:25,qty:1});
db.Food_plans.create({PlanId: 5,FoodId:9,qty:1});
db.Food_plans.create({PlanId: 5,FoodId:14,qty:1});

db.Food_plans.create({PlanId: 6,FoodId:31,qty:2});
db.Food_plans.create({PlanId: 6,FoodId:3,qty:3});
db.Food_plans.create({PlanId: 6,FoodId:9,qty:1});
db.Food_plans.create({PlanId: 6,FoodId:12,qty:1});
db.Food_plans.create({PlanId: 6,FoodId:4,qty:2});
db.Food_plans.create({PlanId: 6,FoodId:7,qty:1});
db.Food_plans.create({PlanId: 6,FoodId:25,qty:1});
db.Food_plans.create({PlanId: 6,FoodId:15,qty:3});

db.Food_plans.create({PlanId: 7,FoodId:26,qty:3});
db.Food_plans.create({PlanId: 7,FoodId:20,qty:3});
db.Food_plans.create({PlanId: 7,FoodId:4,qty:1});
db.Food_plans.create({PlanId: 7,FoodId:3,qty:2});
db.Food_plans.create({PlanId: 7,FoodId:31,qty:3});
db.Food_plans.create({PlanId: 7,FoodId:11,qty:1});
db.Food_plans.create({PlanId: 7,FoodId:29,qty:2});
db.Food_plans.create({PlanId: 7,FoodId:12,qty:2});
db.Food_plans.create({PlanId: 7,FoodId:7,qty:2});
db.Food_plans.create({PlanId: 7,FoodId:13,qty:2});

db.Food_plans.create({PlanId: 8,FoodId:26,qty:2});
db.Food_plans.create({PlanId: 8,FoodId:20,qty:2});
db.Food_plans.create({PlanId: 8,FoodId:4,qty:1});
db.Food_plans.create({PlanId: 8,FoodId:3,qty:2});
db.Food_plans.create({PlanId: 8,FoodId:31,qty:2});
db.Food_plans.create({PlanId: 8,FoodId:11,qty:1});
db.Food_plans.create({PlanId: 8,FoodId:29,qty:2});
db.Food_plans.create({PlanId: 8,FoodId:12,qty:2});
db.Food_plans.create({PlanId: 8,FoodId:7,qty:2});
db.Food_plans.create({PlanId: 8,FoodId:13,qty:1});

db.Food_plans.create({PlanId: 9,FoodId:26,qty:1});
db.Food_plans.create({PlanId: 9,FoodId:20,qty:1});
db.Food_plans.create({PlanId: 9,FoodId:4,qty:1});
db.Food_plans.create({PlanId: 9,FoodId:3,qty:2});
db.Food_plans.create({PlanId: 9,FoodId:31,qty:1});
db.Food_plans.create({PlanId: 9,FoodId:11,qty:2});
db.Food_plans.create({PlanId: 9,FoodId:29,qty:2});
db.Food_plans.create({PlanId: 9,FoodId:12,qty:1});
db.Food_plans.create({PlanId: 9,FoodId:7,qty:2});
db.Food_plans.create({PlanId: 9,FoodId:13,qty:2});

db.Food_plans.create({PlanId: 10,FoodId:26,qty:3});
db.Food_plans.create({PlanId: 10,FoodId:4,qty:3});
db.Food_plans.create({PlanId: 10,FoodId:3,qty:3});
db.Food_plans.create({PlanId: 10,FoodId:31,qty:3});
db.Food_plans.create({PlanId: 10,FoodId:11,qty:2});
db.Food_plans.create({PlanId: 10,FoodId:29,qty:3});
db.Food_plans.create({PlanId: 10,FoodId:12,qty:1});
db.Food_plans.create({PlanId: 10,FoodId:7,qty:2});
db.Food_plans.create({PlanId: 10,FoodId:13,qty:3});
db.Food_plans.create({PlanId: 10,FoodId:9,qty:1});
db.Food_plans.create({PlanId: 10,FoodId:6,qty:1});

db.Food_plans.create({PlanId: 11,FoodId:26,qty:2});
db.Food_plans.create({PlanId: 11,FoodId:4,qty:2});
db.Food_plans.create({PlanId: 11,FoodId:3,qty:2});
db.Food_plans.create({PlanId: 11,FoodId:31,qty:2});
db.Food_plans.create({PlanId: 11,FoodId:11,qty:2});
db.Food_plans.create({PlanId: 11,FoodId:29,qty:2});
db.Food_plans.create({PlanId: 11,FoodId:12,qty:1});
db.Food_plans.create({PlanId: 11,FoodId:7,qty:2});
db.Food_plans.create({PlanId: 11,FoodId:13,qty:3});
db.Food_plans.create({PlanId: 11,FoodId:9,qty:3});
db.Food_plans.create({PlanId: 11,FoodId:6,qty:2});

db.Food_plans.create({PlanId: 12,FoodId:26,qty:1});
db.Food_plans.create({PlanId: 12,FoodId:4,qty:2});
db.Food_plans.create({PlanId: 12,FoodId:3,qty:2});
db.Food_plans.create({PlanId: 12,FoodId:31,qty:1});
db.Food_plans.create({PlanId: 12,FoodId:11,qty:2});
db.Food_plans.create({PlanId: 12,FoodId:29,qty:1});
db.Food_plans.create({PlanId: 12,FoodId:12,qty:1});
db.Food_plans.create({PlanId: 12,FoodId:7,qty:2});
db.Food_plans.create({PlanId: 12,FoodId:13,qty:3});
db.Food_plans.create({PlanId: 12,FoodId:9,qty:3});
db.Food_plans.create({PlanId: 12,FoodId:6,qty:1});