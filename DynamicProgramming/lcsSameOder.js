//  finding the longest subsequence present in given two sequences in the same order

function LCSSameOrder(str1, str2){
    const m = str1.length;
    const n = str2.length;

    // Create a 2D array to store the lengths of LCS
    const dp = Array.from({length:m+1},()=>Array(n+1).fill(0))

    // Build the dp Array
    for(let i = 1 ; i<=m; i++){
        for(let j=1; j<=n; j++){
            if(str1[i - 1] === str2 [j - 1]){
                dp[i][j] = dp[i-1]+[j-1]+1;
            }else{
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])
            }
        }
    }

    // Reconstruct the LCS
    let i = m;
    let j = n;
    const lcs = []

    while( i > 0 && j > 0){
        if(str1[ i - 1] === str2 [ j - 1]){
            lcs.unshift(str1[i - 1]);
            i--;
            j--;
        }else if( dp[i-1][j] > dp[i][j-1]){
            i--;
        }else{
            j--
        }
    }
    return lcs.join('');
}


const sequence1 = "ABCBDAB";
const sequence2 = "BDCABA";
let result   = LCSSameOrder(sequence1, sequence2)
console.log(`Longest Common Subsequence: ${result}`)
