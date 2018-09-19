var db = require("../models");


// Routes
// =============================================================
module.exports = function(app) {

    app.get("/", function(req, res){
        res.render("index");
    })
  // GET route for getting all of the todos 

  app.get("/api/food_plans/:TEE", function(req, res) {
      console.log(req.params.TEE)
    db.Food_plans.findAll({}).then(function(result) {
        return res.json(result);
    });
});

    app.get("/api/food_plans", function(req, res, TEE) {
        db.Food_plans.findAll({}).then(function(result) {
            return res.json(result);
        });
    });

  // POST route for saving a new todo. We can create todo with the data in req.body
  app.post("/api/food_plans", function(req, res) {
   // Take the request...
   console.log(req.body);
   

   // Then send it to the ORM to "save" into the DB.
   db.Food_plans.create({

    
     
   }).then(function(data){
     return res.json(data);
   })
  });

  // DELETE route for deleting todos. We can get the id of the todo to be deleted from
  // req.params.id
  app.delete("/api/food_plans/:id", function(req, res) {

  });

  // PUT route for updating todos. We can get the updated todo data from req.body
  app.put("/api/todos", function(req, res) {

  });
};
