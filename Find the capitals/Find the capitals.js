function capital(capitals){
  let solution = [];
  for (let i = 0; i < capitals.length; i++) {
    if (capitals[i].country != null) {
      solution.push("The capital of " + capitals[i].country + " is " + capitals[i].capital);
    } else {
      solution.push("The capital of " + capitals[i].state + " is " + capitals[i].capital)
    }
  }
  
  return solution;
}