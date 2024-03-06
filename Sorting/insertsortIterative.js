// Insertion Sort Algorithm
function insertSortItertive(arr){
    for(let i = 0 ; i<arr.length; i++){
        let current = arr[i];
        let j= i - 1 ;

        while( j >= 0 && arr[j] > current ){
            arr[j + 1] = arr[j];
            j--;
        }   
        arr[j+1] = current;
}
    return arr;
}

let array = [3, 8, 5, 4, 1, 9, -2]
console.log(insertSortItertive(array))
