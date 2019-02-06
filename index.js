function theBeatlesPlay(musicians, instruments){
  let result = []
  for(let i = 0; i < musicians.length; i++){
    result[i] = musicians[i] + "plays " + instruments[i]
  }
  return result
}

function johnLennonFacts(facts){
  let result = []
  let i = 0;
  while(i < facts.lenght){
    result[i] = facts[i] + "!!!"
    i++;
  }
  return result
}

function iLoveTheBeatles(number){
  let result = []
  let i = 0
  do {
    result[i] = "I love the Beatles!"
    i++
  } while (i < number)


  return result
}
