function Pizza (size, veggies, meats) {
  this.size = size;
  this.veggies = veggies;
  this.meats = meats;
  this.cost = 0
}
Pizza.prototype.addTotal = function (cost) {

  var price = 0;
  if(this.size ==="medium") {
    price += 10;
  }else if(this.size ==="large") {
    price += 15;
  }else if(this.size ==="xl") {
    price += 20;
    console.log(this.size);
  }

  this.cost = price;
}

function newPizza(size, veggies, meats) {
  var newPizza = new Pizza(size, veggies, meats);
  return newPizza;

}
  $(document).ready(function() {

    $("form#formOne").submit(function(event) {

      $("#orderForm").hide();
      $("#results").show();

      event.preventDefault();

        var size = $("#size").val();
        var veggies = $("#veggies").val();
        var meats = $("#meats").val();
        var yourOrder = newPizza(size, veggies, meats);

        yourOrder.addTotal();


        console.log(yourOrder.cost)
        $("#pizzaTotal").text(yourOrder.cost);

        console.log(yourOrder.cost);


      });
    });
