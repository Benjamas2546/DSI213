function greeting() {
    var userName = document.getElementById("name").value;
    randomquestion = Math.floor((Math.random() * 3) + 1);
    randomgreet = Math.floor((Math.random() * 4) + 1);
    question = "";
    if (randomgreet == 1) {
        if (randomquestion == 1){
            question = "How are you?"
        }else if (randomquestion == 2){
            question = "What are you doing?"
        }else if (randomquestion == 3){
            question = "What name is your father?"
        }

        document.getElementById("display").innerHTML =
            "Hello " + userName + question;
    } else if (randomgreet == 2) {
        if (randomquestion == 1){
            question = "How are you?"
        }else if (randomquestion == 2){
            question = "What are you doing?"
        }else if (randomquestion == 3){
            question = "What name is your father?"
        }
        document.getElementById("display").innerHTML =
            "Good Morning " + userName + question;
    } else if (randomgreet == 3) {
        if (randomquestion == 1){
            question = " How are you?"
        }else if (randomquestion == 2){
            question = " What are you doing?"
        }else if (randomquestion == 3){
            question = " What name is your father?"
        }
        document.getElementById("display").innerHTML =
            "Good Afternoon " + userName + question;
    } else if (randomgreet == 4) {
        if (randomquestion == 1){
            question = "How are you?"
        }else if (randomquestion == 2){
            question = "What are you doing?"
        }else if (randomquestion == 3){
            question = "What name is your father?"
        }
        document.getElementById("display").innerHTML =
            "Good Evening " + userName +"." + question;
    }
}