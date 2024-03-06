//The space-optimized version of the Longest Common Subsequence (LCS) algorithm uses only
// two rows instead of a 2D array, reducing the space complexity from O(m * n) to O(min(m, n)).

function LongestCommonSubsequenceSpaceOptimized(str1, str2){
    const m = str1.length;
    const n = str2.length;

    // Create two rows to store the lengths of LCS
    const dp = [new Array(n+1).fill(0), new Array(n+1).fill(0)]

    // build the dp array
    for(let i = 1 ; i <= m; i++){
        for(let j = 1; j <= n; j++){
            if(str1[i - 1] === str2[j - 1]){
                dp[i % 2][j] = dp[(i - 1)% 2][j - 1] + 1;
            }
            else{
                dp[i % 2][j] = Math.max(dp[(i - 1) % 2][j], dp[i % 2][j - 1])
        }
    }
}
 return dp[m % 2][n];

}

const str1 = "ABCBDAB";
const str2 = "BDCABA";
let result   = LongestCommonSubsequenceSpaceOptimized(str1, str2);
console.log(`Length of Longest Common Subsequence: ${result}`);