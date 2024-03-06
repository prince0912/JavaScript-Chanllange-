// Generate the power set of a given set
// Given a set S, generate all subsets of it, i.e., find the power set of set S. A power set of any 
//set S is the set of all subsets of S, including the empty set and S itself.
//For example, if S is the set {x, y, z}, then the subsets of S are:


function powerSet(set){
    const  n = set.length;
    const powerSet = [];
    for(let i = 0; i < (1 << n); i++ ){
        const subset = [];
        for(let j = 0; j < n; j++){
            if((i >> j) & 1 ){
                subset.push(set[j]);
            }
        }
        powerSet.push(subset);
    }
    return powerSet;
}

// Example usage
const mySet = ["a", "b", "c"];
const powerSetOfMySet = powerSet(mySet);
console.log(powerSetOfMySet);