function pigIt(str) {
    let hum = ['!', '.', '?']
    return str.split(" ").map(function (n) {
        if (!hum.includes(n)) {
            let letters = n.split('');
            letters.push(letters[0]);
            letters.shift();
            return letters.join('') + 'ay'
        } else {
            return n
        }
    }).join(' ');
}