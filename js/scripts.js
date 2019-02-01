function PizzaOrder () {
  this.pie = [],
  this.details = 0
}

PizzaOrder.prototype.newPie = function(pies) {
  pie.details = this.assignDetails();
  this.pie.push(pies);
}

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
}

Pizza.prototype.yourOrder = function () {
  return this.size + " " + this.veggies + " " + this.meats + " " + this.cost;
}


var pizzaOrder = new PizzaOrder();

$(document).ready(function() {
  $("form#formOne").submit(function(event) {
  event.preventDefault();
  var name = $("input#name").val();
  var size = $("input#size").val();
  var veggies = $("input#veggies").val();
  var meats = $("input#meats").val();
  var newPizza = newPizza(name, size, veggies, meats);


  $("#results").show();

  });
});
