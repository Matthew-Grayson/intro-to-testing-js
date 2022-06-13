// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function foo() {
    return 2;
}

function sayHello(input) {
    if(isNaN(Number(input)) && input !== undefined) {
        return `Hello, ${input}!`
    }
    else {
        return "Hello, World!"
    }
}

function isFive(input) {
    return (parseInt(input) === 5)
}