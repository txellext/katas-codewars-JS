/*
Title:
    Reverse Words

Description: 
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

*******************************************************************************
Kata link:
    https://www.codewars.com/kata/5259b20d6021e9e14c0010d4

Discuss link: 
    https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/discuss/javascript

Solutions link:
    https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/solutions/javascript

********************************************************************************
*/


// My Solution
function reverseWords(str) {
    return (str.split(" ").map(word => word.split("").reverse().join(""))).join(" ");
  }