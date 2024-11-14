// Here is the kata's link https://www.codewars.com/kata/54e6533c92449cc251001667/javascript
// Have a fun! :D

var uniqueInOrder=function(iterable){
  let result = [iterable[0]];
  for(let i = 0; i < iterable.length; i++){
    if(result[result.length - 1] !== iterable[i]){
      result.push(iterable[i]);
    }
  }
  return iterable.length == 0 ? [] : result ;
}