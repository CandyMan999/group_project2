var db = require("../models");


// Routes
// =============================================================
module.exports = function (app) {

    app.get("/", function (req, res) {
        res.render("index");
    });

    // GET route for getting all of the todos
    app.get("/api/food_plans", function (req, res) {
        // db.Food_plans.findAll({}).then(function (result) {
        //     return res.json(result);
        // });
        console.log("get /api/food_plans called");

        var insertDietPlanIDHere = 1;

        console.log("testing insertDietPlanIDHere:  " + insertDietPlanIDHere);
        
        db.Plans.findAll({
            where: {
                id: insertDietPlanIDHere
            }
        }).then(function (results) {
            res.json(results);
        });
    });

    app.get("/api/non_specific_3500cal", function (req, res) {
        // db.Food_plans.findAll({}).then(function (result) {
        //     return res.json(result);
        // });
        console.log("get /api/non_specific_3500cal called");
        
        db.Foods.findAll({
        }).then(function (results) {
            console.log(results);

            res.json(results);
        });
    });

    app.get("/api/vegan_2000cal", function (req, res) {
        // db.Food_plans.findAll({}).then(function (result) {
        //     return res.json(result);
        // });
        console.log("get /api/non_specific_3500cal called");
        
        db.Foods.findAll({
            where: {
                isVeg: true
            }
        }).then(function (results) {
            console.log(results);

            res.json(results);
        });
    });

    // POST route for saving a new todo. We can create todo with the data in req.body
    app.post("/api/food_plans", function (req, res) {
        // Take the request...
        console.log(req.body);




        // Then send it to the ORM to "save" into the DB.
        db.Food_plans.create({



        }).then(function (data) {
            return res.json(data);
        })
    });

    // DELETE route for deleting todos. We can get the id of the todo to be deleted from
    // req.params.id
    app.delete("/api/food_plans/:id", function (req, res) {

    });

    // PUT route for updating todos. We can get the updated todo data from req.body
    app.put("/api/todos", function (req, res) {

    });
};
