function init(){
    var nameList = ["palmmy", "Gun", "Gaew", "Fern", "Chabar", "Aom"];
    picList =  ["image/palm.png", "image/gun.png", "image/gaew.png",
                   "image/fern.png", "image/chabar.png", "image/aom.png",]
    distributeFriend(nameList);
}

function distributeFriend(names) {
    docBody = document.getElementById("myBody");
    for (let index = 0; index < names.length; index++) {
        nameDiv = document.createElement("div")
        nameDiv.setAttribute("id", "div" + index);
        nameDiv.style.position="absolute";
        topPercent = Math.random()*100;
        nameDiv.style.top= topPercent+"%";
        leftPercent = Math.random()*100;
        nameDiv.style.left = leftPercent + "%";
        colorRGB="#";
        for (let i = 0; i < 6; i++) {
            colorRGB += "" + parseInt(Math.random()*16).toString(16);//เเปลงเป็นเลขฐาน16
        }
        nameDiv.style.color = colorRGB;
        b = document.createElement("b");
        b.innerHTML = "<br>" + names[index];

        image = document.createElement("img");
        image.setAttribute("src", picList[index]);
        image.setAttribute("style", "height:50px; width:50px");
        
        nameDiv.appendChild(image);
        nameDiv.appendChild(b);
        docBody.appendChild(nameDiv);
    }
    for (let i = 0; i < names.length; i++) {
        moveDiv(i);
    }
}

function moveDiv(i){
    var leftPos = 0;
    speed = Math.random() *200 + 50;
    m = setInterval(move,speed);
    function move() {
        if(leftPos>=90){
            clearInterval(m);
        }else{
            id="div"+ i;
            div = document.getElementById(id);
            leftPos  = div.style.left;
            //Trim % out: 75% => 75 
            leftPos = leftPos.substr(0,leftPos.length-1);
            leftPos++;
            div.style.left = leftPos + "%";
        }
    }
}