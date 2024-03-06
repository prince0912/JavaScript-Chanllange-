// Find majority element

function findMajorityElement(nums){
    let candidate = null;
    let count = 0;

    for(const num of nums){
        if(count === 0){
            candidate = num;
        }

        count += num === candidate ? 1 : -1;

    }

    count = 0
    for(const num of nums){
        if(num === candidate){
            count++;
        }
    }
 
    
    if(count > nums.length / 2){
        return candidate;
    }else{
        return null;
    }

}


// Example usage:
const array1 = [3, 3, 4, 2, 4, 4, 2, 4, 4];
const majorityElement1 = findMajorityElement(array1);
console.log("Majority Element:", majorityElement1);

const array2 = [1, 2, 3, 4, 5];
const majorityElement2 = findMajorityElement(array2);
console.log("Majority Element:", majorityElement2);