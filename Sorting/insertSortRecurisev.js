// Insertion Sort Algorithm

function insertionSortRecurcive(arr, n=arr.length){
    if(n<1){
        return arr
    }    

    insertionSortRecurcive(arr, n-1);

    const key = arr[n - 1];
    let j = n - 2 ;

    while(j >= 0 && arr[j] > key){
        arr[j + 1] = arr[j];
        j--;
    }
    arr[j + 1] = key;

    return arr;

}

let array = [3, 8, 5, 4, 1, 9, -2];
console.log(insertionSortRecurcive(array))