function getCount(str) {
    var count = 0;
    let voy = ['a', 'e', 'i', 'o', 'u'];
    for (
        let i = 0; i < str.length; i++) {
        for (let j = 0; j < voy.length; j++) {
            if (str[i] == voy[j]) {
                count++;
            }
        }
    }
    return count;
}