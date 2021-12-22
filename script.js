var header = document.getElementById("header");
var models = document.getElementById("models");
var model3 = document.getElementById("model3");
var modelx = document.getElementById("modelx");
var modely = document.getElementById("modely");

var model = document.getElementById("model");
var timer = document.getElementById("timer");
var maxspeed = document.getElementById("maxspeed");
var maxrange = document.getElementById("maxrange");

models.onclick = function(){
    header.style.backgroundImage = "url(images/image-1.png)";
    model.innerHTML = "Model S";
    timer.innerHTML = "1.9 S";
    maxspeed.innerHTML = "200 mph";
    maxrange.innerHTML = "396 mi";
}

model3.onclick = function(){
    header.style.backgroundImage = "url(images/image-2.png)";
    model.innerHTML = "Model 3";
    timer.innerHTML = "1.7 S";
    maxspeed.innerHTML = "220 mph";
    maxrange.innerHTML = "415 mi";
}

modelx.onclick = function(){
    header.style.backgroundImage = "url(images/image-3.png)";
    model.innerHTML = "Model X";
    timer.innerHTML = "1.5 S";
    maxspeed.innerHTML = "240 mph";
    maxrange.innerHTML = "458 mi";
}

modely.onclick = function(){
    header.style.backgroundImage = "url(images/image-4.png)";
    model.innerHTML = "Model Y";
    timer.innerHTML = "1.3 S";
    maxspeed.innerHTML = "250 mph";
    maxrange.innerHTML = "510 mi";
}

