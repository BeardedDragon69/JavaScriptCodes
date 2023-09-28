/*
for(let i =0; i<5;i++){
    console.log(i)
}


//factorial of a number
fact=1
n= prompt("Enter the value of n")
n=Number.parseInt(n)
for(let i=1;i<=n;i++){
    fact=fact*i
}
console.log("The value of the factorial of "+ n +"is" + fact)
 */

let obj={
    Souradeep:90,
    Unmish:91,
    Anuj:92,
    Dipak:93,
    Arpit:94
}

for(let a in obj){
    console.log("Marks of "+ a +" are "+obj[a])
}
console.log("\n" + obj["Souradeep"])

// the for of loop is mainly used for array's

for(let b of "Souradeep"){
    console.log("\t"+b) //remember string is nothing but an array of characters
}

