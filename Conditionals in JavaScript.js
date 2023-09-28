let a= prompt("Whats your age?")
a= Number.parseInt(a)//converting a string to a number
console.log(typeof a)
if(a<0){
    alert("This is a valid age")
}
else if(a<9){
    alert("You are a kid you cannot even think of driving")
}
else{
    alert("The age is not greater than 0")
    prompt('Enter an age greater tha n 0')
}

console.log("You", (a<18&&a>70)?" can not drive":"can drive")

