
//global game variables
var targetGuess;
var counter;
var crystal1;
var crystal2;
var crystal3;
var crystal4;
var wins = 0;
var losses = 0;


// game start function
$(document).ready(function() {
function gameStart() {
    targetGuess = Math.floor(Math.random() * (120 - 19) + 19);
    counter = 0;
    crystal1 = Math.floor((Math.random() * 12) + 1);
    crystal2 = Math.floor((Math.random() * 12) + 2);
    crystal3 = Math.floor((Math.random() * 12) + 3);
    crystal4 = Math.floor((Math.random() * 12) + 4);
    $(".score").text(counter);
    $(".targetNumber").text(targetGuess);
    $("#citrine").attr("data-crystalvalue", crystal1);
    $("#howlite").attr("data-crystalvalue",crystal2);
    $("#aquamarine").attr("data-crystalvalue", crystal3);
    $("#jade").attr("data-crystalvalue", crystal4);
    $("#targetGuess").text(targetGuess);
}

function newGame() {
    gameStart();
    counter = 0;
    $("#score").text(counter);      
}

gameStart();
crystalGame();
function crystalGame() {

$(".crystal-image").on("click", function(){
    console.log($(this).attr("data-crystalvalue"));
if (counter < targetGuess) {
    counter += parseInt($(this).attr("data-crystalvalue"));
    $("#score").text(counter);

    if (counter === targetGuess) {
        wins++;
        $("#wins").text(wins);
        setTimeout(newGame, 1000);

      }
  
      else if (counter > targetGuess) {
        losses++;
        $("#loss").text(losses);
        setTimeout(newGame, 1000);
      }
        }
    });
}
});


