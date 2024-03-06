// Longest Common Subsequence Problem

function LongestCommonSubsequence(str1, str2){
    const m = str1.length;
    const n = str2.length;

    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    // build dp
    for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

    
    return dp[m][n]
}

const sequence1 = "ABCBDAB";
const sequence2 = "BDCAB";

const result = LongestCommonSubsequence(sequence1, sequence2);
console.log(result)
console.log(`Length of Longest Common Subsequence: ${result}`);



////////////// return Longest Common Subsequence String //////////

function LCS(str1, str2){
    const m = str1.length;
    const n = str2.length;

    const dp = Array.from({length:m + 1}, ()=>Array(n + 1).fill(0));

    for(let i = 1 ; i<=m; i++){
        for(let j = 1; j<=n; j++){
            if(str1[i - 1] === str2[j - 1]){
                dp[i][j] = dp[i - 1][j - 1] + 1; 
            }else{
                dp[i][j]=Math.max(dp[i - 1][j], dp[i][j - 1])
            }
        }
    }


    // Reconstructing the LCS

    let index = dp[m][n]
    const lcs = Array(index).fill(null);

    let i = m , j = n;
    while( i > 0 && j > 0){
        if(str1[i - 1] === str2[j - 1]){
            lcs[index - 1] = str1[ i - 1];
            i--;
            j--;
            index--;
        }else if(dp[i - 1][j] > dp[i][j - 1]){
            i--
        }else{
            j--
        }
    }

    return lcs.join('')
}

const X = "ABCBDAB";
const Y = "BDCAB";
console.log(LCS(X, Y)); 



/////////////// other way recursion ////////////////////////

function longestCommonSubSequence(str1, str2, m, n){
    if(m == 0 || n == 0){
        return 0
    }
    if (x[m - 1] == y[n - 1]) {
        return 1 + longestCommonSubSequence(str1, str2, m - 1, n - 1);
      } else {
        return Math.max(longestCommonSubSequence(str1, str2, m, n - 1), longestCommonSubSequence(str1, str2, m - 1, n));
      }

}

const x = "AGGTAB";
const y = "GXTXAYB";
const m= x.length;
const n= y.length;

const resultRes = longestCommonSubSequence(x, y, m, n)
console.log(`length of  LCS ${resultRes}`)

