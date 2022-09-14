function gen() {
    message = "";
    amount = document.getElementById("line").value;
    for (let i = 1; i <= amount; i++) { //กรอบนอก
        for (let j = 1; j <= i; j++) {// กรอบใน
            message += "X";
        }
        message += "<br>"
    }
    document.getElementById("display").innerHTML = message;
}
    
