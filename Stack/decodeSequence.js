// Decode a given sequence to construct a minimum number without repeated digits
//Given a sequence of length <= 8 consisting of I and D, where I denotes the increasing sequence and 
//D denotes the decreasing sequence, decode the sequence to construct a minimum number without repeated
// digits.

function decodeSequence(sequence){
    let results = [];
    let currretDigit = 1;
    let decresingCount  = 0;

    for(let i = 0 ; i<sequence.length; i++){
       if(i === sequence.length || sequence[i] === 'I')
       {
        results.push(currretDigit + decresingCount);
        currretDigit += decresingCount +1;
        decresingCount = 0;
       }else if(sequence[i] === 'D'){
        decresingCount++;
       }
    }

    return results.join("");
}

const sequence = "IDIDII";
const minimumNumber = decodeSequence(sequence);
console.log(`The minimum number for sequence '${sequence}' is: ${minimumNumber}`);