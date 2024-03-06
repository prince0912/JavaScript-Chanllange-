// Check if an expression is balanced or not
//Given a string containing opening and closing braces,
//  check if it represents a balanced expression or not.

function isBalancedExpersion(exp){
    let fleg = true;
    let count = 0;

    for(let i =0 ; i<exp.length; i++){
        if(exp[i]==='(')
        {
            count += 1;
        }else{
            count -=1
        }

        if(count < 0){
            fleg = false;
            break;
        }

    }

    if(count != 0){
        fleg = false
    }

    if(fleg === true){
        return 'expersion is balanced'
    }else{
        return 'expersion is not balanced'
    }

}


let exp1 = "((()))()()"
console.log(isBalancedExpersion(exp1));

let exp2 = "{()}[), {(})"
console.log(isBalancedExpersion(exp2));