//console.log("Hello using JS")
// const a=89;//here we can also use let or var
// console.log("a="+a);

// let a=79;
// if(a>30){
//     let a=100;
//     console.log("a inside the block=" +a);

// }
// console.log("a outside the block=" +a);

// var b=90;
// if(b>30){
//     var b=100;
//     console.log("b inside the block=" +b);
// }
// console.log("b outside the block=" +b);

//using function as expression
// const sum=function(a,b){
//     return a+b;
// }
// sum(10,20);
// const data=sum(10,20);
// console.log("Result= "+data);

// const msg=(mymsg)=>{
//     console.log("Hello "+mymsg);
// }
// msg("Alice");

// const mysqrt=(value)=>{
//     console.log("Square root of "+value+" is "+Math.sqrt(value));
// }
// mysqrt(25);
// return Math.sqrt(value);
// }
// const result=mysqrt(25);
// console.log("Square root of 25 is "+result); u can use this method also to return the value and store it in a variable and then print it.

//IIFE (Immediate Invoked Function Expression)
// (()=>{console.log("HELLOoooooooooooooooo IIFE")})();

function sum(a,b){
    return a+b;
}
const result=sum(10,20);
console.log("sum " +result);
