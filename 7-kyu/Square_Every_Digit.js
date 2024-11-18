function squareDigits(num) {
    let numero = num.toString();
    let result = "";
    for (let i = 0; i < numero.length; i++) {
        result += (parseInt(numero[i])**2).toString();
    }
    return parseInt(result);
}