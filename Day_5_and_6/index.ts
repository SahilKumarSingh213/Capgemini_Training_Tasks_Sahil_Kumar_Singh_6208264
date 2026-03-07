// // console.log("hi")

// // // TYPE INFERENCE -> apne aap data type pata laga leta hai

// // let a=10

// // a=20

// // // a="hi" -> ye javaScript mein change ho jata but not in ts

// // // TYPE ANNOTATION
// // let b:string="hello"
// // let c:null = null;
// // let d:undefined=undefined;

// // let g:any=20
// // g="hi"
// // g=true
// // g=undefined

// // let arr:number[]=[10,20,30,40]    //homogenous array ko array khete hai

// // let arr1=["abcd",true,5678]   // heterogenous array ko tuple bolte hai

// // let arr2:[string,boolean,number]=["abcd",true,5678]  // arag specify kar rahe to saare datatypes sequence mein dene padenge 


// // let student:{                     // similar to tuple, jo define kiya hai vo dena padega
// //     name:string,
// //     age:number
// // }={
// //     name:"Sahil",
// //     age:21
// // }

// // let student1:{
// //  name:string,
// //     age?:number         // ? isse jarurat nahi hoti 
// // }={
// //     name:"Sahil",
// // }

// // function greet(namee,agee){               
// //     console.log(` ${namee} and ${agee} `);
// // }

// // greet("sahil",21)



// // function greet(namee?:string,agee:number=24):void {          
// //     console.log(` ${namee} and ${agee} `);
// // }

// // greet("sahil",21)


// // let add=(a,b)=>{
// //     return a+b;
// // }

// // console.log(add(10,20))

// // let arr3: readonly (string|number)[]=[234,"xyz",34356,"defg"];

// // arr3.push(9999);

// interface Person{
//     readonly id:number,
//     name:string,
//     age:number,
//     gender:string
// }

// let obj:Person={
//     id:1234,
//     name:"nimish",
//     age:69,
//     gender:"lesbian"
// }

// // console.log(obj);

// // obj.age=20;

// // obj.id=123

// // console.log(obj);

// interface employee extends Person {
//     company:string
//     employed():string
// }

// let person1:employee={
//     id:101,
//     name:"sahil",
//     age:22,
//     gender:"male",
//     company:"capgemini",
//     employed(){
//         return "in training"
//     }

// }


// console.log(person1,person1.employed());



//! OOPS:-

// Class:-

// blueprint or structure of object


// class demo{
//     //properties
//     //methods
//     //constructor--> special ,method---> only one in js/ts can be made
//     constructor(){

//     }
// }







// class Car {
//    private brand?: string;
//     color: string = "blue";

//     constructor(brand?: string, color?: string) {
//         this.brand = brand;
//         this.color = color;

//         this.display();

//         this.display = () => {
//             console.log("new display");
//         };

//         this.display(); 
//     }

//     display(): void {
//         console.log("display");
//     }

//     start(): void {
//         console.log("this is my car");
//     }
// }

// let c = new Car("BMW", "white");

// console.log(c.display());

// c.display();  

// console.log(c);

// //! ACCESS MODIFIERS 
// /**
//  * public
//  * private
//  * protected
//  */

// console.log(c.brand);


// BASIC INHERITANCE

// class animal{
//     eat(){
//         console.log("all animal eat");
        
//     }
// }

// class cat extends animal{
//     sound(){
//         console.log("meow");
//     }
// }

// let tom = new cat()
// tom.eat();
// tom.sound();

export class Person{
    name:string="abc"
    constructor(name:string){
        this.name=name
    }}
// }

// class teacher extends Person{
//     company:string="test yantra";
//     constructor(company:string,name:string){
//         // super(name);
//     }
//     display(){
//         console.log(this.company,this.name);
//     }
// }

// let t = new teacher("abc","xyz");
// t.display();

function add(a:number,b:number):number{
    return a+b
}
console.log(add(2,3))



