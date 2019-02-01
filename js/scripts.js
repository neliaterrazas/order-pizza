function Pizza (size, toppings, cost) {
  this.size = size;
  this.veggies = toppings;
  this.meats = meats;
  this.cost = cost;
}

// var classicCheese = new Pizza ();
// var classicPepperoni = new Pizza ();


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
