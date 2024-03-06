//var
var num = 1;
if(num == 1){
    var check = 'inside if'
    let che = 'inside che let'
    //console.log(chk)
}

console.log(check);
//console.log(che);

// Function Scope: Variables declared with var are function-scoped. They are only accessible within the function in which they are declared.

// Function scope & Block scope difference

function chkvarletscope() {
    let x = 10;
    if (true) {
        let y = 20;
        let x=y;
        console.log(x); //20
        console.log(y); //20
    }
    console.log(x); //10
    console.log(y); //Reference error
}
chkvarletscope();




// const : Block scope

function constScope(){
    let x = 10;
    if(true){
        const y = 3;
        console.log(x); //10
        console.log(y); //3
        //y=5; //TypeError: Assignment to constant variable
        //y=x; //TypeError: Assignment to constant variable
    }
    console.log(y); //Reference error
}

constScope();
