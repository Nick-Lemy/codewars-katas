// Here is the kata's link https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript
// Have a fun! :D

var uniqueInOrder=function(iterable){
  let my_list = iterable.split('');
  let result = [my_list[0]];
  for(let i = 0; i < my_list.length; i++){
    if(result[result.length - 1] !== my_list[i]){
      result.push(my_list[i]);
    }
  }
  return result;
}