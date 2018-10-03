let drinks = [
    { name: "Soda", price: 1.99 },
    { name: "Water", price: 1.49 },
    { name: "Beer", price: 4.99 },
    { name: "Lemonade", price: 2.99 }
];


let button = document.querySelector('#btn');
button.onclick = function () {
    let name = document.querySelector("#custname").value;
    document.querySelector("#nameresult").textContent = `Customer: ${name}`;
    let amount = document.querySelector("#quantity").value;
    let beverage = document.querySelector("#beverages").value;
    document.querySelector("#drinkresult").textContent = `${amount} ${drinks[beverage].name} @ $${drinks[beverage].price}`;
    let total = amount * drinks[beverage].price;
    document.querySelector('#totalresult').textContent = `TOTAL DUE: $${total}`;
    if (drinks[beverage] == drinks[2]) {
        let birthDate = document.querySelector("#date").value;
        let now = moment();
        let diff = now.diff(birthDate, 'years', true);
        let minAge = now.subtract(21, 'years').calendar();
        if (diff >= 21) {
            document.querySelector("#showOrder").style.display = "block";
        }
        else {
            document.querySelector("#restrictOrder").style.display = "block";
            document.querySelector("#restrict").textContent = `You must be born before ${minAge} to purchase alcohol.`;
        }
    }
    else {
        document.querySelector("#showOrder").style.display = "block";
    }
    return false;
}

let restrict = function () {
    let drink = document.querySelector('#beverages').value;
    if (drinks[drink] == drinks[2]) {
        document.querySelector("#birthform").style.display = "block";
    }
    else {
        document.querySelector("#birthform").style.display = "none";
    }
}

let bev = document.querySelector("#beverages");
bev.onchange = restrict;

window.onload = function () {
    restrict();
}