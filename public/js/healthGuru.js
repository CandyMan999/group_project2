let weight;
let height; 
let age;
let pal;

$("#learnMore").on("click", function(){
      
    weight = parseInt($("#weight").val().trim());
    height = parseInt($("#feet").val().trim()) * 12 + parseInt($("#inches").val().trim());
    age = parseInt($("#age").val().trim());
    pal = parseFloat($("#pal").val().trim());
    
    calcWeight();
    $.get("/api/food_plans/" + TEEmale, function(data){
        console.log("my api worked", data);
    })
})

$("#male").on('click', function(){
    $("#male").css("color", "red");
})

const calcWeight = function(){

    console.log(weight, height, age, pal)

    BMRmale = 66 + (6.2 * weight) + (12.7 * height) - (6.76 * age);
    console.log("your resting calorie burn is: ", BMRmale);
    TEEmale = pal * BMRmale;
    console.log("your daily caloric burn with your activity level is: ", TEEmale);
    BMI = (weight * 703) / Math.pow(height,2);
    console.log("your BMI is : ", BMI);

    if (BMI < 18.5) {
        console.log("you are underweight")
    } 

    if (BMI >= 18.5 & BMI <= 24.9) {
        console.log("you are just right")
    }

    if (BMI > 24.9){
        console.log("you are overweight")
    }
}


// let dietPlan1 = 3500;
// let dietPlan2 = 3000;
// let dietPlan3 = 2500;
// let dietPlan4 = 2000;




// BMRfemale = 655.1 + (9.563 * lbs) + (4.7 * inches) - (4.7 * age);


// TEEfemale = PAL[2] * BMRfemale;





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
//     totalPounds = (BMI * Math.pow(inches,2)) / 703;
//     idealPounds = (varBMI * Math.pow(inches,2)) / 703;
//     poundsToLose = totalPounds - idealPounds;
//     console.log("you need to lose: ",Math.round(poundsToLose) , " pounds to reach a healthy weight");

  
//     if (TEEmale > dietPlan1){
//         daysToGoal = ((poundsToLose * 3500) / (TEEmale - dietPlan1));
//         console.log("days to goal with diet plan1: ", daysToGoal);
//     }

//     if(TEEmale < dietPlan1 & TEEmale > dietPlan2) {
//         daysToGoal = ((poundsToLose * 3500) / (TEEmale - dietPlan2));
//         console.log("days to goal with diet plan2: ", daysToGoal);
//     }

//     if (TEEmale < dietPlan2 & TEEmale > dietPlan3){
//         daysToGoal = ((poundsToLose * 3500) / (TEEmale - dietPlan3));
//         console.log("days to goal with diet plan3: ", daysToGoal);
//     }

//     if (TEEmale < dietPlan3 & TEEmale > dietPlan4){
//         daysToGoal = ((poundsToLose * 3500) / (TEEmale - dietPlan4));
//         console.log("days to goal with diet plan4: ", daysToGoal);
//     }

// }

// console.log("log back in next week and enter your new weight to see if you are on track to meet your goal")
