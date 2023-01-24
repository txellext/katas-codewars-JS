/*
Title:
    Isograms

Description: 
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

isIsogram "Dermatoglyphics" = true
isIsogram "moose" = false
isIsogram "aba" = false

*******************************************************************************
Kata link:
    https://www.codewars.com/kata/54ba84be607a92aa900000f1

Discuss link: 
    https://www.codewars.com/kata/54ba84be607a92aa900000f1/discuss/javascript

Solutions link:
    https://www.codewars.com/kata/54ba84be607a92aa900000f1/solutions/javascript

********************************************************************************
*/


// My Solution
isIsogram = str => str.length == new Set(str.toLowerCase()).size