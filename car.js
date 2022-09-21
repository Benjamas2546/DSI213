function makeCar(colorParameter, engineParameter, doorsParameter, milageParameter,
    modelParameter  ) {
    //define car class
    var car = {
        color: colorParameter, engine: engineParameter, doors: doorsParameter,
        fuel:0, milage: milageParameter, brand: "Toyoty", model: modelParameter,
        seats:5, camera: "off", started: false,
        //methods: start(), stop(), drive()
        start: function (params) { //method start
            this.started = true; this.camera = "on";
        },
        stop: function () {
            this.started = false; this.camera = "off";
        },
        drive : function(kilometers){
            if(this.started = true){
                alert("Br Br");
                //fuel use rate = 15 km/litre
                if(this.fuel > kilometers/15){

                }else{
                    alert("Not enough fuel to go to.")
                }
            }else{
                alert("Car has not started.")
            }
        }
        
    }
    return car;
}
function driveCar(carParams) {
    if(carParams!=null){
        km = document.getElementById("distance").value;
        carParams.drive(km);
    }else{
        alert("please create a car by choosing a color and add the fuel first.")
    }
    
}
var car1, car2, car3; //global variables
function run() {
    car1 = makeCar("red", 1800, 2, 10000, "Camry");
    car2 = makeCar("green", 2500, 4, 100, "Altis");
    console.log(car2.doors, " ", car1.color, " ", car1.engine, car1.milage);
    car1.milage = 110000;
    console.log(car1.milage);
}
image= ["Blue Car.png", "Blue Car.gif", 
        "Red Car.png", "Red Car.gif",
        "Green Car.png", "Green Car.gif", 
        "Purple Car.png", "Purple Car.gif",
        "Orange Car.png", "Orange Car.gif"];

function run2() {
    carColor = document.getElementById("chosenColor");
    var color = carColor.options[carColor.selectedIndex].value;
    car3 = makeCar(color, 2000, 4, 20000, "Yaris");
    car3.fuel = document.getElementById("fuelInitial").value;
    showCarImage(car3.color);//Argument คือตอนเรียกใช้ ในที่นี้คือเรียกใช้ argument ที่ชื่อว่า color
    showMeter(car3.fuel);
}

function startCar(carParameter){
   if(carParameter.color!=null){
       carParameter.start();
       //console.log(carParameter.started, carParameter.camera);
   }else{
    alert("Please create a car by choosing a color and add the fuel first.")
   }
}
//Parameter ถูกกำหนดในฟังก์ชั่น (ประกาศฟังก์ชั่น) ในที่นี้คือ colorParameter
function showCarImage(colorParameter) {
    if(colorParameter == "blue"){
        pic = image[0];
    }else if(colorParameter == "red"){
        pic = image[2];
    }else if(colorParameter == "green"){
        pic = image[4];
    }else if(colorParameter == "purple"){
        pic = image[6];
    }else if(colorParameter == "orange"){
        pic = image[8];
    }
    pic = "image\\" + pic;
    document.getElementById("carImage").src = pic;
}

function showMeter(fuelParameter){
    document.getElementById("fuelMeter").value = fuelParameter;
}