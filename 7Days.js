day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var color = [];
color[0] = "red"; color[1]="yellow"; color[2]="pink"; color[3]="green"; 
color[4]="orange"; color[5]="blue"; color[6]="purple";


function start() {
    randomDayIndex = Math.floor(Math.random()*7);
    randomDay = day[randomDayIndex];
    document.getElementById("day").value = randomDay;
}   

function check() {
    dayQuestion = document.getElementById("day").value;
    userAnswer = document.getElementById("color").value;
    userAnswer = userAnswer.toLowerCase();
    for (let index = 0; index < day.length; index++) {
        if (day[index] == dayQuestion){ //search for index of the day
            colorAnswer = color[index];
            if( userAnswer == colorAnswer){
                document.getElementById("message").innerHTML = "It is correct!"
            }else{
                document.getElementById("message").innerHTML = "It is wrong."
                + "The correct answer of " + day[index]+ " is "
                + color[index]+ "."

            }
        }
        
    }
}