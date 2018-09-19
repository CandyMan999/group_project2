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


$("#learnMore").on("click", function(){
      
    weight = parseInt($("#weight").val().trim());
    height = parseInt($("#feet").val().trim()) * 12 + parseInt($("#inches").val().trim());
    age = parseInt($("#age").val().trim());
    pal = parseFloat($("#pal").val().trim());
    
    calcWeight();
    $.get("/api/food_plans/" + TEE, function(data){
        console.log("my api worked", data);
    })

    $("#home").detach();
    $(".icon").detach();
    $("#activeLevel").detach();
    results();


})

const results = function() {
   
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
                        <h1><strong>Select a diet plan </strong></h1>

                        `
    $("#attach").append(resultsDiv);

    if (BMI >= 18.5 & BMI <= 24.9) {
        $("#goal").css("display", "none");
    }

}


$("#male").on('click', function(){
    if (!$("#male").data("click")){
        $("#male").css("color", "red").data("click", 1)
        $("#female").css("color", "black");
        
    }  
})

$("#female").on("click", function(){
    if ($("#male").data("click")){
        $("#male").css("color", "black").data("click", 0)
        $("#female").css("color", "red");

    }
})

const calcWeight = function(){

    const isMale = $("#male").data("click");

    BMR = isMale ? 66 + (6.2 * weight) + (12.7 * height) - (6.76 * age) : 655.1 + (9.563 * weight) + (4.7 * height) - (4.7 * age)
    TEE = pal * BMR;


    console.log(weight, height, age, pal)

    console.log("your resting calorie burn is: ", BMR);
    TEE = parseInt( pal * BMR );
    console.log("your daily caloric burn with your activity level is: ", TEE);
    BMI = (weight * 703) / Math.pow(height,2);
    console.log("your BMI is : ", BMI);

    if (BMI < 18.5) {
        BMIresult = "you are underweight";
        let varBMI = 18.5;
        totalPounds = (BMI * Math.pow(height,2)) / 703;
        idealPounds = (varBMI * Math.pow(height,2)) / 703;
        poundsToGoal = Math.round(idealPounds - totalPounds);
        phraseThatPays = "gain";
    } 

    if (BMI >= 18.5 & BMI <= 24.9) {
        $("#goal").css("display", "none");
        BMIresult = "you are just right";
        
    }

    if (BMI > 24.9){
        let varBMI = 24.9;
        BMIresult = "you are overweight";
        totalPounds = (BMI * Math.pow(height,2)) / 703;
        idealPounds = (varBMI * Math.pow(height,2)) / 703;
        poundsToGoal = Math.round(totalPounds - idealPounds);
        console.log("pounds to lose", poundsToGoal);
        phraseThatPays = "lose";
         
    }
}


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
