function solution(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        result += str[str.length - i - 1];
    }
    return result;
}