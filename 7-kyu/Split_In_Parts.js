var splitInParts = function (s, partLength) {
    let result = '';
    for (let i = 0; i < s.length; i++) {
        result += i % partLength == 0 && i !== 0 ? (" " + s[i]) : s[i]
    }
    return result;
}