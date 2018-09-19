const db = require('../models/index');

db.Foods.create({
    name: "Chicken Breast",
    kcal: 280,
    serving_size: "6oz",
    isVeg: false,
    isFree: true
});

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
    name: "Rice",
    kcal: 206,
    serving_size: "1 cup cooked",
    isVeg: true,
    isFree: false
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

db.Plans.create({
    name: "Diet Plan 1",
    isVeg: false,
    isFree: true
});

db.Plans.create({
    name: "Diet Plan 2",
    isVeg: false,
    isFree: false
});

db.Plans.create({
    name: "Diet Plan 3",
    isVeg: true,
    isFree: true
});

db.Food_plans.create({
    plan_id: 1,
    food_id: 1
});

db.Food_plans.create({
    plan_id: 1,
    food_id: 2
});