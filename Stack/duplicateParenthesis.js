function hasDuplicateParenthesis(expersion){
    let stack =[];
    let count = 0;
    for(let i = 0 ; i < expersion.length ; i++){
        if(expersion[i] === '('){
            stack.push(expersion[i]);
            count++
        }else if(expersion[i] === ")"){
            if(stack.length === 0){
                return true;
            }
            stack.pop();
            count--;
        }
    }
    return false;
}

const expression1 = "((a+b) + ((c+d)))";
const expression2 = "((a+b)+(c+d))+(e+f)";

console.log(hasDuplicateParenthesis(expression1)); 
console.log(hasDuplicateParenthesis(expression2)); 
