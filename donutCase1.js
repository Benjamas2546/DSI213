donut = ["ORIGINAL GLAZED", "CHOCOLATE FUDGE", 
"SALTED EGGS", "CAPPUCCINO FRANCO", "SUGAR"];
price = [29, 29, 29, 29, 29];

function show() {
    for (let index = 0; index < donut.length; index++) {
        textId = "donut"+ (index + 1);
        document.getElementById(textId).value = donut[index] 
        + " , " + price[index] + " บาท";
        
    }
}
function order() {
    sumPrice = 0; 
    amount1 = document.getElementById("amount1").value;
    amount2 = document.getElementById("amount2").value;
    amount3 = document.getElementById("amount3").value;
    amount4 = document.getElementById("amount4").value;
    amount5 = document.getElementById("amount5").value;
    amount = parseInt(amount1)+parseInt(amount2)+parseInt(amount3)+parseInt(amount4)+parseInt(amount5);
    for (let index = 0; index < price.length; index++) {
        if (amount < 12 && amount > 0 ) {
            sumPrice += price[index]*amount; 
            break;
        }
        else if (amount >= 12){
            sumPrice += (amount/12 * 249) + (amount%12 * price[index])
            break;
        } 
        else if (amount < 0){
            alert("Amount cannot be a negative number!")
            sumPrice = 0;
            break;
        }
    }
    document.getElementById("totalPrice").value = sumPrice
}        