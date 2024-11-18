const crossover = (chromosome1, chromosome2, index) => {
    var arr1 = chromosome1.slice(index, chromosome1.length);
    var arr2 = chromosome2.slice(index, chromosome2.length);
    return [chromosome1.slice(0, index) + arr2, chromosome2.slice(0, index) + arr1]
  };