// Selection Sort Algorithm Iterative 

function selectionSort(arr){
    for(let i = 0; i<arr.length - 1; i++){
        let minIndex = 1;
        for(let j = i+1; j<arr.length; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }
        [arr[i],arr[minIndex]] =[arr[minIndex], arr[i]];
    }

    return arr;
}

const array = [3, 8, 5, 4, 1, 9, -2];
console.log(selectionSort(array))

