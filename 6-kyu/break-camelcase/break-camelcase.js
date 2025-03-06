function solution(string) {
  let n = ''
  for(const letter of string){
    n += letter === letter.toUpperCase() ? ' ' + letter : letter
  }
  return n
}