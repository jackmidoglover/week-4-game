# Crystal Collector

## How the Game Works
Crystal Collector is a black-jack style game. Instead of a constant goal of hitting or staying under the number 21, Crystal Collector
generates a new random goal number with every play. The player is "dealt" four crystal buttons that each contain a hidden value. By clicking
on the crystal button and doing a little math, the player can figure out what this value is. It is between 1-12. 

The game is made with simple jQuery. A game start function pushes values to the global variables, a game restart function regenerates those
values, and the gameplay itself is contained within a simple if-else conditional that checks whether the players score equals the target number.
When this condition is met, the player wins. If the player's score exceeds the goal number, the else statement registers a player loss.
