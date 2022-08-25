class drinkMenu {
    constructor(name) {
        this.name = name
        this.drinks = [];

    }
}

class drink {
    constructor(name,ingredients) {
        this.name = name;
        this.ingredients = ingredients;
    }
}

class menuService {
    static url = api_url;

    static getMenu () {

        return $.get(this.url);
    }

    static searchList () {

        return $.get(this.url + `${input}`);
    }
 
    static getDrink () {

        return $.get(this.url)

    }

    static createDrink () {

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
        var drink_url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
        tag = name.replaceAll(" ","_").toLowerCase();
        drink_url = drink_url += name;
        element = `<a href="#" onclick="sayHi(${tag})">${name}</a>`
        console.log(element);
        $("ul").append($("<li>").html(element));
    }
}

function sayHi (string) {
    console.log(string);
}

$("button").on("click", function () {

    $("ul").empty();
    api_url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=";
    ingredient = $("#ingredient-name");
    api_url = api_url += ingredient.val();
    populateList ();

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









 