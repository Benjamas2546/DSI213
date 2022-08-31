pizza = ["Hawaiian", "Seafood", "Pepperoni", "หน้าเธอ", "น่ารัก"];
price = [299, 399, 259, 6000, 599];

function show() {
    for (let index = 0; index < pizza.length; index++) {
        textId = "pizza"+ (index + 1);
        document.getElementById(textId).value = pizza[index] 
        + " , " + price[index] + " บาท";
        
    }
}

function order() {
    sumPrice = 0; 
    for (let index = 0; index < price.length; index++) {
        amountId =  "amount" + (index+1);
        amount = document.getElementById(amountId).value;
        if (amount >= 0) {
            sumPrice += price[index]*amount
        }else{
            alert("Amount can't be a negative number !")
            sumPrice = 0;
            break;
        }
        
        
    }
    document.getElementById("totalPrice").value = sumPrice
}
