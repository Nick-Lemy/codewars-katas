function findOdd(A) {
    let result = [A[0]];
    let sorted_list = A.sort();
    for (let i = 1; i < sorted_list.length; i++) {
        console.log(result);
        
        console.log(sorted_list[i], sorted_list[i - 1]);
        if (sorted_list[i - 1] === sorted_list[i]) {
            result.push(sorted_list[i]);
        } else {
            if (result.length % 3 === 0 || A.length === 1) {
                return result[0];
            } 
            else {
                result = [sorted_list[i]];
            }
        }
    }
    return result[0];
}

console.log(findOdd([1,1,2,2,2,2,3,3,3,3,3,3,4])) // 3;
