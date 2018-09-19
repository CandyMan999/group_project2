$(document).ready(function () {

    $("#buttonID1").click(function () {
        console.log("button clicked");

        $.get("/api/food_plans", function (data) {
            console.log("Posts: ", data);

            console.log("testing data length:  " + data.length + "\n");

            for (var x = 0; x < data.length; x++) {
                console.log(data[x]);
            }
        });

    });

    $("#buttonID2").click(function () {
        console.log("Non-specific diet plan 3500 calorie button clicked");

        $.get("/api/non_specific_3500cal", function (data) {
            console.log("Posts: ", data);

            // to save each food entry
            var foodArray = [];

            var calorieLimit = 3500;
            var calorieCounter = 0;

            console.log("calorieLimite:  " + calorieLimit);
            console.log("calorieCounter: " + calorieCounter);

            console.log("testing data length:  " + data.length + "\n");

            for (var x = 0; x < data.length; x++) {
                console.log(data[x]);
                console.log("testing data[" + x + "].name value:  " + data[x].name);
                console.log("testing data[" + x + "].kcal value:  " + data[x].kcal);

                if (calorieCounter + data[x].kcal <= calorieLimit) {
                    calorieCounter += data[x].kcal;
                    console.log("calorieCounter:  " + calorieCounter);
                    foodArray.push(data[x]);
                }

            }

            console.log("testing foodArray now");
            console.log(foodArray);
            console.log("testing final calorieCounter:   " + calorieCounter);
        });


    });


    $("#buttonID3").click(function () {
        console.log("Vegan diet plan 2000 calorie button clicked");

        $.get("/api/vegan_2000cal", function (data) {
            console.log("Posts: ", data);

            // to save each food entry
            var foodArray = [];

            var calorieLimit = 2000;
            var calorieCounter = 0;

            console.log("calorieLimite:  " + calorieLimit);
            console.log("calorieCounter: " + calorieCounter);

            console.log("testing data length:  " + data.length + "\n");

            for (var x = 0; x < data.length; x++) {
                console.log(data[x]);
                console.log("testing data[" + x + "].name value:  " + data[x].name);
                console.log("testing data[" + x + "].kcal value:  " + data[x].kcal);

                if (calorieCounter + data[x].kcal <= calorieLimit) {
                    calorieCounter += data[x].kcal;
                    console.log("calorieCounter:  " + calorieCounter);
                    foodArray.push(data[x]);
                }

            }

            console.log("testing foodArray now");
            console.log(foodArray);
            console.log("testing final calorieCounter:   " + calorieCounter);
        });


    })



});