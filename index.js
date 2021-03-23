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
function animation()
{
   $(".btn").click(function()
   {
      this.addClass("pressed");
    this.setTimeout(function(){
        this.removeClass("pressed"),4000
    }) 
   }) 
}
function audiostop()
{
$("#my_audio").trigger('pause');
}
$(".green").click(playgreen);
$(".green").click(animation);
$(".red").click(playred);
$(".red").click(animation);
$(".yellow").click(playyellow);
$(".yellow").click(animation);
$(".blue").click(playblue);
$(".blue").click(animation);
var randum = Math.random()*4 ;
var randomnum = Math.ceil(randum);
console.log(randomnum);

if(randomnum == 1)
{
    $("#my_audio").attr("href","sounds/green.mp3");
    
}
if(randomnum == 2)
{
    $("#my_audio").attr("src","sounds/red.mp3");
   
}

if(randomnum == 3)
{
    $("#my_audio").attr("src","sounds/yellow.mp3");
}

if(randomnum == 4)
{
    $("#my_audio"). attr("src","sounds/blue.mp3");   
}
$(document).ready(function()
{
$("#my_audio").trigger('play');
window.setTimeout(audiostop,350);
});