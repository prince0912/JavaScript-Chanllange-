//  Eliminate all even integers from a matrix.

function removeEvenItenger(inputData){
    const oddData = []
    for(let i = 0 ; i<= inputData.length; i++){
        if(inputData[i]%2 === 0){
            oddData.push(inputData[i])
        }
    }
    return oddData
}

const inputData = [4, 1, 9, 10, 15, 22, 5, 14]

console.log(removeEvenItenger(inputData))
