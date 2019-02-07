//Pizza Order
// function PizzaOrder () {
//   this.pie = pie;
//   this. = 0
// }

// PizzaOrder.prototype.newPie = function(pies) {
//   pie.id = this.assignId();
//   this.pie.push(pies);
// }


// PizzaOrder.prototype.assignId = function () {
//   this.currentId += 1;
//   return this.currentId;
// }

function Pizza (name, size, veggies, meats, cost) {
  this.name = name,
  this.size = size,
  this.veggies = veggies,
  this.meats = meats,
  this.cost = 0
}

Pizza.prototype.addTotal = function () {
  var price = 0
  if(this.size ==="medium") {
    price += 10;
  }else if(this.size ==="large") {
    price += 15;
  }else if(this.size ==="xl") {
    price += 20;
    console.log(price);
  }
  for(var i = 0; i < this.veggies.length; i++) {
    price += 0.5;
  }
  for(var i = 0; i < this.meats.length; i++) {
    price += 1;
    console.log(price);
  }
  return this.cost;
  console.log(price);
}

Pizza.prototype.yourOrder = function () {
  return this.size + " " + this.veggies + " " + this.meats + " " + this.cost;
  console.log(yourOrder);
}

// function displayPizza(PizzaOrderComplete) {
//   var yourOrderIsReady = $("#results");
// var htmlForYou = " ";
// PizzaOrderComplete.pie.forEach(function(Pizza) {
//   htmlForYou +=  "<li "
// }

function newPizza(name, size, veggies, meats, cost) {
  var pizza = new Pizza(name, size, veggies, meats, cost);
  return newPizza;


$(document).ready(function() {

  $("form#formOne").submit(function(event) {
    event.preventDefault();
    var name = $("input#name").val();
    var size = $("input#size").val();
    var veggies = $("input#veggies").val();
    var meats = $("input#meats").val();
    var yourPizza = newPizza(name, size, veggies, meats); //not a function because we have already defined?
    pizza.cost(price);
    yourPizza(newPizza);
  });

  $("#pizzaReady").text(yourOrder(yourPizza));
  });
};
