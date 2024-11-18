const mutate = (chromosome, p) => {
    let arr1 = chromosome.slice(0, Math.round(chromosome.length * p));
    let arr = chromosome.slice(Math.round(chromosome.length * p), chromosome.length)
    let arr2 = "";
    for(let j = 0; j < arr1.length; j++){
       arr2 += arr1[j] === "0" ? arr1[j].replace("0", "1") : arr1[j].replace("1", "0") ;
    }
    return arr2 + arr;
};