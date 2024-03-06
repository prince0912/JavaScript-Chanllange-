// Add two numbers without using the addition operator

function addWithoutUsingOperator(num1, num2){
    while(num2 !== 0){
        const  carry  = num1 & num2;
        num1 = num1 ^ num2 ;
        num2 = carry << 1;


    }
    return num1

}


console.log(addWithoutUsingOperator(3, 6))