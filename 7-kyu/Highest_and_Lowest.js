function highAndLow(numbers) {
    let result = numbers.split(' ').map(n => parseInt(n)).sort((a, b) => a - b);
    return [result[0], result[result.length - 1]].sort((a, b) => a - b).reverse().join(' ')
}