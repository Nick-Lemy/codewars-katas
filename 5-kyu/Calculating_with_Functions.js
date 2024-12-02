function zero(func){
    let number = 0
    return func(number)
}
function one() {
    return 1
}
function two() {
    return 2
}
function three() {
    return 3
}
function four() {
    return 4
}
function five() {
    return 5
}
function six() {
    return 6
}
function seven() {
    return 7
}
function eight() {
    return 8
}
function nine() {
    return 9
}

function plus() {
    return this.number;
}


zero(plus());