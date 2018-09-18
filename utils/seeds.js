const db = require('../models/index');

db.Foods.create({
    name: "Chicken Breast",
    kcal: 280,
    serving_size: "6oz",
    isVeg: false,
    isFree: true
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