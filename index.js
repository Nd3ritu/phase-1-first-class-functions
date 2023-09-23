


function receivesAFunction(spy){
      spy("Hey there");
}
receivesAFunction()

function returnsANamedFunction(){
    return function age(num1 = 2){
        return num1**num1;
    }
}
returnsANamedFunction()

function returnsAnAnonymousFunction (){
    return function(){
        return "I am an Anonymous function";
    }
}
returnsAnAnonymousFunction()

