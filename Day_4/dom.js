// console.log(window);
// var a=10;
// let b=10;
// const c=10;

// console.log(window);

// console.log("hello");
// window.console.log("hello");

// console.log(document);
// console.log(document.body);
// console.log(document.title);
// console.log(document.head);

//!DOM --> DOCUMENT OBJECT MODEL
// it is a tree like structure which contains node
// console.log(document.body.childNodes); 
// console.log(document.body.children);
// console.log(document.body.childNodes[0]); 
// console.log(document.body.children[2]);

// let btn=console.log(document.body.childNodes[0]); 
// console.log(btn.parentElement);
// console.log(btn.parentNode);

// console.log(document.body.children[3]);
// let div=document.body.children[3];
// console.log(div1.firstElementChild);

// lastElementChild
// previousElementSibling
// previousSibling

// dom direct access methods:-

// // getElementById -> it return element
// let a1=document.getElementById("head")
// console.log(a1)

// let a2 = document.getElementsByClassName("head");
// let convertedArray = Array.from(a2);

// convertedArray.map((ele) => {
//     ele.style.color = "red";
// });


//%%%% call back and higher order function


// by name
// document.getElementById("btn1").onclick = function () {
//     let elements = document.getElementsByName("title");
//     let arr = Array.from(elements);

//     arr.map((ele) => {
//         ele.style.fontSize = "40px";
//     });
// };

// by tag
// document.getElementById("btn2").onclick = function () {
//     let elements = document.getElementsByTagName("p");
//     let arr = Array.from(elements);

//     arr.map((ele) => {
//         ele.style.fontSize = "30px";
//     });
// };

    // let element = document.querySelector(".head");
    // console.log(element);
 
//! CreateElement

// let img1 = document.createElement("img")
// console.log(img1);

// img1.setAttribute("src","data:image/jpeg;base64,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")
// document.body.append(img1)

// let h1=document.createElement("h1")
// h1.innerHTML="javascript"
// document.body.append(h1)

// let p=document.createElement("p")
// p.textContent="pyalwright"
// p.setAttribute("id","p1")
// document.body.append(p)
// console.log(p);
// p.removeAttribute("id");
// console.log(p);

// EVENT HANDLING

// // inline handling
// let button1=document.getElementById("btn1")

// function demo(){
//     alert("button clicked")
// }
// // button1.onclick=function demo(){
// //     alert("clicked")
// // } 

// //! addeventlistner

// button1.addEventListener("click",()=>{

// }

// )


let button1 = document.getElementById("btn1")

let isBlack = false

button1.addEventListener("click", () => {

    if(isBlack === false){
        document.body.style.backgroundColor = "black"
        isBlack = true
    } 
    else {
        document.body.style.backgroundColor = "white"
        isBlack = false
    }

})

let plusBtn = document.getElementById("plus")
let minusBtn = document.getElementById("minus")
let countText = document.getElementById("count")

let count = 0 

plusBtn.addEventListener("click", () => {
    count++
    countText.innerText = count
})

minusBtn.addEventListener("click", () => {
    count--
    countText.innerText = count
})




