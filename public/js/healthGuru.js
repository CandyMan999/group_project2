let weight;
let height;
let age;
let pal;
let BMI;
let BMIresult;
let totalPounds;
let poundsToGoal;
let idealPounds;
let phraseThatPays;
let TEE;


$("#learnMore").on("click", function () {

    weight = parseInt($("#weight").val().trim());
    height = parseInt($("#feet").val().trim()) * 12 + parseInt($("#inches").val().trim());
    age = parseInt($("#age").val().trim());
    pal = parseFloat($("#pal").val().trim());

    calcWeight();
    // $.get("/api/food_plans?TEE=" + TEE, function (data) {
    //     console.log("my api worked", data);
    // })

    $("#home").detach();
    $(".icon").detach();
    $("#activeLevel").detach();
    $("learnMore").detach();
    $(".my-4").detach();
    results();


})

const results = function () {

    let resultsDiv =
        `
                    <h2>Your Results</h2>
                        <div class="row">
                            <div class="col-sm-6">
                                <ul>
                                    <li> your BMI is ${BMI.toFixed(2)} </li> 
                                </ul>
                            </div> 
                            <div class="col-sm-6">
                                <ul>
                                    <li>${BMIresult} </li> 
                                </ul>
                            </div> 
                            
                        </div>
                        <div id="goal" class="row">
                                
                            <p>You need to ${phraseThatPays}: ${poundsToGoal} pounds to reach a healthy weight</p> 
                    
                        </div>
                        <div class="row">
                                
                            <p>Your daily caloric burn rate is: ${TEE}</p> 
                    
                        </div>
                        <h1 class="text-center"><strong>Select your diet plan options </strong></h1>
                        <div class="text-center">
                            <button type="button" id="vegan" data-clicked=0 class="btn btn-light btn-lg planIcons text-center"><img src="https://cdn1.iconfinder.com/data/icons/flat-green-organic-natural-badges/500/Vegan-2-512.png"></button>
                            <button type="button" id="gluten" data-clicked=0 class="btn btn-light btn-lg planIcons text-center"><img src="https://www.mindfullysplendid.com/wp-content/uploads/2016/09/gluten-free-icon.png"></button>
                        </div>
                        <button id="customPlan" type="button" class="btn btn-primary btn-lg btn-block">Search Plans Custom For You!!</button>

                        `
    $("#attach").append(resultsDiv);

    if (BMI >= 18.5 & BMI <= 24.9) {
        $("#goal").css("display", "none");
    }

}

$("#attach").on("click", "#customPlan", function () {


    let isVeg = $("#vegan").data("clicked");
    let isFree = $("#gluten").data("clicked");
    console.log("This is what I am trying to isVeg: ", isVeg);
    console.log("This is what I am trying to isFree: ", isFree);

    let queryString = `/api/food_plans?TEE=${TEE}&isVeg=${isVeg}&isFree=${isFree}`

    $.get(queryString, function (data) {
        console.log("my api worked", data);
    })
})


$("#attach").on("click", "#vegan", function () {
    console.log($("#vegan").data("clicked"));
    if ($("#vegan").data("clicked") === 0) {
        $("#vegan").css("border", "4px solid green").data("clicked", 1);
    } else {
        $("#vegan").css("border", "unset").data("clicked", 0);
    }
})

$("#attach").on("click", "#gluten", function () {
    console.log($("#gluten").data("clicked"));
    if ($("#gluten").data("clicked") === 0) {
        $("#gluten").css("border", "4px solid brown").data("clicked", 1);
    } else {
        $("#gluten").css("border", "unset").data("clicked", 0);
    }
})

$("#male").on('click', function () {
    console.log($("#male").data("click"));
    if (!$("#male").data("click")) {
        $("#male").css("color", "red").data("click", 1)
        $("#female").css("color", "black");

    }
})

$("#female").on("click", function () {
    console.log($("#male").data("click"));
    if ($("#male").data("click")) {
        $("#male").css("color", "black").data("click", 0)
        $("#female").css("color", "red");

    }
})

const calcWeight = function () {

    const isMale = $("#male").data("click");

    BMR = isMale ? 66 + (6.2 * weight) + (12.7 * height) - (6.76 * age) : 655.1 + (9.563 * weight) + (4.7 * height) - (4.7 * age)
    TEE = pal * BMR;


    console.log(weight, height, age, pal)

    console.log("your resting calorie burn is: ", BMR);
    TEE = parseInt(pal * BMR);
    console.log("your daily caloric burn with your activity level is: ", TEE);
    BMI = (weight * 703) / Math.pow(height, 2);
    console.log("your BMI is : ", BMI);

    if (BMI < 18.5) {
        BMIresult = "you are underweight";
        let varBMI = 18.5;
        totalPounds = (BMI * Math.pow(height, 2)) / 703;
        idealPounds = (varBMI * Math.pow(height, 2)) / 703;
        poundsToGoal = Math.round(idealPounds - totalPounds);
        phraseThatPays = "gain";
    }

    if (BMI >= 18.5 & BMI <= 24.9) {
        $("#goal").css("display", "none");
        BMIresult = "you are just right";

    }

    if (BMI > 24.9) {
        let varBMI = 24.9;
        BMIresult = "you are overweight";
        totalPounds = (BMI * Math.pow(height, 2)) / 703;
        idealPounds = (varBMI * Math.pow(height, 2)) / 703;
        poundsToGoal = Math.round(totalPounds - idealPounds);
        console.log("pounds to lose", poundsToGoal);
        phraseThatPays = "lose";

    }
}

