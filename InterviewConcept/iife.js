// IIFE:- stands for Immediately Invoked Function Expression.
// It’s a JavaScript design pattern where a function is executed as soon as it’s defined.
// The primary purpose of using an IIFE is to create a new scope for variables, preventing them from polluting the global scope.


var myArea = (function(){
    var  privateVariable = 10;
    function privateFunction(){
        console.log("Private function is called");
    }

    return {
        publicFunction:function(){
            console.log("Publice function is called");
        }
    };
})();

myArea.publicFunction()
// myArea.privateFunction()
myArea.privateVariable

// Encapsulation: Variables declared inside the IIFE are not accessible from the outside scope, thus preventing conflicts with other scripts.

// Avoiding Global Scope Pollution: Since variables are contained within the IIFE, they don’t clutter the global scope, reducing the chances of naming conflicts.