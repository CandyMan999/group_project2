let weight;
let height;
let age;
let pal;
let BMI;
let BMIresult;
let poundsToGoal;
let TEE;
let quantity;
let dietPlan;
let x = 0;
let itemsPicked = [];
let foodQty = [];

$.backstretch("https://images.unsplash.com/photo-1494390248081-4e521a5940db?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=73a27b0f1231b46fad892c62f220b9d8&auto=format&fit=crop&w=1295&q=80");

$("#logo").on('click', function () {
    location.reload();
})
$(".logo").on('click', function () {
    location.reload();
})


$("#attach").on('click', "#createCustom", function () {
    $("#attach").children().remove();
    let queryString = `/api/foods`

    $.get(queryString, function (data) {

        console.log("this new api work: ", data);
        console.log("testing data length:  " + data.length + "\n");

        console.log(data[0]);

        let newDiet = `
        <div id="activeLevel" class="dropdown text-center">
            <h3 "text-center id="add" class="font-effect-shadow-multiple style">Add A Food To Your Diet Plan</h3>
            <div class="input-group mb-3">

                <select id="newItem" class="custom-select" id="inputGroupSelect03" aria-label="Example select with button addon">
                    <option selected>Choose...</option>
                </select>
            </div>
        
        </div>
        <a id="update" class="btn btn-primary btn-lg btn-block font-effect-shadow-multiple" href="#" role="button">Update Plan</a>
        <hr id="split" class="my-4">
        
        <div class="accordion" id="accordionExample">
            <div class="card">

                    <h2 class="text-center card-header">
                        <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Add Your Own Food Options</button>
                    </h2>

                <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                    <div class="card-body">
                    <div class="form-group">
		                <label for="newFood">New Food Name</label>
                        <input type="text" class="form-control" id="newFoodName">
                    </div>
                    <div class="row">
                        <div class="form-group col-md-6">
		                    <label for="servingSize">Serving Size</label>
                            <input type="text" class="form-control" id="servingSize">
                        </div>
                        <div class="form-group col-md-6">
		                    <label for="newFoodKcal">Calories per serving</label>
                            <input type="text" class="form-control" id="newFoodKcal">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group form-check">
                                <input type="checkbox" class="form-check-input" id="isVegan" >
                                <label for="isVegan" class="form-check-label">Vegan</label>
                            </div>
                            <div class="form-group form-check">
                                <input type="checkbox" class="form-check-input" id="isGlutenFree">
                                <label for="isGlutenFree" class="form-check-label">Gluten-Free</label>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <a id="addFoodItems" class="btn btn-primary btn-lg" href="#" role="button">Add new food item</a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>`


        $("#attach").append(newDiet);

        data.forEach(foodItem => {
            let option = `<option class="option" value="${foodItem.id}">(${foodItem.name})   Serving Size: (${foodItem.serving_size})   kcal: (${foodItem.kcal})   Vegan: (${foodItem.isVeg})   Gluten-Free: (${foodItem.isFree})</option>`
            $("#attach #newItem").append(option);
        });
        let table = `<table id="table" class="table">
                    <thead>
                    <tr class="font-effect-shadow-multiple style" >
                        <th class="font-effect-shadow-multiple style" scope="col">#</th>
                        <th class="font-effect-shadow-multiple style" scope="col">Food Item</th>
                        <th class="font-effect-shadow-multiple style" scope="col">Serving Size</th>
                        <th class="font-effect-shadow-multiple style" scope="col">Kcal</th>
                        <th class="font-effect-shadow-multiple style" scope="col">Quantity</th>
                        <th class="font-effect-shadow-multiple style" scope="col">Vegan</th>
                        <th class="font-effect-shadow-multiple style" scope="col">Gluten-Free</th>
                        <th class="font-effect-shadow-multiple style" scope="col">Remove</th>
                    </tr>
                    </thead>
                    <tbody id="tableBody">
                    
                        </tbody>
                    </table>
                    <div class="input-group">
                    <input id="planName" type="text" class="form-control" placeholder="Enter a Name for Your Plan" aria-label="Enter a Name for Your Plan" aria-describedby="button-addon4">
                    <div class="input-group-append" id="button-addon4">
                        <button id="save" class="btn btn-outline-secondary" type="button">Save Your Plan</button>
                        
                    </div>
                    </div>`

        $("#attach").append(table);
    })
})

