function play() {
    computerChoose = Math.floor((Math.random()*3)+1);
    userChoose = document.getElementById("userChoice").value;
    if(userChoose == 0 ){
        document.getElementById("display").innerHTML = 
        "Sorry! Computer Won. You can try again.";
    }else{
        userPoints = document.getElementById("userScore").value;
        computerPoints = document.getElementById("computerScore").value;
        winnerRound="";
        //user wins
        if ( (userChoose == 1 && computerChoose == 3)
        || (userChoose == 2 && computerChoose == 1)
        || (userChoose == 3 && computerChoose == 2)){
            userPoints++;
            message = "Yeah, you are good.";
            winnerRound = "user";
        }
        //computer wins
        else if( (computerChoose == 1 && userChoose == 3)
                 ||(computerChoose ==2 && userChoose==1 )
                 ||(computerChoose ==3 && userChoose==2) ){
                    computerPoints++;
                    message = "This turn is for computer.";
                    winnerRound = "computer";
        }else{
            message ="Tie Play. Let do it again.";
        }
        if (winnerRound == "user"){
            document.getElementById("userScore").value = userPoints;
        }else if(winnerRound == "computer"){
            document.getElementById("computerScore").value=computerPoints;
        }
        if( userPoints >= 3 ){
            message += "Congratulation you won!"; stop();
        }else if (computerPoints >=3){
            message += " Sorry, you lose :( Let try again."; stop();
        }
        document.getElementById("display").innerHTML = message;
        if(computerChoose == 1) {imageFile = "rock.png";}
        else if (computerChoose == 2) {imageFile = "paper.png";}
        else if (computerChoose == 3) {imageFile = "scissor.jpg";}
        document.getElementById("computerPlay").src = imageFile;

        if(userChoose == 1 ) {imageFile ="rock.png";}
        else if (userChoose == 2) {imageFile = "paper.png";}
        else if (userChoose == 3) {imageFile = "scissor.jpg";}
        document.getElementById("userPlay").src = imageFile;}
    }
