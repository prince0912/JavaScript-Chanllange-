// Finding all the longest subsequences present in two sequences in the same order involves 
// extending the dynamic programming approach. 

function allLongestCommonSubsequences(str1, str2){
    const m = str1.length;
    const n = str2.length;

    const dp = Array.from({length:m+1}, ()=>Array(n + 1).fill(0));

    for(let i = 1 ; i <= m; i++){
        for(let j = 1; j <=n; j++ ){
            if(str1[i - 1] === str2[j - 1]){
                dp[i][j] = dp[i - 1][j - 1] +1;
            }else{
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    // Helper function to backtrack and find all LCS

    function backtrack(i,j){
        if(i === 0 || j === 0){
            return ['']
        }
        
        if(str1[i - 1] === str2[j - 1]){
            const lcs = backtrack(i - 1, j - 1);
            return lcs.map(subSeq => subSeq + str1[i - 1]); 
        }

        if(dp[i - 1][j] > dp[i][j - 1]){
            return backtrack(i - 1, j);
        }else if(dp[i][j - 1] > dp[i - 1][j]){
            return backtrack(i, j - 1);
        }else{
            const top = backtrack(i - 1, j);
            const left = backtrack(i, j - 1);
            return [...top, ...left]
        }
    }

    // Find All LCS 
    const allLCS = backtrack(m , n);
    
   // Filter out duplicates
    const uniqueLCS = Array.from(new Set(allLCS))

    return uniqueLCS

}

const sequence1 = "ABCBDAB";
const sequence2 = "BDCABA";
let result   = allLongestCommonSubsequences(sequence1, sequence2);
console.log(`All Longest Common Subsequences: ${JSON.stringify(result)}`);
