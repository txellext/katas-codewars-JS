/*
Title:
    List Filtering

Description: 
In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

*******************************************************************************
Kata link:
    https://www.codewars.com/kata/53dbd5315a3c69eed20002dd

Discuss link: 
    https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/discuss/javascript

Solutions link:
    https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/solutions/javascript

********************************************************************************
*/


// My Solution
function filter_list(l) {
    return l.filter(integer => typeof integer !== 'string')
  }