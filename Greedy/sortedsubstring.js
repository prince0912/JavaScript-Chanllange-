// Shortest Superstring Problem
// Given a list of strings where no string is a substring of another, 
//find the shortest string that contains each string in the list as a substring.

//For example,
// Input:  [CATGC, CTAAGT, GCTA, TTCA, ATGCATC]
// Output: The shortest superstring is GCTAAGTTCATGCATC GCTAAGTTCATGCATC is the shortest possible 
// string such that it contains every string in the input list as its substring. 
// GCTAAGTTCATGCATC
// GCTAAGTTCATGCATC
// GCTAAGTTCATGCATC
// GCTAAGTTCATGCATC
// GCTAAGTTCATGCATC


function overlap(a, b){
    for(let i = Math.min(a.length, b.length); i>0; i--){
        if(a.slice(-i) === b.slice(0, i)){
            return i;
        }
    }
    return 0;
}


function mergeStrings(a, b){
    const overlapLength =overlap(a,b);
    return a + b.slice(overlapLength);

}


function findSortestSuperSubstring(strings){
    while(strings.length > 1){
        let maxOverlap = 0;
        let pair = [];

        for(let i = 0; i<strings.length; i++){
            for(let j=i+1; j<strings.length; j++ ){
             const currentOverlap = overlap(strings[i], strings[j]);

             if(currentOverlap > maxOverlap){
                maxOverlap = currentOverlap;
                pair = [i , j];
             }
            }
        }

        if(maxOverlap > 0){
            const [i , j] = pair;
            const merged = mergeStrings(strings[i], strings[j])

            strings.splice(j,1);
            strings[i] = merged;
        }else{
            break;
        }
    }

    return strings[0];
}


const inputStrings = ["catg", "gc", "c", "dog", "og"];
const result = findSortestSuperSubstring(inputStrings);

console.log("Shortest Superstring:", result);