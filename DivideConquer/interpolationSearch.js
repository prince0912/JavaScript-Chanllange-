// Interpolation search is an algorithm for searching for a specific key value in a sorted array. 
//It works on the assumption that the values in a sorted array are uniformly distributed.

function interpolationSearch(arr, k){
    let n = arr.length;
    let low = 0 , high = n - 1;
    
    while(low <= high &&  k >= arr[low] &&  k <= arr[high] ){
        let pos = low + Math.floor(((k - arr[low])*(high - low))/(arr[high] - arr[low]));

        if(arr[pos] < k){
            low = pos + 1;
        }else if(arr[pos]> k){
            high = pos -1
        }
        else{
            return pos
        }
    }
    return -1

}