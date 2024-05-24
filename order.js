function updateTotal() {
    var foodSelect = document.getElementById("food");
    var quantityInput = document.getElementById("quantity");
    var totalInput = document.getElementById("total");
    var totalPrice = 0;
    var foodPrices =
    {
    "Burger": 53,
    "Dosa": 50,
    "Sandwich": 47,
    "Pizza" : 77,
    "Manchurian" : 64,
    "Momos" : 70
    };
  
    var selectedFood = foodSelect.value;
    var quantity = quantityInput.value;
  
    totalPrice = foodPrices[selectedFood] * quantity;
  
    totalInput.value = totalPrice.toFixed(2); 
  }
   updateTotal();
  
   let sub_mit = document.getElementById("sub_mit");
   sub_mit.addEventListener("click",function(){
    alert("Order Placed Successsfully !");
   })