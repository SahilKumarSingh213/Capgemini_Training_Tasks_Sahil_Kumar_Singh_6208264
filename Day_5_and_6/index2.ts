// import {add} from "./index";
// import { Person } from "./index";

// console.log(add(2,3));


//#// ASYNCHRONOUS PROGRAMMING

/**
 * timer function
 * promises
 * async and await --> ES8 --> 2016 
 */

// function task1(){
//     console.log("task 1");
    
// }

// function task2(){
//     console.log("task 2");
    
// }

// task1()
// task2()

//setTimeOut ---> 3000 ---> onetime
//setInterval ---> 3000 ---> after each iteration it will execute

// console.log("start");
// setTimeout(() => {
//     console.log("task completed");
// },5000)

// function add(a:number,b:number):number{
//     return a+b;

// }

// setInterval(() => {
//         console.log(add(5,5));
// }, 1000);

//  let a=setTimeout(() => {
//     console.log("task completed");
// },5000)

// console.log(typeof(a));



//// Promises:-
/**
 * fullfilled
 * rejected
 * pending
 */


// --> == checks only data
// --> === checks data and dataType

// let p1 = new Promise<string>((resolve, rejected) => {

//   let success = true

//   if (success != true) {
//     running("login successful")
//   } else {
//     notRunning("login unsuccessful")
//   }

// })

// p1.then((ele) => {
//   console.log(ele);
// })
// .catch((err) => {
//   console.log(err);
// })

// console.log(p1);

// function getUser():Promise<string>{
//   return new Promise((resolve,reject)=>{
//     resolve("user is there")
//     reject("user not found")
//   }
//   )
// }

// getUser().catch((ele)=>{
//   console.log(ele);
  
// }
// ).then((res)=>{console.log(res);
// })

// Promise Static Methods


// let p2 = new Promise<number>((resolve) => {
//   let success = true

//   if (success === true) {
//     resolve(10 + 10)
//   }
// })

// p2.then((ele) => {
//   console.log(ele)
// })

// let p3 = new Promise<number>((resolve)=>{
//   resolve(10)
// }
// )

// p3.then(num=> num*10
// ).then(num=>num*20)

 let p4 = new Promise<number>((resolve) => {
  resolve(10)  //10
})

p4
  .then(num => num * 2) //20
  .then((res)=>res*20) //400
  .then((res) => {
    console.log(res) // 400 print
  })