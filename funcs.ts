// hide js files in ts project: https://stackoverflow.com/questions/31587949/hide-js-map-files-in-visual-studio-code-file-nesting/32604188#32604188

console.log("Hello World")

function toAccountingString(n:number):string{
    return isNegative(n) ? makeNegative(n) : n.toString()
} 

function isNegative(n:number):boolean{
    return n < 0
}

function makeNegative(n:number):string{
    return `(${Math.abs(n)})`
}

// log(toAccountingString(-10))
// log(toAccountingString(-10.9))
// log(toAccountingString(1.03))
// log(toAccountingString(-10099009.8))
// log(toAccountingString(100))

function a(){
    const cat = -10
    const dog = 10
    console.log(cat.toString())
    console.log(dog.toString())
}

a()

function log(n){
    console.log(n)
}