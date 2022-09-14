pizza = ["Hawaiian", "Ham", "Seafood", "Pepperoni", "DoubleCheese"];
size =  ["small", "medium", "large", "New York" ];
price = [ [199,239,299,359],
          [219,259,339,399],
          [399,439,499,599],
          [  0,259,299,339],
          [199,239,259,299]];
picture = ["image/hawaiian.png","image/ham.png","image/seafood.png",
           "image/pepperoni.png","image/doublecheese.png"]
function showImage() {
   
    userChoice = pizzaSelected();
    document.getElementById("pizzaImage").src = picture[userChoice];
}

function pizzaSelected() {
    pizzaChosen = document.getElementById("pizzaList");
    var chosenPizzaIndex = pizzaChosen.selectedIndex - 1; //ลบ1 เพื่อให้ใน cosole ตรงกับ array ซึ่งเริ่มจาก 0
    //console.log(chosenPizzaIndex);
    return chosenPizzaIndex;
}

function sizeSelected() {
    sizeChosen = document.getElementById("size");
    var chosenSizeIndex = sizeChosen.selectedIndex;
    return chosenSizeIndex;
}

function calculatePrice() {
    pizza = pizzaSelected();
    pie = document.getElementById("amount").value;
    size = sizeSelected();
    totalPrice = price[pizza][size] * pie;
    document.getElementById("price").value = totalPrice
}