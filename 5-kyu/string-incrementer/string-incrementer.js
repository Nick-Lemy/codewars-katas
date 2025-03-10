function incrementString (strng) {
  let theNumber;
  for(let i= 0; i < strng.length; i++){
    const r = strng.slice(i)
    if(!isNaN(r)){
      theNumber = i
      break
    }
  }
  let result = strng.slice(theNumber)
  console.log(result)
  result = theAddition(result)
  if(isNaN(result)){
    result = 1
  }
  return `${strng.slice(0, theNumber)}${(result)}`
  
}
function theAddition(integ){
  const zero = '0'
  const myCount = integ.length
  let add = Number(integ) + 1
  if(add.toString().length <= myCount){
    add = zero.repeat(myCount - add.toString().length) + add.toString()
  }
  return add
}
​