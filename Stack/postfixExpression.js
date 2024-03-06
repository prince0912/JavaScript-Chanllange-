// Evaluate a postfix expression
// 82/ will evaluate to 4 (8/2) 
//138*+ will evaluate to 25 (1+8*3) 
//545*+5/ will evaluate to 5 ((5+4*5)/5)

// The idea is to traverse the given postfix expression from left to right. 
// If the current character of the expression is an operand, push it into the stack; 
// otherwise, if the current character is an operator, pop the top two elements from the stack, 
// evaluate them using the current operator and push the result back into the stack. When all
//  the expression characters are processed, we will be left with only one element in the stack containing
//   the value of a postfix expression.

function evaluatePostfixExpersion(exp){
    let stack =[];
    

    for(let i = 0; i < exp.length; i++){
        const currentChar = exp[i];
        
        if(!isNaN(parseFloat(currentChar)))
        {
            stack.push(currentChar)
        }
        else{
            const operand2 = stack.pop();
            const operand1 = stack.pop();

            switch(currentChar){
                case '+':
                     stack.push(operand1 + operand2);
                    break;
                case '-':
                    stack.push(operand1 - operand2)
                    break;
                case '*':
                    stack.push(operand1 * operand2)
                    break;
                case '/':
                    stack.push(operand1 / operand2)
                    break;
                default:
                    throw new Error('Invalid operator: ' + currentChar);
            
            }
        }
        console.log(stack)
    }
 return stack.pop()
}

const postfixExpression = "82/";
const result = evaluatePostfixExpersion(postfixExpression);
console.log(result)


const postfixExpression2 = '138*+';
const result1 = evaluatePostfixExpersion(postfixExpression2);
console.log(`Result of ${postfixExpression2} is ${result1}`);