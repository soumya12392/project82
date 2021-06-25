var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var mouseEvent = "empty";
var color = document.getElementById("color").value;
var line_width = document.getElementById("line_width").value;
var radius = document.getElementById("radius").value;

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) {
    color = document.getElementById("color").value;
    line_width = document.getElementById("line_width").value;
    radius = document.getElementById("radius").value;
    mouseEvent = "mousedown";
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e) {
    mouseEvent = "mouseup";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e) {
    mouseEvent = "mouseleave";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e) {
    var current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    var current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mousedown") {
        console.log("The current position of X and Y coordinates = ");
        console.log("X = " + current_position_of_mouse_x + " Y = " + current_position_of_mouse_y);

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = line_width;
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius, 0, 2 * Math.PI);
        ctx.stroke();
    }
}

function clearArea() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}