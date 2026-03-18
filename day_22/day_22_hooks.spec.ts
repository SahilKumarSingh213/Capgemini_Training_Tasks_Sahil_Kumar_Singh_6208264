import { test } from "@playwright/test"

// test.beforeAll("",async()=>{
//     console.log("before all");
    
// })

// test.beforeAll("",async()=>{
//     console.log("before all");
    
// })

// test("test1",async()=>{

//     console.log("test1")
    
// })

// test("test2",async()=>{

//     console.log("test2")
    
// })




// test.beforeAll("",async()=>{
//     console.log("before all");
    
// })

// test("test1",async()=>{

//     console.log("test1")
    
// })

// test("test2",async()=>{

//     console.log("test2")
    
// })


// test.afterAll("",async()=>{
//     console.log("after all");
    
// })

// test("test1",async()=>{

//     console.log("test1")
    
// })

// test("test2",async()=>{

//     console.log("test2")
    
// })


test.afterEach("",async()=>{
    console.log("after each");
    
})

test("test1",async()=>{

    console.log("test1")
    
})

test("test2",async()=>{

    console.log("test2")
    
})
