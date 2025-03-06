function count(string) {
  const obj = {}
  for(const letter of string){
    obj[letter] = ( obj[letter] || 0 ) + 1
  }
  return obj;
}