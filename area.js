function calculateArea() {
    var width = document.getElementById("width").value;
    var height = document.getElementById("height").value;
    result1 = width * height;
    document.getElementById("area").value = result1;
}

function calculateRound() {
    var width = document.getElementById("width").value;
    var height = document.getElementById("height").value;
    result2 = 2*(parseInt(width)+parseInt(height));
    document.getElementById("round").value = result2;
}

