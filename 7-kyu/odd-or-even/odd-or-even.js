function oddOrEven(array) {
  if(array.length === 0) return 'even'
   const sumOfElems = array.reduce((acc, num)=>acc+num)
   return sumOfElems % 2 === 0 ? 'even': 'odd'
  }