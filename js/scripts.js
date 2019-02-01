function Pizza (size, veggies, meats, cost) {
  this.size = size;
  this.veggies = toppings;
  this.meats = meats;
  this.cost = [];
}


Pizza.prototype.total = function () {
  if(this.size ==="medium") {
    this.cost = 10;
  }else if(this.size ==="large") {
    this.cost = 15;
  }else(this.size ==="xl") {
    this.cost = 20;
  }
  for(var i = 0; i < this.veggies.length; i++) {
    this.cost += 0.5;
  }
  for(var i = 0; i < this.meats.length; i++) {
    this.cost += 1;
  }
  return this.cost;
}


$(document).ready(function() {

  $("form#formOne").submit(function(event) {

  event.preventDefault();

  var name = $("#name").val();
  var size = $("#size").val();
  var veggies = $("#veggies").val();
  var carnes = $("#carnes").val();

  $("#results").show();

}
  });
});
