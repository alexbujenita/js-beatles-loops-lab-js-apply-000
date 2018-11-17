// add solution here

// const theBeatlesPlay = (arrMus, arrInst) => {
//   let finalArray = [];
//   for (let i = 0; i < arrMus.legth; i++) {
//     finalArray.push(`${arrMus[i]} plays ${arrInst[i]}`)
//   }
//   return finalArray;
// }

function theBeatlesPlay(arrMus, arrInst) {
  var finalArray = [];
  for (let i = 0; i < arrMus.length; i++) {
    finalArray.push(arrMus[i] + " plays " + arrArt[i]);
  }
  return finalArray;
}
