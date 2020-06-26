function getNumber(num){
    var display = document.getElementById("display");
    display.value += num;
}

function clearDisplay(){
    var display = document.getElementById("display");
    display.value= ""
}

function getCalc(){
    var display = document.getElementById("display");
    display.value = eval(display.value)
}

function getCos(){
    var display = document.getElementById("display");
    display.value = Math.cos(display.value)
}

function getSin(){
    var display = document.getElementById("display");
    display.value = Math.sin(display.value)
}

function getTan(){
    var display = document.getElementById("display");
    display.value = Math.tan(display.value)
}

function getSqr(){
    var display = document.getElementById("display");
    display.value = (display.value)*(display.value)
}

function getSqrRoot(){
    var display = document.getElementById("display");
    display.value = Math.sqrt(display.value)
}

function back(){
    var display = document.getElementById("display").value;
    display = display.slice(0,-1);
    document.getElementById("display").value = display;
}

function getLog(){
    var display = document.getElementById("display");
    display.value = Math.log(display.value)
}

function getEe(){
    var display = document.getElementById("display");
    display.value = Math.E*display.value
}

function getPie(){
    var display = document.getElementById("display");
    display.value += Math.PI
}