// Here is the kata's link https://codewars.com/kata/511ed4593ba69cba1a000002/javascript
// Have fun :D !

Function.prototype.wrap = function (func) {
    return (...arguments) => func
}

function speak(name) {
    return "Hello " + name;
}

speak = speak.wrap(function (original, yourName, myName) {
    greeting = original(yourName);
    return greeting + ", my name is " + myName;
})

var greeting = speak("Mary", "Kate");
console.log(greeting)