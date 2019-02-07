function Pizza (size, veggies, meats, cost) {
  this.size = size;
  this.veggies = veggies;
  this.meats = meats;
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
  }
  this.cost = price;
};

function newPizza(size, veggies, meats, cost) {
  var newPizza = new Pizza(name, size, veggies, meats, cost);
  return newPizza;

}
  $(document).ready(function() {

    $("#submitPizza").submit(function(event){

      $("#orderForm").hide();
      $("#results").show();

    $("form#formOne").submit(function(event) {
      event.preventDefault();

        var size = $("input#size").val();
        var veggies = $("input#veggies").val();
        var meats = $("input#meats").val();
        var yourOrder = newPizza(name, size, veggies, meats);

        yourOrder.addTotal(size, veggies, meats);

      });


        $("#pizzaTotal").text(yourOrder.cost);

        $("#pizzaReady").text(newPizza(yourOrder));

    });

});
