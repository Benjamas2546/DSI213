function gen() {
    message = "";
    amount = document.getElementById("line").value; //อยากให้มีกี่บรรทัด
    for (let i = 1; i <= amount; i++) { 
        for (let space = 1; space <= amount-i ; space++) {
            message += "&nbsp;&nbsp";
        }
        for (let j = 1; j <= 2*i-1; j++) {
            message += "x";
        }
        message += "<br>" //add <br> after filling all x of each line
    }
    document.getElementById("display").innerHTML = message;
}
    
