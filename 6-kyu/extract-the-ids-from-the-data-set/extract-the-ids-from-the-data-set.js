function extractIds(data){
  data = JSON.stringify(data).split('')
  console.log(data.join(''))
  let result =  []
  data.map((elem, index)=>{
    if(data[index - 1] ===':' && data[index - 2] === '"' && data[index - 3] === 'd' && data[index - 4] === 'i'){
      result.push(Number(elem))
    }
  })
  return result
}