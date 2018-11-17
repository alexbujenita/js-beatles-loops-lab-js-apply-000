// add solution here
// function theBeatlesPlay(arrMus, arrInst)

const theBeatlesPlay = (arrMus, arrInst) => {
  let finalArray = [];
  for (let i = 0; i < arrMus.legth; i++) {
    finalArray.push(`${arrMus[i]} plays ${arrInst[i]}`)
  }
  return finalArray;
}
