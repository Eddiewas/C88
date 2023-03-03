var canvas = new fabric.Canvas('myCanvas');
var blockImageWidth = 30;
var blockImageHeight = 30;
var playerX = 10;
var playerY = 10;
var playerObject = '';
function playerUpdate() {
    fabric.Image.fromURL("player.png", function(Img){
        playerObject = Img;
        playerObject.scaleToWidth(150);
        playerObject.scaleToHeight(150);
        playerObject.set({
            top:playerY,
            left:playerY
        });
        canvas.add(playerObject)
    });
}
function newImage(getImage) {
    fabric.Image.fromURL(getImage, function(Img){
        blockImageObject = Img;
        blockImageObject.scaleToWidth(blockImageWidth);
        blockImageObject.scaleToHeight(blockImageHeight);
        blockImageObject.set({
            top:playerY,
            left:playerY
        });
        canvas.add( blockImageObject);
    });
}

window.addEventListener("keydown", my_keydown);
function my_keydown (e){
    keypressed = e.keyCode;
    if (e.shiftKey&&keypressed=='73'){
        blockImageWidth=blockImageWidth+10;
        blockImageHeight=blockImageHeight+10;
        document.getElementById("current_width").innerHTML=blockImageWidth;
        document.getElementById("current_height").innerHTML=blockImageHeight;
        
    }
    if (e.shiftKey&&keypressed=='68'){
        blockImageWidth=blockImageWidth-10;
        blockImageHeight=blockImageHeight-10;
        document.getElementById("current_width").innerHTML=blockImageWidth;
        document.getElementById("current_height").innerHTML=blockImageHeight;
        
    }
    if (keypressed=='38'){
        up();
    }
    if (keypressed=='40'){
        down();
    }
    if (keypressed=='37'){
        left();
    }
    if (keypressed=='39'){
        right();
    }
    if (keypressed=='87'){
        newImage('wall.jpg');
    }
    if (keypressed=='71'){
        newImage('ground.png');
    }
    if (keypressed=='76'){
        newImage('light_green.png');
    }
    if (keypressed=='84'){
        newImage('trunk.jpg');
    }
    if (keypressed=='82'){
        newImage('roof.jpg');
    }
    if (keypressed=='89'){
        newImage('yellow_wall.png');
    }
    if (keypressed=='68'){
        newImage('dark_green.png');
    }
    if (keypressed=='67'){
        newImage('cloud.jpg');
    }
    if (keypressed=='85'){
        newImage('unique.png');
    }
} 
function up() {
    if (playerY >= 0) {
        playerY = playerY - blockImageHeight;
        canvas.remove(playerObject);
        playerUpdate();
    } 
}
function down() {
    if (playerY <= 550) {
        playerY = playerY + blockImageHeight;
        canvas.remove(playerObject);
        playerUpdate();
    } 
}
function left() {
    if (playerX >= 0) {
        playerX = playerX - blockImageWidth;
        canvas.remove(playerObject);
        playerUpdate();
    } 
}
function right() {
    if (playerX <= 950) {
        playerX = playerX + blockImageWidth;
        canvas.remove(playerObject);
        playerUpdate();
    } 
}



