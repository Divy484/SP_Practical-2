let vegetables = [
{name : "Tomato",quantity : 1000,price : 160},
{name : "Potato",quantity :  500,price : 20},
{name : "Onion",quantity : 250,price : 40}
];

function listVegetables(veg){
    const vegt = [];
    for (let i = 0; i<vegetables.length; i++){
        vegt.push(vegetables[i].name);
    }
    return vegt;
}
console.log(`Vegetables Name : ${listVegetables(vegetables)}`);

function totalPrice(veg) {
    let total = 0;
    for (let j = 0; j<vegetables.length; j++) {
        total += vegetables[j].quantity * vegetables[j].price;
    }
    return total;
}
console.log(`Total Price of all vegetables : ${totalPrice(vegetables)}`);