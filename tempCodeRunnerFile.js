// console.log("Hello using JS")
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

// using function as expression
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

// IIFE (Immediate Invoked Function Expression)
// (()=>{console.log("HELLOoooooooooooooooo IIFE")})(

// function sum(a,b){
//     return a+b;
// }
// const result=sum(10,20);
// console.log("sum " +result);

// function sum(a,b){
//     return a+b;
// }
// function sumwithMsg(clbk,msg){
//     const result=clbk(20,40);
//     console.log(msg+":" +result);
// }
// sumwithMsg(sum,"Hey using calculation with js")


// function login(msg,error){
//     if(error){
//         console.log("Error is" +error);
//     }
//     else{
//         console.log("Welcome "+msg);
//     }
// }

// function loginVerification(username,password,clbk){
// if(username=="Alice" && password=="12345"){
//     clbk("Alice",null);
// }else{
//     clbk(null,"Invalid username or password");
// }
// }
// loginVerification("Alice","12345",login);

// function randomnumberRepeated(num, clbk){
//    let randomNum=Math.floor(Math.random()*10);
//    clbk(randomNum);
// }
// randomnumberRepeated(10,(result)=>console.log("Random Number:", result));

// console.log("First")
// setTimeout(()=>(console.log("Second")),1000)

// for(i=0;i<1000;i++){
//     console.log("Second")
// }
// console.log("Third")

// callback hell
// setTimeout(()=>{
//     setTimeout(()=>{
//         setTimeout(()=>{
//             setTimeout(()=>{
//                 setTimeout(()=>{
//                     setTimeout(()=>{
//                         setTimeout(()=>{
//                             setTimeout(()=>{
//                                 setTimeout(()=>{
//                                     setTimeout(()=>{
//                                         console.log("Hello from another world")
//                                     },1000)
//                                 },1000)
//                             },1000)
//                         },1000)
//                     },1000)
//                 },1000)
//             },1000)
//         },1000)
//     },1000)
// },1000)

// Promises

// mypromise = new Promise((resolve,reject)=>{
//     username="admin";
//     password="12345";
//     if(username=="admin" && password=="12345"){
//         resolve("Login successful");
//     }else{
//         reject("Login Failed");
//     }
// })

// mypromise.then((msg)=>{
//     console.log(msg)
// }).catch((msg)=>{
//     console.log(msg)
// }).finally(()=>{
//     console.log("All the resources have been closed")
// })