//This section is used to post the new food item to the Foods database

$("#attach").on("click", "#addFoodItems", function () {
    console.log("Add food item button works");
    let newFoodItem = {
        name: $("#newFoodName").val().trim(),
        serving_size: $("#servingSize").val().trim(),
        kcal: Number($("#newFoodKcal").val().trim()),
        isVeg: $("#isVegan").is(":checked"),
        isFree: $("#isGlutenFree").is(":checked")
    }
    console.log(newFoodItem);
    $.post("/api/foods/new", newFoodItem, function (data, res) {
        console.log("post: ", data, res);
        console.log("\n testing res:");
        console.log(res);
        console.log("\n testing data:");
        console.log(data);
        $("input").val("");
        let option = `<option class="option" value="${data.id}">(${data.name})   Serving Size: (${data.serving_size})   kcal: (${data.kcal})   Vegan: (${data.isVeg})   Gluten-Free: (${data.isFree})</option>`
        $("#attach #newItem").append(option);
    })
})

$("#attach").on("click", "#update", function () {
    let id = $("#newItem").val()
    console.log("this is my id: ", id);
    let queryString = `/api/foods/`

    $.get(queryString + id, function (data) {
        console.log("this is my data: ", data)
        if (itemsPicked.indexOf(data[0].id) === -1) {
            itemsPicked.push(data[0].id);
            console.log("this is my itemsPicked array: ", itemsPicked)

            let tableInsert = `<tr id="${data[0].id}row" class="newRow">
            <th scope="row">${x += 1}</th>
            <td  id="name">${data[0].name}</td>
            <td id="serving">${data[0].serving_size}</td>
            <td data-cal="${data[0].kcal}" id="${data[0].id}kcal" class="kcal">${data[0].kcal}</td>
            <td class="quantity" id="${data[0].id}">1</td>
            <td value="${data[0].isVeg}" id="${data[0].id}veg">${data[0].isVeg}</td>
            <td value="${data[0].isFree}" id="${data[0].id}free">${data[0].isFree}</td>
            
            <td id="${data[0].id}remove"><button type="button" class="btn remove btn-danger">Remove Item</button></td>
            </tr>`

            $("#attach #tableBody").append(tableInsert);
        } else {
            console.log("this is the id im looking for: ", id)
            $(".newRow").each(function () {
                let updateAmount = parseInt($(this).find(`#${id}`).text());
                updateAmount++

                if (updateAmount) {
                    console.log(`new amount `, updateAmount)
                    $(this).find(`#${id}`).html(updateAmount);

                    let updatekcal = parseInt($(this).find(`#${id}kcal`).data('cal'));

                    console.log("this is the new kcal: ", $(this).find(`#${id}kcal`).data('cal'));
                    $(this).find(`#${id}kcal`).html(updatekcal * updateAmount);
                }

            })

        }

        let sumKcal = 0;
        $('.newRow').each(function () {
            sumKcal += Number($(this).find(".kcal").data('cal')) * Number($(this).find(".quantity").text());
        });
        console.log("this is my kcal: ", sumKcal);

        let daysToGoal = ((poundsToGoal * 3500) / (Math.abs(sumKcal - TEE)));
        console.log("Days to reach target weight with this diet Plan: ", daysToGoal);

        let planCalories = `<p id="planCalories" class="phrase">Your Custom diet-plan has a total Calorie Count of: <span id="calories">${sumKcal}</span></p>`
        let goalPhrase = `<p id="goalPhrase" class="phrase">Days to reach target weight with this diet Plan: ${parseInt(daysToGoal)}</p>`
        $("#planCalories").remove();
        $("#goalPhrase").remove();
        $("#attach").prepend(goalPhrase).prepend(planCalories);


        $(".newRow").each(function () {
            $(this).find(`#${data[0].id}remove`).on("click", function () {

                var foodTable = $("#table");

                foodTable.find('tr').each(function (i) {
                    var $tds = $(this).find('td'),
                        foodName = $tds.eq(0).text(),
                        servingSize = $tds.eq(1).text(),
                        kCal = $tds.eq(2).text(),
                        quantity = $tds.eq(3).text();

                    // skip the first row because that's the column labels
                    // and checking if the food name matches
                    if (i != 0 && data[0].name === foodName) {
                        console.log("Testing row#" + (i) + "[ foodName: " + foodName + ", servingSize: " + servingSize + ", kCal: " + kCal + ", quantity: " + quantity + "]");

                        console.log("testing total kCal(" + kCal + ") * quantity(" + quantity + ") = " + (kCal * quantity));
                        sumKcal -= (kCal * quantity);
                        console.log("testing sumKcal's new value:  " + sumKcal);

                    }
                })


                globalCalorieCounter = sumKcal;

                console.log("================================================");
                $(`#${data[0].id}row`).remove();

                console.log("remove button clicked");
                console.log("testing data[0] value");
                console.log(data[0]);

                console.log("\ntesting data[0].id value:  " + data[0].id);

                console.log("testing this.data.cal:  " + data[0].kcal);

                // Finds the index of data[0].id in the array
                // if it can find it, it'll return the index value
                // if it can't, it will set index to -1
                let index = itemsPicked.indexOf(data[0].id);
                console.log("testing index var value:  " + index);

                // protection condition to check if the index of the id is valid
                // will not run if the index value is -1
                if (index !== -1) {
                    console.log("removing entry from itemsPicked array");
                    itemsPicked.splice(index, 1);
                }

                console.log("testing itemPicks array new values");
                console.log(itemsPicked);
                console.log("================================================\n");




            })

        })

    })
})