// Use this route $.get("/api/food_plans/" + ID, function (data) {
// Query this after the user has selected a diet plan from Plans table first
// then use the Plans ID here to query this route
// It will return data from Plans table and all related FOOD data from the Foods table
// that is tied to that particular plan
$("#buttonID4").click(function () {
    console.log("find food plans #1 with food data button clicked!");

    var ID = 1;

    console.log("testing ID: " + ID);

    $.get("/api/food_plans/" + ID, function (data) {
        console.log("Posts: ", data);

        console.log("testing data length:  " + data.length + "\n");

        console.log(data[0]);

        var Data = data[0];

        console.log("testing Data.name:  " + Data.name);
        console.log("testing Data.maxKcal:  " + Data.maxKcal);
        console.log("testing Data.isFree:  " + Data.isFree);
        console.log("testing Data.isVeg:  " + Data.isVeg);

        console.log("\n==================================");
        console.log("Testing food array");

        for (var x = 0; x < Data.Foods.length; x++) {
            console.log(Data.Foods[x]);
            console.log("testing Data.Foods[" + x + "].name value:  " + Data.Foods[x].name);
            console.log("testing Data.Foods[" + x + "].serving_size value:  " + Data.Foods[x].serving_size);
            console.log("testing Data.Foods[" + x + "].kcal value:  " + Data.Foods[x].kcal);
        }
        console.log("\n==================================\n");


    })


});

// Note for other group members:
// I put these into random buttons I made in an index.html
// if you want to use handlebars, you will need to delete that index.html file that I randomly made to test these buttons
// $("#buttonID1").click(function () {
//     console.log("get specific food plan button clicked");

//     $.get("/api/food_plans", function (data) {
//         console.log("Posts: ", data);

//         console.log("testing data length:  " + data.length + "\n");

//         for (var x = 0; x < data.length; x++) {
//             console.log(data[x]);
//         }
//     });

// });

// $("#buttonID2").click(function () {
//     console.log("Non-specific diet plan 3500 calorie button clicked");

//     $.get("/api/non_specific_3500cal", function (data) {
//         console.log("Posts: ", data);

//         // to save each food entry
//         var foodArray = [];

//         var calorieLimit = 3500;
//         var calorieCounter = 0;

//         console.log("calorieLimite:  " + calorieLimit);
//         console.log("calorieCounter: " + calorieCounter);

//         console.log("testing data length:  " + data.length + "\n");

//         for (var x = 0; x < data.length; x++) {
//             console.log(data[x]);
//             console.log("testing data[" + x + "].name value:  " + data[x].name);
//             console.log("testing data[" + x + "].kcal value:  " + data[x].kcal);

//             if (calorieCounter + data[x].kcal <= calorieLimit) {
//                 calorieCounter += data[x].kcal;
//                 console.log("calorieCounter:  " + calorieCounter);
//                 foodArray.push(data[x]);
//             }

//         }

//         console.log("testing foodArray now");
//         console.log(foodArray);
//         console.log("testing final calorieCounter:   " + calorieCounter);
//     });


// });


// $("#buttonID3").click(function () {
//     console.log("Vegan diet plan 2000 calorie button clicked");

//     $.get("/api/vegan_2000cal", function (data) {
//         console.log("Posts: ", data);

//         // to save each food entry
//         var foodArray = [];

//         var calorieLimit = 2000;
//         var calorieCounter = 0;

//         console.log("calorieLimite:  " + calorieLimit);
//         console.log("calorieCounter: " + calorieCounter);

//         console.log("testing data length:  " + data.length + "\n");

//         for (var x = 0; x < data.length; x++) {
//             console.log(data[x]);
//             console.log("testing data[" + x + "].name value:  " + data[x].name);
//             console.log("testing data[" + x + "].kcal value:  " + data[x].kcal);

//             if (calorieCounter + data[x].kcal <= calorieLimit) {
//                 calorieCounter += data[x].kcal;
//                 console.log("calorieCounter:  " + calorieCounter);
//                 foodArray.push(data[x]);
//             }

//         }

//         console.log("testing foodArray now");
//         console.log(foodArray);
//         console.log("testing final calorieCounter:   " + calorieCounter);
//     });


// });



// let dietPlan1 = 3500;
// let dietPlan2 = 3000;
// let dietPlan3 = 2500;
// let dietPlan4 = 2000;






// BMI = (lbs * 703) / Math.pow(inches,2);
// console.log("your BMI is : ", BMI);

// if (BMI < 18.5) {
//     console.log("you are underweight")
// } 

// if (BMI >= 18.5 & BMI <= 24.9) {
//     console.log("you are just right")
// }

// if (BMI > 24.9){
//     console.log("you are overweight")
//     varBMI = 24.9;



//     if (TEE > dietPlan1){
//         daysToGoal = ((poundsToGoal * 3500) / (TEE - dietPlan1));
//         console.log("days to goal with diet plan1: ", daysToGoal);
//     }

//     if(TEE < dietPlan1 & TEE > dietPlan2) {
//         daysToGoal = ((poundsToGoal * 3500) / (TEE - dietPlan2));
//         console.log("days to goal with diet plan2: ", daysToGoal);
//     }

//     if (TEE < dietPlan2 & TEE > dietPlan3){
//         daysToGoal = ((poundsToGoal * 3500) / (TEE - dietPlan3));
//         console.log("days to goal with diet plan3: ", daysToGoal);
//     }

//     if (TEE < dietPlan3 & TEE > dietPlan4){
//         daysToGoal = ((poundsToGoal * 3500) / (TEE - dietPlan4));
//         console.log("days to goal with diet plan4: ", daysToGoal);
//     }

// }

// console.log("log back in next week and enter your new weight to see if you are on track to meet your goal")
