
var randum = Math.random()*4 ;
var randomnum = Math.ceil(randum);
console.log(randomnum);
function playgreen()
{
    var audio =new Audio('sounds/green.mp3');
    audio.play();
}
function playred()
{
    var audio =new Audio('sounds/red.mp3');
    audio.play();
}
function playyellow()
{
    var audio =new Audio('sounds/yellow.mp3');
    audio.play();
}
function playblue()
{
    var audio =new Audio('sounds/blue.mp3');
    audio.play();
}


$(".green").click(playgreen);
$(".red").click(playred);
$(".yellow").click(playyellow);
$(".blue").click(playblue);