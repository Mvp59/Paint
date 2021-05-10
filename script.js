mouseEvent = "empty";
var last_position_of_x, last_position_of_y;
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
colour = "black";
widthofline = 1;
canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    colour = document.getElementById("colour").value;
    widthofline = document.getElementById("widthofline").value;
    mouseEvent = "mouseDown";
}
 //<!-- function mousemove-->
canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e) {
    currentpositionofmousex = e.clientX - canvas.offsetLeft;
    currentpositionofmousey = e.clienty - canvas.offsetTop;
    if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = colour;
        ctx.lineWidth = widthofline;
        ctx.moveTo(last_position_of_x, last_position_of_y);
        ctx.lineTo(currentpositionofmousex, currentpositionofmousey);
        ctx.stroke();

    }
    last_position_of_x=currentpositionofmousex;
    last_position_of_y=currentpositionofmousey;
}


canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseUp";

    
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";
}

function cleararea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);

}