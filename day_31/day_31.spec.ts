import {test,request,expect} from "@playwright/test"
import path from "path"
import fs from "fs"

let data=JSON.parse(fs.readFileSync(path.join(__dirname,"day_31.json")));

test('day 31',async()=>{
    let req=await request.newContext();
    let baseurl=data.baseurl

    
    let r1=await req.post(`${baseurl}/auth`,{
        data:data.login
    })
    await expect(r1.status()).toBe(200);
    let token=(await r1.json()).token


    let r2=(await req.get(`${baseurl}/booking`))
    await expect(r2.status()).toBe(200);
    let response2 = await r2.json()
    console.log(response2)


    let r3=await req.get(`${baseurl}/booking/${(await r2.json())[0].bookingid}`)
    await expect(r3.status()).toEqual(200);
    let response3 = await r3.json()
    console.log(response3)


    let r4=await req.post(`${baseurl}/booking`,{
        data:data.post
    })
    await expect(r4.status()).toEqual(200);
    let response4 = await r4.json()
    console.log(response4);

    let bookingid=(response4).bookingid

    let r5=await req.put(`${baseurl}/booking/${bookingid}`,{
        headers:{
            Cookie: `token=${token}`
        },
        data:data.update
    })
    await expect(r5.status()).toEqual(200);
    console.log(await r5.json())
})