var a;

var c1X = 476;
var c1Y = 213;
var c1W = 100;
var c1H = 10;

var c2X = 300;
var c2Y = 125;
var c2W = 100;
var c2H = 8;

var c3X = 140;
var c3Y = 60;
var c3W = 90;
var c3H = 10;

var c4X = 3;
var c4Y = 53;
var c4W = 85;
var c4H = 7;

var c5X = 367;
var c5Y = 206;
var c5W = 66;
var c5H = 8;

function water()
{
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.beginPath(); //starting a new line
    ctx.moveTo(0,500);
    ctx.lineWidth=200;
    ctx.lineTo(500,500);
    ctx.strokeStyle = "#51d5ff";
    ctx.stroke();

    ctx.beginPath(); //starting a new line
    ctx.moveTo(0,400);
    ctx.lineWidth=2;
    ctx.lineTo(500,400);
    ctx.strokeStyle = "#0f00ff";
    ctx.stroke();

}


function cloud2()
{
    var canvas = document.getElementById("myCanvas");
    //sky 2
    var ctx = canvas.getElementById("myCanvas");

    ctx.fillStyle = "#f3fffd";
    ctx.fillRect(70, 70, 160, 15);
    ctx.fillStyle = "#f3fffd";
    ctx.fillRect(70, 220, 155, 15);
}


function sun()
{
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.beginPath(); //instructions for 1st circle start here
    ctx.strokeStyle = "#ffb71b";
    ctx.arc(250,400,100,0,2*Math.PI);
    ctx.lineWidth = "5";
    ctx.fillStyle = "#fff83c";
    ctx.fill();
    ctx.stroke();


}

function drawSky()
{
    var ctx=document.getElementById("myCanvas").getContext("2d");
    ctx.fillStyle="#a8f7ff";
    ctx.fillRect(0,0, window.innerWidth, window.innerHeight);
}

function moveClouds()
{
    var c1Xmovement = Math.floor((Math.random()*2)+1);
    var c2Xmovement = Math.floor((Math.random()*3)+1);
    var c3Xmovement = Math.floor((Math.random()*4)+1);
    var c4Xmovement = Math.floor((Math.random()*5)+1);
    var c5Xmovement = Math.floor((Math.random()*3)+1);
    var ctx = document.getElementById("myCanvas").getContext("2d");

    c1X = c1X + c1Xmovement;
    c2X = c2X + c2Xmovement;
    c3X = c3X + c3Xmovement;
    c4X = c4X + c4Xmovement;
    c5X = c5X + c5Xmovement;
    ctx.fillStyle = "#f3fffd";
    ctx.fillRect(c1X, c1Y, c1W, c1H);
    ctx.fillStyle = "#f3fffd";
    ctx.fillRect(c2X, c2Y, c2W, c2H);
    ctx.fillStyle = "#f3fffd";
    ctx.fillRect(c3X, c3Y, c3W, c3H);
    ctx.fillStyle = "#f3fffd";
    ctx.fillRect(c4X, c4Y, c4W, c4H);
    ctx.fillStyle = "#f3fffd";
    ctx.fillRect(c5X, c5Y, c5W, c5H);
}

function checkCloud1()
{
    if (c1X > 500)
    {
        c1X = 0;
        c1Y = Math.floor((Math.random() * 180) + 20);

    }
}
function checkCloud2()
{

    if (c2X > 500)
    {
        c2X = 0;
        c2Y = Math.floor((Math.random() * 180) + 20);
    }
}
function checkCloud3()
{
    if (c3X > 500)
    {
        c3X = 0;
        c3Y = Math.floor((Math.random()*180)+20);
    }
}
function checkCloud4()
{
    if (c4X > 500)
    {
        c4X = 0;
        c4Y = Math.floor((Math.random()*180)+20);
    }
}
function checkCloud5()
{
    if (c5X > 500)
    {
        c5X = 0;
        c5Y = Math.floor((Math.random()*180)+20);
    }
}


function animate()
{
    a = requestAnimationFrame(animate);
    drawSky();
    sun();
    water();
    moveClouds();
    checkCloud1();
    checkCloud2();
    checkCloud3();
    checkCloud4();
    checkCloud5();
}

function startAnimation()
{
    animate();
}

function stopAnimation()
{
    cancelAnimationFrame(a);
}

function initialize()
{
    drawSky();
    sun();
    water();
    clouds();
}

function clouds()
{
    var ctx=document.getElementById("myCanvas").getContext("2d");
    ctx.fillStyle = "#f3fffd";
    ctx.fillRect(c1X, c1Y, c1W, c1H);
    ctx.fillStyle = "#f3fffd";
    ctx.fillRect(c2X, c2Y, c2W, c2H);
    ctx.fillStyle = "#f3fffd";
    ctx.fillRect(c3X, c3Y, c3W, c3H);
    ctx.fillStyle = "#f3fffd";
    ctx.fillRect(c4X, c4Y, c4W, c4H);
    ctx.fillStyle = "#f3fffd";
    ctx.fillRect(c5X, c5Y, c5W, c5H);
}