donut = ["ORIGINAL GLAZED", "CHOCOLATE FUDGE", 
"SALTED EGGS", "CAPPUCCINO FRANCO", "SUGAR"];
price = [27, 27, 27, 27, 27];

function show() {
    for (let index = 0; index < donut.length; index++) {
        textId = "donut"+ (index + 1);
        document.getElementById(textId).value = donut[index] 
        + " , " + price[index] + " บาท";
        
    }
}
function order() {
    sumPrice = 0; 
    for (let index = 0; index < price.length; index++) {
        amountId =  "amount" + (index+1);
        
        amount = document.getElementById(amountId).value;
        
        if (amount <= 12 && amount > 0) {
            sumPrice += price[index]*amount
        }else if(amount > 12) {
            var dozen = 249
            sumPrice += (amount/12 * dozen) + (amount%12 * price[index])
            
            
        }
        else if(amount < 0) {
            alert("Amount can't be a negative number !")
            sumPrice = 0;
            break;
        }
    }
    document.getElementById("totalPrice").value = sumPrice
}        