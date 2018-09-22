var db = require("../models");


// Routes
// =============================================================
module.exports = function (app) {

    app.get("/", function (req, res) {
        res.render("index");
    })
    // GET route for getting all of the todos 


    app.get('/api/Plans', function(req, res) {
    
        console.log("this is my api BMI : ", req.query.BMI)
        const BMI = req.query.BMI
        const TEE = req.query.TEE
        const isVeg = req.query.isVeg
        const isFree = req.query.isFree

        let whereClause = {   
        }
        if(BMI > 24.9) {
            whereClause.maxKcal = {$lte: TEE};
        } else if (BMI >= 18.5 & BMI <= 24.9) {
            whereClause.maxKcal = {$gte: TEE};
        }
        else {
            whereClause.maxKcal = {$gte: TEE};
        }
        if (isVeg === "1" || isVeg === "0") {
            whereClause.isVeg = isVeg;
            console.log("isVeg");
        }
        if (isFree === "1" || isFree === "0") {
            whereClause.isFree = isFree;
            console.log("isFree");
        }
 
        console.log("my where clause " ,whereClause);
        console.log(TEE);
       
         console.log("these are my variables im passing: ", TEE, isVeg, isFree);
        db.Plans.findAll({
            where: whereClause
        }).then(function (result) {
            return res.json(result);
            
        });
    })

    app.get('/api/food_plans', function(req, res) {
        console.log(req.query.id)
        db.Food_plans.findAll({
            where: {
                PlanId: req.query.id
            }
        }).then(function (result) {
            return res.json(result);
            
        });
    });

    // get Food Plans based on ID from Plans table
    // will also grab all related food data and puts it into a Food array when sent back to front-end
    app.get("/api/food_plans/:ID", function (req, res) {
        console.log("test route hit successfully");

        var PlanID = req.params.ID;

        console.log("query using PlanID = " + PlanID);

        db.Plans.findAll({
            where: { id: PlanID },

            include: [{ all: true }]

        }).then(function (result) {
            return res.json(result);
        });
    });


    app.get('/api/Foods', function(req, res) {
        console.log("this is my food item ", req.query)
       
        db.Foods.findAll({
            where: {
                id: req.query.id
            }
        }).then(function (result) {
            return res.json(result);
            
        });
    })
    // app.get("/api/food_plans/:TEE", function (req, res) {

    //     var TEE = req.params.TEE;
    //     console.log(TEE)

    //     // sequelize query to find Food plans with totalKCal less than or equal to the TEE provided from front end
    //     db.Food_plans.findAll({
    //         where: {
    //             totalKcal:  { $lte: TEE }
    //         }
    //     }).then(function (result) {
    //         return res.json(result);
    //     });
    // });

    // // sequelize query route that displays all food plans
    // app.get("/api/food_plans", function (req, res, TEE) {
    //     db.Food_plans.findAll({}).then(function (result) {
    //         return res.json(result);
    //     });
    // });

    // // example sequelize query route specifically for non-specific diet with a limit of 3500 calories
    // // calculation is done in the javascript
    // // this routes just finds all the food with no limiting factor and sends that data over
    // app.get("/api/non_specific_3500cal", function (req, res) {
    //     // db.Food_plans.findAll({}).then(function (result) {
    //     //     return res.json(result);
    //     // });
    //     console.log("get /api/non_specific_3500cal called");

    //     db.Foods.findAll({
    //     }).then(function (results) {
    //         console.log(results);

    //         res.json(results);
    //     });
    // });


    // // example sequelize query route specifically for a vegan diet with a limit of 2000 calories
    // // calculation is done in the javascript
    // // this routes just finds all the food limited by the isVeg=true condition and sends that data over
    // app.get("/api/vegan_2000cal", function (req, res) {
    //     // db.Food_plans.findAll({}).then(function (result) {
    //     //     return res.json(result);
    //     // });
    //     console.log("get /api/vegann_2000cal called");

    //     db.Foods.findAll({
    //         where: {
    //             isVeg: true
    //         }
    //     }).then(function (results) {
    //         console.log(results);

    //         res.json(results);
    //     });
    // });



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
