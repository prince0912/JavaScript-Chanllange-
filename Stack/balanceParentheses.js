function balancedParenthese(exp){
    const stack =[];
    for(let i = 0 ; i<exp.length; i++)
    {
        if(exp[i] === '(' || exp[i] === '{' || exp[i] === '[' )
        {
            stack.push(exp[i]);
        }else{
            if(stack.length === 0){
                return false;
            }
            const top = stack.pop();
            if(exp[i] === ')' && top !== '('){
                return false;
            }
            if(exp[i]=== '}' &&  top !=='{'){
                return false;
            }
            if(exp[i] === ']' && top !==']'){
                return false
            }
        }
    }
    return stack.length === 0;
}

const expression = '(()())';
const result = balancedParenthese(expression);
console.log(result)

const expression1 = '(()';
const result1 = balancedParenthese(expression1);
console.log(result1);