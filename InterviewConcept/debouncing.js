let button = document.getElementById('debouceId');

function tettDebounce(fun,dealy){
    let timer = 0;
    return function(){
        clearTimeout(timer);
        timer = setTimeout(function(){
            fun.apply(this);
        }, dealy);
    };
}

button.addEventListener(
    "click", tettDebounce(function(){
        calculateLayout(20,30);
    },2000)
);


function calculateLayout(a,b){
    document.getElementById("result").innerHTML = a * b;
}