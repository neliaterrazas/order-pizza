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

function Pizza (size, veggies, meats, cost) {
  this.size = size,
  this.veggies = veggies,
  this.meats = meats,
  this.cost = 0
}

Pizza.prototype.total = function () {
  if(this.size ==="medium") {
    this.cost += 10;
  }else if(this.size ==="large") {
    this.cost += 15;
  }else if(this.size ==="xl") {
    this.cost += 20;
    console.log(this.cost);
  }
  for(var i = 0; i < this.veggies.length; i++) {
    this.cost += 0.5;
  }
  for(var i = 0; i < this.meats.length; i++) {
    this.cost += 1;
    console.log(this.cost);
  }
  return this.cost;
  console.log(this.cost);
}

Pizza.prototype.yourOrder = function () {
  return this.size + " " + this.veggies + " " + this.meats + " " + this.cost;
  console.log(yourOrder);
}

function newPizza(size, veggies, meats, cost) {
  var pizza = new Pizza(size, veggies, meats, cost);
  return newPizza;
}

// function displayPizza(PizzaOrderComplete) {
//   var yourOrderIsReady = $("#results");
  // var htmlForYou = " ";
  // PizzaOrderComplete.pie.forEach(function(Pizza) {
  //   htmlForYou +=  "<li "
}

$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    $("#orderForm").hide();
    $("#results").show();


  var name = $("input#name").val();
  var size = $("input#size").val();
  var veggies = $("input#veggies").val();
  var meats = $("input#meats").val();
  var yourPizza = newPizza(name, size, veggies, meats); //not a function because we have already defined?
  pizza.newPizza(yourPizza);
  yourPizza(total);




  $("#results").show();

  });
});
