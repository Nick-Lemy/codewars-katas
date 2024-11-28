function rot13(message) {
    //your code here
    let alp = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let alphabetUpper = alp.map(n => n.toUpperCase());
    return message.split('').map(function(n){
        let alphabet = n === n.toLowerCase()? alp : alphabetUpper;
        return n.match(/[a-zA-Z]/ ) ? alphabet[alphabet.indexOf(n) > 12? alphabet.indexOf(n) - 13 : alphabet.indexOf(n) + 13] : n
    }).join('')
}