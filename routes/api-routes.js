var db = require("../models");


// Routes
// =============================================================
module.exports = function (app) {
    //this renders the homePage 
    app.get("/", function (req, res) {
        res.render("index");
    })
    //This is the get route to return all the diet Plans based on Calories and whether or not gluten free and vegan is true
    app.get('/api/Plans', function (req, res) {

        console.log("this is my api BMI : ", req.query.BMI)
        const BMI = req.query.BMI
        const TEE = req.query.TEE
        const isVeg = req.query.isVeg
        const isFree = req.query.isFree

        let whereClause = {
        }
        if (BMI > 24.9) {
            whereClause.maxKcal = { $lte: TEE };
        } else if (BMI >= 18.5 & BMI <= 24.9) {
            whereClause.maxKcal = { $gte: TEE };
        }
        else {
            whereClause.maxKcal = { $gte: TEE };
        }
        if (isVeg === "1" || isVeg === "0") {
            whereClause.isVeg = isVeg;
            console.log("isVeg");
        }
        if (isFree === "1" || isFree === "0") {
            whereClause.isFree = isFree;
            console.log("isFree");
        }

        console.log("my where clause ", whereClause);
        console.log(TEE);

        console.log("these are my variables im passing: ", TEE, isVeg, isFree);
        db.Plans.findAll({
            where: whereClause
        }).then(function (result) {
            return res.json(result);

        });
    })


    app.get('/api/food_plans', function (req, res) {
        console.log("\nhitting get route /api/food_plans/?=" + req.query.id);

        var PlanID = req.query.id;
        console.log("query using PlanID(req.query.id) = " + PlanID);

        db.Plans.findAll({
            where: { id: PlanID },

            include: [{ all: true }]

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

    //this grabs a specific food from the dataBase and sends it back to the front-end
    app.get('/api/foods/:id', function (req, res) {
        console.log("this is api route foods with id ", req.params.id)

        db.Foods.findAll({
            where: {
                id: req.params.id
            }
        }).then(function (result) {
            return res.json(result);

        });
    })
    //this retreives all food data from the database
    app.get('/api/foods', function (req, res) {
        console.log("this is ap/foods route: ", req.query)

        db.Foods.findAll({}).then(function (result) {
            return res.json(result);

        });
    })

    //this post route puts an entire plan into the database
    app.post("/api/plans", function (req, res) {
        // Take the request...
        console.log(req.body);
        const {
            name,
            isVeg,
            isFree,
            maxKcal
        } = req.body

        // Then send it to the ORM to "save" into the DB.
        db.Plans.create(
            req.body,
            {
                include: [db.Food_plans]
            }
        ).then(function (data) {
            return res.json(data);
        })
    });

    app.post("/api/plans/new", function (req, res) {
        // Take the request...     
        console.log("\nPost Route hit");

        console.log("new plan data received:");
        console.log(req.body);
        console.log("testing individual values");
        console.log("req.body.name: " + req.body.name);
        console.log("req.body.isVeg: " + req.body.isVeg);
        console.log("req.body.isFree: " + req.body.isFree);
        console.log("req.body.maxKcal: " + req.body.maxKcal);

        db.Plans.create({
            name: req.body.name,
            isVeg: req.body.isVeg,
            isFree: req.body.isFree,
            maxKcal: req.body.maxKcal
        }).then(function (results) {
            console.log("New plan added to Plans table");
            console.log("results: ");
            console.log(results);
            res.end();
        });
    });

    // // DELETE route for deleting todos. We can get the id of the todo to be deleted from
    // // req.params.id
    // app.delete("/api/food_plans/:id", function (req, res) {

    // });

    // // PUT route for updating todos. We can get the updated todo data from req.body
    // app.put("/api/todos", function (req, res) {

    // });
    
    //post route for the new food item section
    app.post("/api/foods/new", function(req, res){
        console.log("\nPost Route Hit");
        db.Foods.create({
            name:req.body.name,
            serving_size: req.body.serving_size,
            kcal: req.body.kcal,
            isVeg: req.body.isVeg,
            isFree: req.body.isFree
        }) .then(function (results) {
            console.log("New food added to Foods table");
            console.log("results: ");
            console.log(results);
            res.send(results);
        });
    })

};
