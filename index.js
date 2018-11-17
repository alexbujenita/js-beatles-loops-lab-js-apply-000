// add solution here

const theBeatlesPlay = (arrMus, arrInst) => {
  const finalArray = [];
  for (let i = 0; i < arrMus.length; i++) {
    finalArray.push(`${arrMus[i]} plays ${arrInst[i]}`)
  }
  return finalArray;
}
