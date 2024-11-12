// Here is the kata's link https://www.codewars.com/kata/514b92a657cdc65150000006/javascript
// Have a good time :D

function solution(number){
    var result = 0;
    for (let i = 0; i < number; i++){
      result += ( i % 3 === 0 || i % 5 === 0 ) ? i : 0;
    }
    return result;
  }