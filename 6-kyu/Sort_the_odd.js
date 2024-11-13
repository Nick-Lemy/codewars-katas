function sortArray(array) {
    let odd = [];
    let indexes = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            odd.push(array[i]);
            indexes.push(i);
        }
    }
    for (let j = 0; j < odd.length; j++) {
        
        array.splice(indexes[j], 1, odd.sort()[j]);
    }
    return array;
}
