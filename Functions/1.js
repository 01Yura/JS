function CompareArrays(array1, array2) {
const mutualItems = []

for (let i=0; i<array1.length; i++){
  for (let j=0; j<array2.length; j++){
    if (array1[i]==array2[j]){
        mutualItems.push(array1[i])
    }
  }
}
console.log(mutualItems)
}

const x  = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
const y = [2,4,6,8,10,12,14,16]

CompareArrays(x, y) 




// Эта же функция тока в стрелочном формате
const CompareArrays2 = (array1, array2) => {
    const mutualItems = []
    
    for (let i=0; i<array1.length; i++){
      for (let j=0; j<array2.length; j++){
        if (array1[i]==array2[j]){
            mutualItems.push(array1[i])
        }
      }
    }
    console.log(mutualItems)
    }
    
    const z  = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]
    const v = [2,4,6,8,10,12,14,16,18,20,22,24,26,28,30]
    
    CompareArrays2(z, v) 