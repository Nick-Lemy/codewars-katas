function squareSum(numbers){
    return numbers.length > 0? numbers.map(element => element**2).reduce((acc, num) => acc + num) : 0;
  }  