// On-click function for the Save the Plan button during the custom food plan screen 
$("#attach").on("click", "#save", function () {
    console.log("save plan button clicked");
    

    var planName = $("#planName").val().trim();
    var maxCalories = Number($("#attach #calories").text());

    // counters to track how many food items in the custom plan table are vegan and/or glutenfree
    var veganCounter = 0;
    var gfCounter = 0;

    // keeps track of the total amount of rows with food data
    var rowCounter = 0;

    // boolean variables to flag the custom plan as vegan and/or glutenfree when sending to post route
    var veganCheck;
    var gfCheck;


    console.log("testing planName:  " + planName);
    console.log("testing maxCalories:  " + maxCalories);

    console.log("testing final food items picked upon saving the food plan");
    console.log(itemsPicked)

    var foodTable = $("#table");


    // Finds table row then does each loop through each tr row to find cell data for each column
    foodTable.find('tr').each(function (i) {
        var $tds = $(this).find('td'),
            foodName = $tds.eq(0).text(),
            servingSize = $tds.eq(1).text(),
            kCal = $tds.eq(2).text(),
            quantity = $tds.eq(3).text(),
            vegan = $tds.eq(4).text(),
            glutenFree = $tds.eq(5).text();


        // Don't use the first row which is the row containing the labels of the columns across the top
        if (i != 0) {
            console.log("loop #" + i);
            console.log("Testing row#" + (i) + "[ foodName: " + foodName + ", servingSize: " + servingSize + ", kCal: " + kCal + ", quantity: " + quantity + ", Vegan?: " + vegan + ", Gluten-Free?: " + glutenFree + " ]");

            foodQty.push({ FoodId: itemsPicked[i - 1], qty: parseInt(quantity) });
            console.log("testing foodQty array data");
            console.log(foodQty);

            rowCounter++;

            // console.log ("Is " + foodName + " a vegan food item?  " + vegan);
            if (vegan === "true") {
                veganCounter++;
            }

            // console.log ("Is " + foodName + " a gluten-free food item?  " + glutenFree);
            if (glutenFree === "true") {

                gfCounter++;
            }

        }
    })

    console.log("testing rowCounter value:  " + rowCounter);
    console.log("testing veganCheck value:  " + veganCounter);
    console.log("testing gfCheck value:  " + gfCounter);


    // if there is more total rows than number of vegan food item rows
    // that means there is a food item that isn't vegan so the custom plan doesn't totally qualify as vegan
    if (rowCounter > veganCounter) {
        veganCheck = false;
    }
    else if (rowCounter === veganCounter) {
        veganCheck = true;
    }

    // if there is more total rows than number of gluten-free food item rows
    // that means there is a food item that isn't gluten-free so the custom plan doesn't totally qualify as gluten-free
    if (rowCounter > gfCounter) {
        gfCheck = false;
    }
    else if (rowCounter === gfCounter) {
        gfCheck = true;
    }

    console.log("testing veganCheck:  " + veganCheck);
    if (veganCheck) {

        console.log("This plan qualifies as vegan friendly");
    }
    else {
        console.log("This plan does not qualify as vegan friendly");
    }

    console.log("testing gfCheck:  " + gfCheck);
    if (gfCheck) {
        console.log("This plan qualifies as gluten-free");
    }
    else {
        console.log("This plan does not qualify as gluten-free");
    }


    // Preparing the data into a variable format compatible to Plans table columns
    var newCustomPlan = {
        name: planName,
        isVeg: veganCheck,
        isFree: gfCheck,
        maxKcal: maxCalories,
        Food_plans: foodQty
    };

    console.log("testing newCustomPlan array data");
    console.log(newCustomPlan);

    console.log("\n sending to post route");

    $.post('/api/plans', newCustomPlan, function (err, res) {
        console.log("post: ", err, res)
    })
    // $.post("/api/plans/new", newCustomPlan)
    //     // on success, run the following code
    //     .then(function () {
    //         console.log("sent to post route /api/plans");
    //     });
    $("#planName").val('');
    $("#attach #tableBody").remove();
});

