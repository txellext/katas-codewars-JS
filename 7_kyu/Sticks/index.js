/*
Title:
    21 Sticks - The game

Description: 
In this game, there are 21 sticks lying in a pile. Players take turns taking 1, 2, or 3 sticks. The last person to take a stick wins. For example:

21 sticks in the pile

Bob takes 2  -->  19 sticks left
Jim takes 3  -->  16 sticks
Bob takes 3  -->  13 sticks
Jim takes 1  -->  12 sticks
Bob takes 2  -->  10 sticks
Jim takes 2  -->   8 sticks
Bob takes 3  -->   5 sticks
Jim takes 3  -->   2 sticks
Bob takes 2  -->  Bob wins!
Your task
Create a robot that will always win the game. Your robot will always go first. The function should take an integer and returns 1, 2, or 3.

Note: The input will always be valid (a positive integer)

Hint: https://youtu.be/9KABcmczPdg

*******************************************************************************
Kata link:
    

Discuss link: 
    

Solutions link:
    

********************************************************************************
*/


// My Solution
function makeMove(sticks) {
    let totalSticks = 21;
    let lastMove
         
      if (totalSticks == 21) {
        totalSticks - sticks;
      } else if ((totalSticks == 20) & (sticks == 1)) {
        totalSticks - sticks;
        lastMove = sticks;
      } else if ((totalSticks == 20) & (sticks == 2)) {
        totalSticks - sticks;
        lastMove = sticks;
      } else if ((totalSticks == 20) & (sticks == 3)) {
        totalSticks - sticks;
        lastMove = sticks;
      } else {

      }
        
    return sticks
  }