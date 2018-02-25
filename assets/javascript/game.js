
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
    // these add values, mainly random numbers, to the globals
    targetGuess = Math.floor(Math.random() * (120 - 19) + 19);
    counter = 0;
    crystal1 = Math.floor((Math.random() * 12) + 1);
    crystal2 = Math.floor((Math.random() * 12) + 2);
    crystal3 = Math.floor((Math.random() * 12) + 3);
    crystal4 = Math.floor((Math.random() * 12) + 4);
    //this prints variables to the DOM and adds a hidden number value to
    // the crystal buttons
    $(".score").text(counter);
    $(".targetNumber").text(targetGuess);
    $("#citrine").attr("data-crystalvalue", crystal1);
    $("#howlite").attr("data-crystalvalue",crystal2);
    $("#aquamarine").attr("data-crystalvalue", crystal3);
    $("#jade").attr("data-crystalvalue", crystal4);
    $("#targetGuess").text(targetGuess);
}
// game restart function
function newGame() {
    gameStart();
    counter = 0;
    $("#score").text(counter);      
}

gameStart();
crystalGame();
// main game play
function crystalGame() {

$(".crystal-image").on("click", function(){
// if the counter is not already over the targetGuess,
if (counter < targetGuess) {
// retrieve data-crystal value, parseInt it and add it to counter
    counter += parseInt($(this).attr("data-crystalvalue"));
    $("#score").text(counter);
//win condition
    if (counter === targetGuess) {
        wins++;
        $("#wins").text(wins);
        setTimeout(newGame, 1500);

      }
//lose condition
      else if (counter > targetGuess) {
        losses++;
        $("#loss").text(losses);
        setTimeout(newGame, 1500);
      }
        }
    });
}
});