// $("#attach").on('click', '#save', function () {

//     let data = {
//         "name": $("#attach div #planName").val(),
//         "isVeg": false,
//         "isFree": false,
//         "maxKcal": Number($("#attach #calories").text()),
//         "Food_plans": [
//             {
//                 "FoodId": 1,
//                 "qty": 1
//             },
//             {
//                 "FoodId": 2,
//                 "qty": 4
//             }
//         ]

//     }
//     $.post('/api/plans', data, function (err, res) {
//         console.log("post: ", err, res)
//     })
// })




$("#learnMore").on("click", function () {

    weight = parseInt($("#weight").val().trim());
    height = parseInt($("#feet").val().trim()) * 12 + parseInt($("#inches").val().trim());
    age = parseInt($("#age").val().trim());
    pal = parseFloat($("#pal").val().trim());

    calcWeight();
    // $.get("/api/food_plans?TEE=" + TEE, function (data) {
    //     console.log("my api worked", data);
    // })
    $("#gender").remove();
    $("#home").detach();
    $(".icon").detach();
    $("#activeLevel").detach();
    $("learnMore").detach();
    $(".my-4").detach();
    results();


})

const results = function () {
    const resultMes = !BMIresult ? 'You Are A Healthy Weight!' : BMIresult === 1 ? 'You Are Overweight' : 'You Are Underweight'
    const goalMessage = BMIresult ?
        `<div id="goal" class="row results">
        <div class="col-sm-12 text-center ">                        
        <h2 class="text-center font-effect-shadow-multiple style" >You need to <span class="obvious"> ${BMIresult === -1 ? 'GAIN' : 'LOSE'}</span>: <span class="obvious">${poundsToGoal}</span> pounds to reach a healthy weight</h2> 
        </div>
        </div>` : "";
    let resultsDiv =
        `       <div id="customResult">
                    <h1 class="results text-center font-effect-shadow-multiple style">Results: <span class="obvious">${resultMes}</span></h1>
                        ${goalMessage}
                        <div class="row results tex-center">
                            <div class="col-sm-12 text-center">
                                <ul>
                                    <li class="font-effect-shadow-multiple style"> Your BMI is: <span class="obvious">${BMI.toFixed(2)}</span> </li> 
                                </ul>
                            </div> 
                      
                            <div class="col-sm-12 text-center">
                                <ul>
                                    <li class="font-effect-shadow-multiple style">Your daily caloric burn rate is: <span class="obvious">${TEE}</span></li> 
                                </ul>
                            </div> 
                            
                        </div>
                        <hr class="my-4">
                        <button id="createCustom" class="btn btn-primary btn-lg style font-effect-shadow-multiple" href="#" role="button">Create Custom</button>
                        <h1 id="restrictions" class="text-center  results font-effect-shadow-multiple"><strong>Optional Restrictions</strong></h1>
                        <div class="text-center results">
                            <button type="button" id="vegan" data-clicked=0 class="btn btn-light btn-lg planIcons text-center"><img src="https://cdn1.iconfinder.com/data/icons/flat-green-organic-natural-badges/500/Vegan-2-512.png"></button>
                            <button type="button" id="gluten" data-clicked=0 class="btn btn-light btn-lg planIcons text-center"><img src="https://www.mindfullysplendid.com/wp-content/uploads/2016/09/gluten-free-icon.png"></button>
                        </div>
                        <button id="customPlan" type="button" class="btn btn-primary btn-lg btn-block results font-effect-shadow-multiple style"><img = src="https://d3u67r7pp2lrq5.cloudfront.net/stores/avatars/754251/medium/happygurulogo.png?1444076549">Search The Guru's Custom Plans!!</button>
                </div>
                        `
    $("#attach").append(resultsDiv);
    $("#createCustom").css("display", "none");

}


