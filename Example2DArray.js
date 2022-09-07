function run() {
    //[product, amount, price, total price, tax type, price + tax]
    order = [["Shirt",   5,  100,    , 1,],
             ["Pant",    2,  400,    , 1,],
             ["Belt",    1,  40,     , 2,],
             ["Ring",    1,  200000, , 3,],
             ["Glasses", 1,  1000,   , 2,]];
    //document.getElementById("showValue").innerHTML = order[3][2];
    //document.getElementById("showValue").innerHTML = order.length; 
    // The number of rows
    //document.getElementById("showValue").innerHTML = order[2].length; 
    //The number of column
    //Total Price before tax
    var message = printArray(order);
    sumBeforeTax = 0;
    for (let orderAti = 0; orderAti < order.length; orderAti++) {
        price = order[orderAti][2] * order[orderAti][1]; //price_per_piece * amount
        order[orderAti][3] = price;
        sumBeforeTax += price;
    }
    message += "<br> Total price before Tax is  " + sumBeforeTax + ". <br>";
    message += printArray(order);
    // PriceAfter Tax 
    sumAfterTax = 0;
    for (let row = 0; row < order.length; row++) {
        if (order[row][4] == 1) { //7% tax
            taxRate = 0.07;
        } else if (order[row][4] == 2) { //10% tax
            taxRate = 0.10;
        } else { //others 20% tax;
            taxRate = 0.20;
        }
        tax = order[row][3] * taxRate
        priceAfterTax = order[row][3] + tax;
        order[row][5] = priceAfterTax;
        sumAfterTax += priceAfterTax;
    }
    message += "<br> Total Price after Tax is " + sumAfterTax + ". <br>";
    message += printArray(order);
    document.getElementById("showValue").innerHTML = message; //ANS ได้ราคารวมทั้งหมดของทั้ง 5อย่าง
}

function printArray(a) {
    text = "";
    for (let i = 0; i < a.length; i++) { //วิ่งทุก Row (i คือ row) row ที่ i
        text += "[";
        for (let j = 0; j < a[i].length; j++) { //วิ่งทุก Column (j คือ column) Column ที่ i
            text += a[i][j] + ","
        }
        text += "]<br>";

    }
    return text;
}