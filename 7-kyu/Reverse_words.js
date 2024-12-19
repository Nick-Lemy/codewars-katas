function reverseWords(str) {
    let charact = str.split(' ');
    let result = '';
    for (let i = 0; i < charact.length; i++) {
        result += i === 0 ? charact[i].split('').reverse().join('') : (" " + charact[i].split('').reverse().join(''));
    }
    return result
}