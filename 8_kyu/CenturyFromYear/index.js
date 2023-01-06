/*
Title:
    Century From Year

Description:
The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

Task
Given a year, return the century it is in.

Examples
1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20

*******************************************************************************
Kata link:
    https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097/javascript
Discuss link: 
    https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097/discuss/javascript

Solutions link:
    https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097/solutions/javascript

********************************************************************************
*/


// My Solution
function century(year) {
    let x = Math.floor(year/100);
    if (year % 100 === 0) {
      return x;
    } else {
      return x+1;
    }
  }