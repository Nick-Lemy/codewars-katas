function firstNonRepeatingLetter(s) {
  const obj = {}
  
  for(const letter of s){
    if(obj[letter.toLowerCase()]){
      obj[letter.toLowerCase()][0] += 1
    } else if( obj[letter.toUpperCase()]) {
      obj[letter.toUpperCase()][0] += 1
    }
    else {
      obj[letter] = [1, s.split('').indexOf(letter)]
    }
  }
  
  const result = Object.entries(obj).filter(e=>e[1][0] === 1).sort((a, b) => a[1][1] - b[1][1])
  return result[0] ? result[0][0][0] : ''
}