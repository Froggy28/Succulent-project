// JavaScript File
var potButton = document.getElementById("potButton");
var rockButton = document.getElementById("rockButton");
var soilButton = document.getElementById("soilButton");
var seedButton = document.getElementById("seedButton");
var decorButton = document.getElementById("decorButton");
var bluePotButton = document.getElementById("bluePotButton");
var brownPotButton = document.getElementById("brownPotButton");
var bluePotImg = document.getElementById("bluePotImg");
var canvas = document.getElementById("canvas");
var snowman = document.getElementById("snowman");
// var bluepot  = "bluepot.png"; 
// snowman.style.visibility="hidden";

// bluePotButton.addEventListener("click", function(){
//     document.getElementById("bluepot").onload = function(){
//     var c = document.getElementById("canvas");
//     var ctx = c.getContext("2d");
    
//     var img = document.getElementById("bluepot");
    
//     ctx.drawImage(img, 100, 60, 100, 100);
//     };
// });


var tempImage = new Image();
    tempImage.src = "bluepot.png";

    var spriteWidth = 60,
        spriteHeight = 50,
        pixelsLeft = 170,
        pixelsTop = 30,

        canvasPosX = 100,
        canvasPosY = 100;

    context.drawImage(tempImage,
        pixelsLeft,
        pixelsTop,
        spriteWidth,
        spriteHeight,
        canvasPosX,
        canvasPosY
    );
    
    decorButton.addEventListener("click", function(){
        snowman.style.visibility = "visible";
        bluePotButton.style.visibility = "hidden";
        brownPotButton.style.visibility = "hidden";
        
    });






// function imageDropped(src) {
//     var tempImage = new Image();
//     tempImage.src = src;

//     var spriteWidth = 60,
//         spriteHeight = 50,
//         pixelsLeft = 170,
//         pixelsTop = 30,

//         canvasPosX = 100,
//         canvasPosY = 100;

//     context.drawImage(tempImage,
//         pixelsLeft,
//         pixelsTop,
//         spriteWidth,
//         spriteHeight,
//         canvasPosX,
//         canvasPosY
//     );

// }

// function allowDrop(ev) {
//     ev.preventDefault();
// }

// function drag(ev) {
//     ev.dataTransfer.setData("text", ev.target.id);
// }




// function drop(ev) {
//     ev.preventDefault();
//     var data = ev.dataTransfer.getData("text");
//     ev.target.appendChild(document.getElementById(data));
//     imageDropped(ev.target.interalid="src");
// }
