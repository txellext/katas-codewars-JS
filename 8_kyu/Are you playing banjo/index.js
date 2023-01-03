/*
Title:
    Are you playing Banjo?

Description:
    Create a function which answers the question "Are you playing banjo?".
    If your name starts with the letter "R" or lower case "r", you are playing banjo!

    The function takes a name as its only argument, and returns one of the following strings:

    name + " plays banjo" 
    name + " does not play banjo"
    Names given are always valid strings.


*******************************************************************************
Kata link:
    https://www.codewars.com/kata/53af2b8861023f1d88000832

Discuss link: 
    https://www.codewars.com/kata/53af2b8861023f1d88000832/discuss

Solutions link:
    https://www.codewars.com/kata/53af2b8861023f1d88000832/solutions/javascript

********************************************************************************
*/


// My Solution
function areYouPlayingBanjo(name) {
    for (let letter of name) {
      if (letter == "R" || letter == "r") {
        return name + " plays banjo";
      } else {
        return name + " does not play banjo";
      }
    }
  }

  // Function Export
  module.export = areYouPlayingBanjo