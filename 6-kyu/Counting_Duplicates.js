function duplicateCount(text) {
    let result = 0;
    let letters = text.split('').map(n => n.toLowerCase());
    // for(let i = 0; i <letters.length; i++){
    //     console.log('i = '+i);
        
    //     console.log(letters);
    //     result += letters.filter(n => n === letters[i]).length > 1 ? 1 : 0;
    //     console.log(letters.filter(n => n === letters[i]), 'result= ' + result);        
    //     i = letters.filter(n => n === letters[i]).length > 1 ? 0 : i;
    //     console.log('i= '+i);
    //     letters = letters.filter(elem => elem !== letters[i]);
    // }
    let i = 0;
    while(i < letters.length){
        console.log('i = '+i);
        console.log(letters);
        result += letters.filter(n => n === letters[i]).length > 1 ? 1 : 0;
        console.log(letters.filter(n => n === letters[i]), 'result= ' + result);
        i = letters.filter(n => n === letters[i]).length > 1 ? 0 : i;
        console.log('i= '+i);
        letters = letters.filter(elem => elem !== letters[i]);
    }
    return result
}

console.log(duplicateCount('Indivisibility'));


// function trying(text){
//     let result = 0;
//     let liste = []
//     for(let i =0; i < liste)
// }
// function duplicateCount(text){
//     let result = 0;
//     let splittedList = text.split('');
//     for (let i = 0; i < splittedList.length; i++){
//         let count = 0;
//         while(splittedList.includes(splittedList[i])){
//             console.log(splittedList[i]);
//             count++;
//             splittedList.splice(splittedList[i], 1)
//         }
//         console.log(count);
        
//         result += count >= 2 ? 1 : 0
//         console.log(splittedList);
//     }
//     return result
// }


// var damn = [1, 1, 1, 2, 3, 3, 4, 5, 6, 7, 1];
// console.log(damn);
// while(damn.includes(1)){
//     damn.splice(damn.indexOf(1), 1)
// }
// console.log(damn);
