function selectionSortRecursive(array, n= array.length){
    if(n <= 1){
        return arr
    }

    let minIndex = 0;

    for(let i = 0; i < n ; i++){
        if(arr[i] < arr[minIndex]){
            minIndex = i;
        }
    }
    [arr[0], arr[minIndex]] = [arr[minIndex], arr[0]]

    selectionSortRecursive(arr.slice(1), n - 1);

    return arr;
}

const array = [3, 8, 5, 4, 1, 9, -2];
console.log(selectionSortRecursive(array))

