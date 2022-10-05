var choice;
var questions = [
    [1+ ".", " What does DOM stand for?",2,"Document Object Model"],
    [2+ ".", " What attribute is used to choose image",3,"src"],
    [3+ ".", " Is table an element in HTML",1,"true"],
    [4+ ".", " BODY Element is the root of HTML document.",1,"false"],
    [5+ ".", " IF statement provides iteration for programmer when executing",1,"false"],  
    [6+ ".", " JavaScript is case-_____.",2,"sensitive"],  
    [7+ ".", " We can get value of local variable anywhere in the program",1,"false"],  
    [8+ ".", " What function is used to get element by id?",2,"getElementById"],  
    [9+ ".", " <td> element is a child of <table> element.",1,"false"],  
    [10+ ".", " JavaScript is an object-oriented language.",1,"true"],           
                              ];
function init() {
    choice = document.getElementById("amountOfQuestions"); //choice = select element
    choice.name = "amount";
    var opt=[];
    opt[0] = document.createElement("option");
    opt[0].text = "Select an option"
    opt[0].value = 0;
    choice.add(opt[0]);
    for (let index = 1; index <= 10; index++) {
        opt[index]  = document.createElement("option");
        opt[index].text = (index) +
                    (index == 0? " question": " qustions"); //if
        opt[index].value = index;
        choice.add(opt[index]);
    }
    choice.setAttribute("onchange", "genRows()") //เมื่อคลิก onchange มันจะไปเรียกใช้ genRows()
}

function  genRows() {
    var questionAmounts = choice.value;
    var problemTable = document.getElementById("questionTable");
    problemTable.border= 3 ;
    for (let index = problemTable.rows.length-1; index >=0; index--) { //ลบจากrowล่างขึ้นบน
        problemTable.deleteRow(index);
    }

    headerRow = problemTable.insertRow(0);
    col = headerRow.insertCell(0); col.innerHTML="Question Number";
    col = headerRow.insertCell(1); col.innerHTML="Question";
    col = headerRow.insertCell(2); col.innerHTML="Score";
    col = headerRow.insertCell(3); col.innerHTML="Answer";

    for (let index = 1; index <= questionAmounts; index++) {
        headerRow = problemTable.insertRow(index);
    col = headerRow.insertCell(0); col.innerHTML= questions[index-1][0]; //คำถามข้อ 1 = indexที่ 0
    col = headerRow.insertCell(1); col.innerHTML= questions[index-1][1];
    col = headerRow.insertCell(2); col.innerHTML= questions[index-1][2];
    col = headerRow.insertCell(3);
    if(questions[index-1][3]=="true" || questions[index-1][3] == "false"){
        sel = document.createElement("select");
        opt = document.createElement("option");
        opt.innerHTML  = "True"; //จะเป็น .text ก็ได้เหมือนกัน
        opt.setAttribute("value", "true");
        sel.appendChild(opt);
        opt = document.createElement("option");
        opt.innerHTML  = "False"; //จะเป็น .text ก็ได้เหมือนกัน
        opt.setAttribute("value", "false");
        sel.appendChild(opt);
        sel.setAttribute("id", "answer" + questions[index-1][0])
        col.appendChild(sel);//ลากเส้นเชื่อมให้มันเป็นลูกของ select 
        }else{
            inputTxt = document.createElement("input");
            inputTxt.setAttribute("type", "text");
            inputTxt.setAttribute("id", "answer" + questions[index-1][0]);
            col.appendChild(inputTxt);
        }
    }
    submitButton= document.createElement("input");
    submitButton.setAttribute("type","button");
    submitButton.setAttribute("value", "Submit answer for your scores");
    submitButton.setAttribute("onclick", "calculateScore()");
    while (document.getElementById("showScore").hasChildNodes()){
        document.getElementById("showScore").removeChild(
            document.getElementById("showScore").lastChild
            );
    }
    document.getElementById("showScore").appendChild(submitButton);
}

function calculateScore() {
    var problemTable = document.getElementById("questionTable");
    var fullScore = 0, userScore = 0;
    for (let index = 1; index < problemTable.rows.length; index++) {
        userAnswer = problemTable.rows[index].cells[3].firstChild.value;
        if(userAnswer == questions[index-1][3]){
            userScore += questions[index-1][2];
        }
        fullScore += questions[index-1][2]
    }
    result = document.createElement("input");
    result.setAttribute("type","text");
    result.setAttribute("disabled","");
    result.setAttribute("value", "Your score is " + userScore 
                       + "/" + fullScore);
    while (document.getElementById("showScore").childElementCount > 1 ){
        document.getElementById("showScore").removeChild(
            document.getElementById("showScore").lastChild
            );
    }
    document.getElementById("showScore").appendChild(result);
    
}