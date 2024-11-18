decodeMorse = function (morseCode) {

    let result = '';
    var words = morseCode.split('   ');
    let un = [];
    for (let i = 0; i < words.length; i++) {
        let letters = `${words[i]}`.split(' ');
        words[i] = '';
        for (let j = 0; j < letters.length; j++) {
            let s = MORSE_CODE[`${letters[j]}`];
            if (s != undefined) {
                un[j] = "";
                un[j] += s;
                words[i] += un[j];
            }
        }
        if (words[i].length > 0) {
            if (i == words.length - 1) {
                result += words[i];
            } else {
                result += words[i] + ' ';
            }
        }
    }
    if (result[result.length - 1] === ' ') {
        let str = result.substring(0, result.length - 1);
        result = str;
    }
    return result;
}