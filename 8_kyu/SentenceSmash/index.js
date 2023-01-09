/*
Title:
    Sentence Smash

Description: 
    Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. 
    You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

    Example
    ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

*******************************************************************************
Kata link:
    https://www.codewars.com/kata/53dc23c68a0c93699800041d/javascript

Discuss link: 
    https://www.codewars.com/kata/53dc23c68a0c93699800041d/discuss/javascript

Solutions link:
    https://www.codewars.com/kata/53dc23c68a0c93699800041d/solutions/javascript

********************************************************************************
*/


// My Solution
function smash (words) {
    return words.join(' ')
  };