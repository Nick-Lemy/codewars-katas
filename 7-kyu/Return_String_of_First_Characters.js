function makeString(s) {
    let result = [];
    let words = s.split(' ');
    for (let i = 0; i < words.length; i++) {
        result.push(words[i][0]);
    }
    return result.join('');
}