$("#attach").on("click", "#customPlan", function () {
    $("#createCustom").css("display", "unset");

    let isVeg = $("#vegan").data("clicked");
    let isFree = $("#gluten").data("clicked");
    console.log("This is what I am trying to isVeg: ", isVeg);
    console.log("This is what I am trying to isFree: ", isFree);

    let queryString = `/api/Plans?TEE=${TEE}&isVeg=${isVeg}&isFree=${isFree}&BMI=${BMI}`

    $.get(queryString, function (data) {
        $(".results").detach();
        console.log("my api worked", data);
        data.forEach(element => {
            let selecetPlan =
                `<button type="button" value="${element.id}" data-cal="${element.maxKcal}" class="btn btn-primary btn-lg picked mr-1"> ${element.name} calories: ${element.maxKcal}</button>`

            $("#attach").append(selecetPlan);
        });


    })
})

$("#attach").on('click', '.picked', function () {
    $(".table").remove();
    $(".phrase").remove();
    $("#delete").remove();
    let id = $(this).val();
    let table = `<table class="table">
    <thead>
      <tr class="font-effect-shadow-multiple style">
        <th class="font-effect-shadow-multiple style" scope="col">#</th>
        <th class="font-effect-shadow-multiple style" scope="col">Food Item</th>
        <th class="font-effect-shadow-multiple style" scope="col">Serving Size</th>
        <th class="font-effect-shadow-multiple style" scope="col">Quantity</th>
        <th class="font-effect-shadow-multiple style" scope="col">Kcal</th>
      </tr>
    </thead>
    <tbody id="tableBody">
      
    </tbody>
  </table>
  <button id="delete" value="${id}" type="button" class="btn btn-primary btn-lg font-effect-shadow-multiple style">Delete plan</button>

  `

    $("#attach").append(table)
    
  

    console.log($(this).val());
    
    dietPlan = $(this).data('cal');

    let daysToGoal = ((poundsToGoal * 3500) / (Math.abs(dietPlan - TEE)));
    console.log("Days to reach target weight with this diet Plan: ", daysToGoal);

    if (BMIresult) {
        let goalPhrase = `<p class="phrase">Days to reach target weight with this diet Plan: ${parseInt(daysToGoal)}</p>`
        $("#attach").prepend(goalPhrase);
    }

    console.log("this is the diet plan calories: ", dietPlan)
    let queryString = `/api/food_plans?id=${id}`

    $.get(queryString, function (data) {

        console.log("this new api work: ", data);
        console.log("testing data length:  " + data.length + "\n");

        console.log(data[0]);

        var Plan = data[0];

        console.log("testing Plan.name:  " + Plan.name);
        console.log("testing Plan.maxKcal:  " + Plan.maxKcal);
        console.log("testing Plan.isFree:  " + Plan.isFree);
        console.log("testing Plan.isVeg:  " + Plan.isVeg);

        console.log("\n==================================");
        console.log("Testing food array");

        for (var x = 0; x < Plan.Foods.length; x++) {
            console.log(Plan.Foods[x]);
            console.log("testing Plan.Foods[" + x + "].name value:  " + Plan.Foods[x].name);
            console.log("testing Plan.Foods[" + x + "].serving_size value:  " + Plan.Foods[x].serving_size);
            console.log("testing Plan.Foods[" + x + "].kcal value:  " + Plan.Foods[x].kcal);

            let tableInsert = `
                        <tr>
                            <th scope="row">${x + 1}</th>
                            <td>${Plan.Foods[x].name}</td>
                            <td id="qty">${Plan.Foods[x].serving_size}</td>
                            <td>${Plan.Foods[x].Food_plans.qty}</td>
                            <td>${Plan.Foods[x].kcal}</td>
                        </tr>
                        //         `


            $("#attach #tableBody").append(tableInsert);

        }
        console.log("\n==================================\n");
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
        $("#male").css("color", "limegreen").data("click", 1)
        $("#female").css("color", "black");

    }
})

$("#female").on("click", function () {
    console.log($("#male").data("click"));
    if ($("#male").data("click")) {
        $("#male").css("color", "black").data("click", 0)
        $("#female").css("color", "limegreen");

    }
})

const calcWeight = function () {

    const isMale = $("#male").data("click");

    BMR = isMale ? 66 + (6.2 * weight) + (12.7 * height) - (6.76 * age) : 655.1 + (4.35 * weight) + (4.7 * height) - (4.7 * age);
    TEE = pal * BMR;

    console.log("your resting calorie burn is: ", BMR);
    TEE = parseInt(pal * BMR);
    console.log("your daily caloric burn with your activity level is: ", TEE);
    BMI = (weight * 703) / Math.pow(height, 2);
    console.log("your BMI is : ", BMI);

    if (BMI >= 18.5 & BMI <= 24.9) {
        BMIresult = 0;

    } else {
        BMIresult = BMI < 18.5 ? -1 : 1
        let varBMI = BMI < 18.5 ? 18.5 : 24.9
        const totalPounds = (BMI * Math.pow(height, 2)) / 703;
        const idealPounds = (varBMI * Math.pow(height, 2)) / 703;
        poundsToGoal = Math.abs(Math.round(totalPounds - idealPounds))
    }

}

// Use this route $.get("/api/food_plans/" + ID, function (data) {
// Query this after the user has selected a diet plan from Plans table first
// then use the Plans ID here to query this route
// It will return data from Plans table and all related FOOD data from the Foods table
// that is tied to that particular plan
// $("#buttonID4").click(function () {
//     console.log("find food plans #1 with food data button clicked!");

//     var ID = 1;

//     console.log("testing ID: " + ID);

//     $.get("/api/food_plans/" + ID, function (data) {
//         console.log("Posts: ", data);

//         console.log("testing data length:  " + data.length + "\n");

//         console.log(data[0]);

//         var Data = data[0];

//         console.log("testing Data.name:  " + Data.name);
//         console.log("testing Data.maxKcal:  " + Data.maxKcal);
//         console.log("testing Data.isFree:  " + Data.isFree);
//         console.log("testing Data.isVeg:  " + Data.isVeg);

//         console.log("\n==================================");
//         console.log("Testing food array");

//         for (var x = 0; x < Data.Foods.length; x++) {
//             console.log(Data.Foods[x]);
//             console.log("testing Data.Foods[" + x + "].name value:  " + Data.Foods[x].name);
//             console.log("testing Data.Foods[" + x + "].serving_size value:  " + Data.Foods[x].serving_size);
//             console.log("testing Data.Foods[" + x + "].kcal value:  " + Data.Foods[x].kcal);
//         }
//         console.log("\n==================================\n");

//     })
// });

$("#oldVegan").on('click', function () {
    let html = `<div class="video text-center"> 
                    <iframe width="840" height="630"
                    src="https://www.youtube.com/embed/FX58PyQwrcI" frameborder="0" allow="autoplay; encrypted-media">
                    </iframe>
                </div>`
    $("#attach").children().remove();
    $("#attach").append(html);
    $("#attach").css("opacity", "1");
})

$("#strongMan").on('click', function () {
    let html = `<div class="video text-center"> 
                    <iframe width="840" height="630"
                    src="https://www.youtube.com/embed/dR1FCJS8DoM" frameborder="0" allow="autoplay; encrypted-media">
                    </iframe>
                </div>`
    $("#attach").children().remove();
    $("#attach").append(html);
    $("#attach").css("opacity", "1");
})

$("#foodPrep").on('click', function () {
    let html = `<div class="video text-center"> 
                    <iframe width="840" height="630"
                    src="https://www.youtube.com/embed/YM14WjIJtRA" frameborder="0" allow="autoplay; encrypted-media">
                    </iframe>
                </div>`
    $("#attach").children().remove();
    $("#attach").append(html);
    $("#attach").css("opacity", "1");
})

$("#activity").on('click', function () {
    let html = `<div class="row"> 
                    <div class="col-md-12 text-center">
                        <img id="chart" src="https://i.pinimg.com/originals/37/17/42/37174213655bec8ccffa03090bfb7908.png" >
                    </div>
                </div>`
    $("#attach").children().remove();
    $("#attach").append(html);
    $("#attach").css("opacity", "1");
})

$("#guru").on('click', function () {
    let html = `<div class="row"> 
                    <div class="col-sm-6 text-center">
                        <img id="photo" src="http://fitgujjus.com/wp-content/uploads/2018/05/Yoga-Benefits.png" >
                    </div>
                    <div class="col-sm-6 text-center">
                        <img id="photo" src="https://manjilas.files.wordpress.com/2013/04/eat.jpg" >
                    </div>
                </div>
                <br>
                <div class="row"> 
                    <div class="col-sm-6 text-center">
                        <img id="photo" src="https://i.pinimg.com/originals/cf/8c/22/cf8c2226e73b9ad1e6d0ee4303501997.jpg" >
                    </div>
                    <div class="col-sm-6 text-center">
                        <img id="photo" src="https://image.slidesharecdn.com/glutenintoleranceandrheumaticdiseases-111121200903-phpapp02/95/gluten-intolerance-and-rheumatic-diseases-12-728.jpg" >
                    </div>
                </div>
                `
    $("#attach").children().remove();
    $("#attach").append(html);
    $("#attach").css("opacity", "1");
})

$("#attach").on('click', '#delete', function(){
    let id = $(this).val();
    console.log("delete id is: ", id)

    $.ajax({
        method: "DELETE",
        url:'/api/plans/' + id
    }).then(results)
    location.reload();
})
