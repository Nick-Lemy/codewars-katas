// Here is the kata's link https://www.codewars.com/kata/567b21565ffbdb30e3000010/javascript
// Have a good time :D

const select = (population, fitnesses) => {
    let p = Math.random();
    let starting_point = 0;
    console.log(p);
    for(let i = 0; i < population.length; i++){
        if( p <= fitnesses[i] && p >= starting_point ){
            return population[i];
        } else {
            starting_point += fitnesses[i];
        }
    }
  }