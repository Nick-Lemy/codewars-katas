function duplicateCount(text) {
    let result = '';
    let test = text.split('');
    for (let i = 0; i < test.length; i++) {
        var count = 0;
        for (let j = 0; j < test.length; j++) {
            if (test[i] == test[j]) {
                count++;
                if (count >= 2) {
                    result += 1;
                }
            }
        }
    }
    return result;
}

console.log(duplicateCount('alla'));
