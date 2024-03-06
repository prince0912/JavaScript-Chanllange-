// Fibonacci sequence calculate 

function Fib(n){
    if(n <= 1){
        return 1
    }
    return Fib(n - 1)+Fib(n- 2);
}

console.log(Fib(9));
console.log(Fib(5));
