var a = process.argv
var x = parseInt(a[2])
var y = parseInt(a[3])
var opr = a[4]

console.log("Number 1 :",x)
console.log("Number 2 :",y)

switch(opr) {
    case '+' : 
        result = x+y
        console.log(`${x} + ${y} = ${result}`)
        break
    case '-' :
        result = x-y
        console.log(`${x} - ${y} = ${result}`)
        break
    case '*' :
        result = x*y
        console.log(`${x} * ${y} = ${result}`)
        break
    case '/' :
        result = x/y
        console.log(`${x} / ${y} = ${result}`)
        break
    default :
        console.log("Invalid operator.")
        break
}