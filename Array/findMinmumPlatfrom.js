// Find minimum platforms needed to avoid delay in the train arrival
// Given a schedule containing the arrival and departure time of trains in a station, 
// find the minimum number of platforms needed to avoid delay in any train’s arrival.

function FindMinmumPlatforms(arrival, depature){
    arrival.sort((a,b) => a - b);
    depature.sort((a,b) => a - b);

    let platformsNeed = 1;
    let result = 1;
    let i = 1;
    let j = 0;

    while(i < arrival.length && j < depature.length ){
        if(arrival[i] <= depature[j]){
            platformsNeed++
            i++;
        }else{
            platformsNeed--;
            j++;
        }
        result = Math.max(result, platformsNeed);
    }
    return result;
}


const arrival = [2.00, 2.10, 3.00, 3.20, 3.50, 5.00]
const departure = [ 2.30, 3.40, 3.20, 4.30, 4.00, 5.20 ]

console.log("Minmum Platforms Need:", FindMinmumPlatforms(arrival, departure))