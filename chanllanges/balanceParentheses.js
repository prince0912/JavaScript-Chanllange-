// function to check if a given string has balanced parentheses?

function isBalancedParentheses(str){
    return str.split(' ').reduce(
        (count, char) =>(
            count >= 0 ? count + (
                char === '(' ? 1 : char === ')' ? -1 : 0) : -1 , 0
            )=== 0
        )
}

const str = '(a + b) * (c - d)';
const result = isBalancedParentheses(str);