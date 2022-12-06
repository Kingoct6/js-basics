var a=123
a=12
let b = "carnut"
b=12
const c= null
let d
console.log(a,b,c,d)

console.log(a > b)

if(a>b){
    console.log("A is greater than B")
} else if(a=b){
    console.log("A is equal to B")
}else{
    console.log("B is greater than A")
}

//for 
for(let i=0;i<10;i++){
    console.log(i)
}

//compound data types
//object
// json - javascript object notation
const a1={
    name :"Carlos",
    surname : "Sainz",
    school : {
        name :"Redbull",
        class :"2015-55"
    },
};
console.log(a1.school.name);
// console.log(a1.university.name);

// array -> list of conc elements
const arr=["Hello",55,undefined,null,true]
console.log(arr[1])

// error handling
// try{
//     console.log(a1.university.name);
// } catch(err){
//     console.log("Something failed")
// }

//arguments
function square(n){
    return n*n;
}
console.log(square(63))
console.log(square(63855516n))