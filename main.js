class drinkMenu {
    constructor(name) {
        this.name = name
        this.drinks = [];

    }
}

class drink {
    constructor(name) {
        this.name = name;
        this.ingmeas = [];
        this.instructions = instructions;
    }
}

class menuService {
    static url = api_url;

    static getMenu () {

        return $.get(this.url);
    } 
    
    static searchMenu () {

    }
 
    static getDrink () {

        return $.get(this.url)

    }

    static makeDrink () {

    }

    static updateDrink () {

    }
}

var api_url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=";

async function populateList () {
    const response = await fetch(api_url);
    const array = await response.json();
    const data = array.drinks;
    for (var i = 0; i < data.length; i++) {
        var name = data[i].strDrink;
        var tag = data[i].idDrink;
        element = `<a data-toggle=".modal" data-target="#resultModal" onclick="drinkDetails(${tag})">${name}</a>`
        $("#searching").append($("<li class='tester'>").html(element));
    }
}

async function drinkDetails (ident) {
    drink_url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + ident;
    const response = await fetch(drink_url);
    const array = await response.json();
    const data = array.drinks[0];
    console.log(data.strDrink);
    $(".modal-header").html(data.strDrink);
    stuff (data);
    $(".drink-instructions").html(data.strInstructions);
    $("#resultModal").modal("show");
    $(".btn-primary").on("click", function() {
        $("#resultModal").modal("hide");
        createDrink(data);
    })
}

function stuff (drink) {
    $("#modal-list").empty();
    if (drink.strIngredient1 !== null) {
        $("#modal-list").append($("<li class='ing'>").html(`${drink.strIngredient1}&nbsp&nbsp(${drink.strMeasure1})`));
    }
    if (drink.strIngredient2 !== null) {
        $("#modal-list").append($("<li>").html(`${drink.strIngredient2}&nbsp&nbsp(${drink.strMeasure2})`));
    }
    if (drink.strIngredient3 !== null) {
        $("#modal-list").append($("<li>").html(`${drink.strIngredient3}&nbsp&nbsp(${drink.strMeasure3})`));
    }
    if (drink.strIngredient4 !== null) {
        $("#modal-list").append($("<li>").html(`${drink.strIngredient4}&nbsp&nbsp(${drink.strMeasure4})`));
    }
    if (drink.strIngredient5 !== null) {
        $("#modal-list").append($("<li>").html(`${drink.strIngredient5}&nbsp&nbsp(${drink.strMeasure5})`));
    }
    if (drink.strIngredient6 !== null) {
        $("#modal-list").append($("<li>").html(`${drink.strIngredient6}&nbsp&nbsp(${drink.strMeasure6})`));
    }
    if (drink.strIngredient7 !== null) {
        $("#modal-list").append($("<li>").html(`${drink.strIngredient7}&nbsp&nbsp(${drink.strMeasure7})`));
    }
    if (drink.strIngredient8 !== null) {
        $("#modal-list").append($("<li>").html(`${drink.strIngredient8}&nbsp&nbsp(${drink.strMeasure8})`));
    }
    if (drink.strIngredient9 !== null) {
        $("#modal-list").append($("<li>").html(`${drink.strIngredient9}&nbsp&nbsp(${drink.strMeasure9})`));
    }
    if (drink.strIngredient10 !== null) {
        $("#modal-list").append($("<li>").html(`${drink.strIngredient10}&nbsp&nbsp(${drink.strMeasure10})`));
    }
    if (drink.strIngredient11 !== null) {
        $("#modal-list").append($("<li>").html(`${drink.strIngredient11}&nbsp&nbsp(${drink.strMeasure11})`));
    }
    if (drink.strIngredient12 !== null) {
        $("#modal-list").append($("<li>").html(`${drink.strIngredient12}&nbsp&nbsp(${drink.strMeasure12})`));
    }
    if (drink.strIngredient13 !== null) {
        $("#modal-list").append($("<li>").html(`${drink.strIngredient13}&nbsp&nbsp(${drink.strMeasure13})`));
    }
    if (drink.strIngredient14 !== null) {
        $("#modal-list").append($("<li>").html(`${drink.strIngredient14}&nbsp&nbsp(${drink.strMeasure14})`));
    }
    if (drink.strIngredient15 !== null) {
        $("#modal-list").append($("<li>").html(`${drink.strIngredient15}&nbsp&nbsp(${drink.strMeasure15})`));
    }
}

function createDrink (data) {
    $("#app").prepend (
        `
        <div id="${data.strDrink}" class="card">
            <div class="cardDet">
                <h4>${$(".modal-header").html()}<h4>
            </div>
            <div class="card-body">
                ${$("#modal-list").html()}<br>
                ${data.strInstructions};
            </div>
            <button id="updator2" class="btn btn-info disabled">Update</button>
            <button id="deletor2" class="btn btn-danger">Delete</button>
        </div>`
    ) 
    $(".btn-danger").on("click",function () {
        this.parentNode.remove();
    });
    $("#app").pop();
}

$("#find-drink").on("click", function () {
    api_url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=";
    $("#searching").empty();
    ingredient = $("#ingredient-name");
    api_url = api_url += ingredient.val();
    populateList ();
});

$("#create-drink").on("click", function () {
    $("#putDrinkName").val(" ");
    $("#putDrinkIngredients").val(" ");
    $("#putDrinkInstructions").val(" ");
    $("#createModal").modal("show");
    $("#submitter").on("click", function () {
        $("#createModal").modal("hide");
        $("#app").prepend (
            `<div id="${$("#putDrinkName").val()}" class="card">
                <div class="cardDet">
                    <h4>${$("#putDrinkName").val()}<h4>
                </div>
                <div class="card-body">
                    <div id="ing">${$("#putDrinkIngredients").val()}</div><br>
                    <div id="ins">${$("#putDrinkInstructions").val()}</div>
                </div>
                <button id="updator" class="btn btn-info">Update</button>
                <button id="deletor" class="btn btn-danger">Delete</button>
            </div>`
        );
        $(".btn-info").on("click",function () {
            $("#putDrinkName").val (this.parentNode.id);
            $("#putDrinkIngredients").val($("#ing").text());
            $("#putDrinkInstructions").val ($("#ins").text());
            $("#createModal").modal("show");
            this.parentNode.remove();
        })

        $(".btn-danger").on("click",function () {
            this.parentNode.remove();
        });
    
        $("#app").pop();
    })
});




//console.log(data[1].strDrink);   api_url = api_url += ingredient.val();

/*let choice = ${};
const getDrink = async (letter) => {
    let drinkMenu = [];
    console.log(letter);
    console.log(`${letter}`)
    const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=`${letter}`")
    let data = await response.json()
    data = Object.values(data);
    drinkMenu = [data];
    console.log(data);
}  

const api_url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"*/