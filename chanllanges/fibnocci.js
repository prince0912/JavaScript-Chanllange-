function fibonacciSeries(num){
    let fibo = [0, 1];
    for(let i = 2 ; i<num; i++ ){
        fibo[i]= fibo[i - 1]+ fibo[i - 2];
    }
    return fibo
}

console.log(fibonacciSeries(5));
console.log(fibonacciSeries(10))
console.log(fibonacciSeries(9))