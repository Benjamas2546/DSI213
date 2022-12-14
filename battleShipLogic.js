var board = [ [9,9,9,9,9,9,9,9,9,9,9,],
              [9,0,0,0,0,0,0,0,0,0,0,],
              [9,0,0,0,0,0,0,0,0,0,0,],
              [9,0,0,0,0,0,0,0,0,0,0,],
              [9,0,0,0,0,0,0,0,0,0,0,],
              [9,0,0,0,0,0,0,0,0,0,0,],
              [9,0,0,0,0,0,0,0,0,0,0,],
              [9,0,0,0,0,0,0,0,0,0,0,],
              [9,0,0,0,0,0,0,0,0,0,0,],
              [9,0,0,0,0,0,0,0,0,0,0,],
              [9,0,0,0,0,0,0,0,0,0,0,] ]; //9คือนอกบอร์ด, 0=น้ำทะเล
var correctShot = 0;
var wrongShot = 0;

function gameStart() {
    var userTable = document.getElementById('boardTable');
    for (let row = 1; row <=10; row++) {
        for (let column = 1; column <= 10;  column++) {
            userTable.rows[row].cells[column].style.backgroundColor="#4BBCCA";
            userTable.rows[row].cells[column].innerHTML = "";
            board[row][column] = 0;
            
        }
        
    }

    SHIP = 3;
    SHIPLENGTH = 4;
    for (let i = 0; i < SHIP; i++) {
        var shipRowPosition = Math.floor(Math.random()*7)+1; //random between 1-7
        var shipColumnPosition = Math.floor(Math.random()*7)+1;
        var HoriOrVerti = Math.floor(Math.random()*2); //Between 0-1.
        for (let length = 0; length < SHIPLENGTH; length++) {
            if(HoriOrVerti == 0){
                board[shipRowPosition][shipColumnPosition + length] = 1;
            }else{
                board[shipRowPosition + length][shipColumnPosition] = 1;
            }
            
        }
        
    }

}
function showAllShips() {
    userTable = document.getElementById("boardTable");
    for (let row = 1; row <= 10; row++) {
        for (let column = 1; column <= 10; column++) {
            if (board[row][column] != 0){
                userTable.rows[row].cells[column].innerHTML = board[row][column];
            }
            
        }
        
    }
}

function shotRocket(){
    message = "";
    var userRow = document.getElementById("rowChosen").value;
    var userColumn = document.getElementById("columnChosen").value;
    userTable = document.getElementById("boardTable");
    if (board[userRow][userColumn] == 1){
        message += "HIT !!! ";
        userTable.rows[userRow].cells[userColumn].innerHTML = 1;
        userTable.rows[userRow].cells[userColumn].style.backgroundColor = "pink";
        correctShot++;
        message += correctShot + " shots are correct. "+ wrongShot+ " shots are wrong."
    }else{
        message += "Miss !";
        userTable.rows[userRow].cells[userColumn].innerHTML = -1;
        userTable.rows[userRow].cells[userColumn].style.backgroundColor = "red";
        wrongShot++;
        message += correctShot + " shots are correct."+ wrongShot+ " shots are wrong."

    }
    document.getElementById("display").innerHTML = message;
}

