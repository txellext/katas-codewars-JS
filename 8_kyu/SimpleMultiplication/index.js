/*
Title:
    Simple Multiplication

Description: 
This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

*******************************************************************************
Kata link:
    https://www.codewars.com/kata/583710ccaa6717322c000105/javascript

Discuss link: 
    https://www.codewars.com/kata/583710ccaa6717322c000105/discuss/javascript

Solutions link:
    https://www.codewars.com/kata/583710ccaa6717322c000105/solutions/javascript

********************************************************************************
*/


// My Solution
function simpleMultiplication(number) {
    return number % 2 == 0 ? number * 8 : number * 9
}