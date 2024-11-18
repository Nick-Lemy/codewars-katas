function sumOfN(n) {
    let result = [0];
    for (let i = 1; i <= Math.abs(n); i++) {
        result.push(n >= 0 ? (result[i - 1] + i) : - (- result[i - 1] + i));
    }
    return result;
}
