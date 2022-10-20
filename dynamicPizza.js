pizza = ["Hawaiian", "Seafood", "Seafood Deluxe", "pepperoni"];
//price = [159,299,359,299] ตาม size
size = ["small", "medium", "large", "New York"];
price = [ [0,159,259,399],
          [0,249,399,499],
          [0,349,499,599],
          [0,139,189,299]];
edge = [ "Soft", "Thin", "Cheese", "Bomb", "Sausage"];
edgePrice = [0,50,70,150,80];
picture = ["image/hawaiian.png", "image/seafood.png", "image/seafoodDeluxe.png", "image/pepperoni.png"];
var rowNumber = 0;
var pizzaTable;

function startApp(){
    document.write("Welcome to Pizza Compano");
    pizzaTable = document.createElement("table");
    pizzaTable.setAttribute("id", "orderTable")
    pizzaTable.setAttribute("border", "1");
    document.body.appendChild(pizzaTable);
    header = pizzaTable.createTHead();
    row = header.insertRow(0);
    cell = row.insertCell(0); cell.innerHTML = "Number";
    cell = row.insertCell(1); cell.innerHTML = "Pizza";
    cell = row.insertCell(2); cell.innerHTML = "Yummy";
    cell = row.insertCell(3); cell.innerHTML = "Size";
    cell = row.insertCell(4); cell.innerHTML = "Edge";
    cell = row.insertCell(5); cell.innerHTML = "Amount";
    cell = row.insertCell(6); cell.innerHTML = "Price";
    rowNumber=1;
    insertPizzaRow();
    addButton = document.createElement("input");
    addButton.setAttribute("type", "button");
    addButton.setAttribute("value", "Add more pizza!");
    addButton.setAttribute("onclick", "insertPizzaRow()");
    document.body.appendChild(addButton);

    document.body.appendChild(document.createElement("br"));
    
    inputTotal = document.createElement("input");
    inputTotal.setAttribute("type", "text");
    inputTotal.setAttribute("id", "total");
    inputTotal.setAttribute("disabled", "true");
    inputTotal.setAttribute("value", "Total");
    document.body.appendChild(inputTotal);
}

function insertPizzaRow(){
    newRow = pizzaTable.insertRow(rowNumber);
    cell = newRow.insertCell(0);
    cell.innerHTML = rowNumber;
    cell = newRow.insertCell(1);
    selectPizza = document.createElement("select");
    selectPizza.setAttribute("id", "pizzaList" + rowNumber);
    selectPizza.setAttribute("onchange",
     "showImage("+rowNumber+"); calculatePrice("+rowNumber+")");
    // <select id = "pizzaList3" onchange="showImage(3)">
      //<option value="Hawaiian">Hawaiian 299-499</option>
    //</select>
    op = document.createElement("option");
    op.setAttribute("value", "None");
    op.innerHTML = "Select Pizza";
    selectPizza.appendChild(op);
    for (let i = 0; i < pizza.length; i++) {
        op = document.createElement("option");
        op.setAttribute("value", pizza[i]);
        op.innerHTML = pizza[i] + " " + price[i][0]
        + "-" + price[i][3] + " baht";
        selectPizza.appendChild(op);
    }
    cell.appendChild(selectPizza);

    cell = newRow.insertCell(2);
    imgPizza = document.createElement("img");
    imgPizza.setAttribute("id", "pizzaImage" + rowNumber);
    imgPizza.setAttribute("src", "");
    imgPizza.setAttribute("width", "80%");
    cell.appendChild(imgPizza);

    cell = newRow.insertCell(3);
    selectSize = document.createElement("select");
    selectSize.setAttribute("id", "size" + rowNumber);
    selectSize.setAttribute("onchange", "calculatePrice("+rowNumber+")");
    for (let i = 0; i < size.length; i++) {
       op = document.createElement("option");
       op.setAttribute("value", size[i]);
       op.innerHTML = size[i];
       selectSize.appendChild(op);   
    }
    cell.appendChild(selectSize);

    cell = newRow.insertCell(4);
    selectEdge = document.createElement("select");
    selectEdge.setAttribute("id", "edge" + rowNumber);
    selectEdge.setAttribute("onchange", "calculatePrice("+rowNumber+")");
   for (let i = 0; i < edge.length; i++) {
       op = document.createElement("option");
       op.setAttribute("value", edge[i]);
       op.innerHTML = edge[i];
       selectEdge.appendChild(op);
   }
   cell.appendChild(selectEdge);

   cell = newRow.insertCell(5);
   inputAmount = document.createElement("input");
   inputAmount.setAttribute("type", "number");
   inputAmount.setAttribute("id", "amount" + rowNumber);
   inputAmount.setAttribute("min", "1");
   inputAmount.setAttribute("max", "10");
   inputAmount.setAttribute("onchange", "calculatePrice("+rowNumber+")");
   cell.appendChild(inputAmount);

   cell = newRow.insertCell(6);
   inputPrice = document.createElement("input");
   inputPrice.setAttribute("type", "number");
   inputPrice.setAttribute("id", "price" + rowNumber);
   inputPrice.setAttribute("disabled", "true");
   cell.appendChild(inputPrice);

   rowNumber++;

}

function showImage(row){
    userChoice = pizzaSelected(row);
    document.getElementById("pizzaImage"+ row).src = picture[userChoice];

}

function pizzaSelected(row){
    var pizzaChoice = document.getElementById("pizzaList" + row);
    var pizzaOptionIndex = pizzaChoice.selectedIndex - 1;
    return pizzaOptionIndex;
}
function sizeSelected(row){
    var sizeChoice = document.getElementById("size" + row);
    var sizeOptionIndex = sizeChoice.selectedIndex;
    return sizeOptionIndex;
}
function edgeSelected(row){
    var edgeChoice = document.getElementById("edge" + row);
    var edgeOptionIndex = edgeChoice.selectedIndex;
    return edgeOptionIndex;
}
function calculatePrice(row){
    var userPizzaChoice = pizzaSelected(row);
    var userAmount = document.getElementById("amount"+ row).value;
    var userSizeChoice = sizeSelected(row);
    var userEdgeChoice = edgeSelected(row);
    
    var pizzaPrice = (price[userPizzaChoice][userSizeChoice]
        +edgePrice[userEdgeChoice] * userAmount);
    document.getElementById("price" + row).value = pizzaPrice;

    var total = 0;
    for (let index = 1; index < rowNumber; index++) {
        total += parseInt(document.getElementById("price"+index).value); 
    }
    document.getElementById("total").value = "total Price is " + total
}