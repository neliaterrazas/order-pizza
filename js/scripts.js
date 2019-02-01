function Pizza (size, veggies, meats, cost) {
  this.size = size;
  this.veggies = toppings;
  this.meats = meats;
  this.cost = cost;
}

// var classicCheese = new Pizza ();
// var classicPepperoni = new Pizza ();
Pizza.prototype.total = function () {
  if(this.size ==="medium") {
    this.cost = 10;
  }else if(this.size ==="large") {
    this.cost = 15;
  }else {
    this.cost = 20;
  }
  
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
