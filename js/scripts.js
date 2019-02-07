function Pizza (name, size, veggies, meats, cost) {
  this.name = name,
  this.size = size,
  this.veggies = veggies,
  this.meats = meats,
  this.cost = 0
}

Pizza.prototype.addTotal = function () {
  var price = 0;
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
  return this.cost = price;
  console.log(this);
}

function newPizza(name, size, veggies, meats, cost) {
  var pizza = new Pizza(name, size, veggies, meats, cost);
  return newPizza;


$(document).ready(function() {
  pizza

  $("form#formOne").submit(function(event) {
    event.preventDefault();
    var name = $("input#name").val();
    var size = $("input#size").val();
    var veggies = $("input#veggies").val();
    var meats = $("input#meats").val();
    var yourOrder = newPizza(name, size, veggies, meats); 
    pizza.cost(price);
    yourPizza(newPizza);
  });

  new Pizza = function () {
    return this.size + " " + this.veggies + " " + this.meats + " " + this.cost;
    console.log(yourOrder);
  }

  $("#pizzaReady").text(yourOrder(yourPizza));
  });

};
