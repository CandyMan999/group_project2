var db = require("../models");


// Routes
// =============================================================
module.exports = function (app) {

    app.get("/", function (req, res) {
        res.render("index");
    })
    // GET route for getting all of the todos 


    // get food plans with no other condition other than based on calorie value from TEE
    app.get("/api/plans/:TEE", function (req, res) {

        var TEE = req.params.TEE;
        console.log("Testing req.params.TEE value:  " + TEE);

        // sequelize query to find Food plans with maxKCal less than or equal to the TEE provided from front end
        db.Plans.findAll({
            where: {
                maxKcal: { $lte: TEE }
            }
        }).then(function (result) {
            return res.json(result);
        });
    });

    app.get("/api/test", function (req, res) {

        db.Plans.findAll({

            include: [{all: true}]

        }).then(function (result) {
            return res.json(result);
        });
    });

    // get from Plans based on two parameters(TEE + foodoption, either "Vegan" or "GlutenFree" flag here sent by frontend)
    app.get("/api/plans/:TEE&:foodoption", function (req, res) {

        var TEE = req.params.TEE;
        console.log("Testing req.params.TEE value:  " + TEE);

        var foodOption = req.params.foodoption;
        console.log("Testing req.params.foodoption value:  " + foodOption);

        if (foodOption === "Vegan") {
            // sequelize query to find Food plans with maxKCal less than or equal to the TEE provided from front end
            db.Plans.findAll({
                where: {
                    totalKcal: { $lte: TEE },
                    isVeg: true
                }
            }).then(function (result) {
                return res.json(result);
            });

        } else if (foodOption === "GlutenFree") {
            // sequelize query to find Food plans with totalKCal less than or equal to the TEE provided from front end
            db.Plans.findAll({
                where: {
                    totalKcal: { $lte: TEE },
                    isFree: true
                }
            }).then(function (result) {
                return res.json(result);
            });
        }

    });


    // get Food Plans based on ID from Plans table
    app.get("/api/food_plans/:ID", function (req, res) {

        var ID = req.params.ID;
        console.log("Testing req.params.ID value:  " + ID);

        db.Food_plans.findAll({
            where: {
                plan_id: ID
            }
        }).then(function (result) {
            return res.json(result);
        });
    });


    // get Food Plans based on ID from Plans table
    // also should include related food data from Foods table
    app.get("/api/food_plans_w_fooddata/:ID", function (req, res) {
        console.log("\napi test route for grabbing food plans with food data triggered")
        var ID = req.params.ID;
        console.log("Testing req.params.ID value:  " + ID);

        db.Food_plans.findAll({
            where: {
                plan_id: ID
            },
            include: [db.Foods]
        }).then(function (result) {
            return res.json(result);
        });
    });



    // sequelize query route that displays all food plans
    app.get("/api/food_plans", function (req, res, TEE) {
        db.Food_plans.findAll({}).then(function (result) {
            return res.json(result);
        });
    });


    // // POST route for saving a new todo. We can create todo with the data in req.body
    // app.post("/api/food_plans", function (req, res) {
    //     // Take the request...
    //     console.log(req.body);


    //     // Then send it to the ORM to "save" into the DB.
    //     db.Food_plans.create({



    //     }).then(function (data) {
    //         return res.json(data);
    //     })
    // });

    // // DELETE route for deleting todos. We can get the id of the todo to be deleted from
    // // req.params.id
    // app.delete("/api/food_plans/:id", function (req, res) {

    // });

    // // PUT route for updating todos. We can get the updated todo data from req.body
    // app.put("/api/todos", function (req, res) {

    // });
};
