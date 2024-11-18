const mapPopulationFit = (population, fitness) => {
    return population.map(c => { return {chromosome: c, fitness: fitness(c)} } )
  };