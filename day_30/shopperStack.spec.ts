import { test} from "@playwright/test";
let token;
 let baseUrl ="https://www.shoppersstack.com/shopping"
 let shopperId = 377717
 let productId = 53

test("login",async({request})=>{
    let r1 = await request.post(`${baseUrl}/users/login`,{
        data:{
               email: "sahilsingle@gmail.com",
               password: "string",
               role: "SHOPPER"
        }, ignoreHTTPSErrors:true
    })
    let response = await r1.json()
    token = response.data.jwtToken
    // console.log(response)
    // console.log(token)

    let r2 = await request.get(`${baseUrl}/shoppers/377717/orders`,{
      headers:{
        Authorization:`Bearer ${token}`
      },ignoreHTTPSErrors:true
    })
    let response2 = await r2.json()
    // console.log(response2)
    })


    test("wishlist",async({request})=>{
    let r1 = await request.post(`${baseUrl}/users/login`,{
        data:{
               email: "sahilsingle@gmail.com",
               password: "string",
               role: "SHOPPER"
        }, ignoreHTTPSErrors:true
    })
    let response = await r1.json()
    token = response.data.jwtToken
    let r2 = await request.get(`${baseUrl}/shoppers/${shopperId}/wishlist`,{
      headers:{
        Authorization:`Bearer ${token}`
      },ignoreHTTPSErrors:true
    })

    let response2 = await r2.json()

    let r3 = await request.post(`${baseUrl}/shoppers/${shopperId}/wishlist`,{
        data:{
      productId:productId,
      quantity: 1
        },
      headers:{
        Authorization:`Bearer ${token}`
      },ignoreHTTPSErrors:true
    })})
    // console.log(response2)



    test("cart",async({request})=>{
    let r1 = await request.post(`${baseUrl}/users/login`,{
        data:{
               email: "sahilsingle@gmail.com",
               password: "string",
               role: "SHOPPER"
        }, ignoreHTTPSErrors:true
    })
    let response = await r1.json()
    token = response.data.jwtToken

 let r2 = await request.get(`${baseUrl}/shoppers/${shopperId}/carts`,{
      headers:{
        Authorization:`Bearer ${token}`
      },ignoreHTTPSErrors:true
    })
    let response2 = await r2.json()
    console.log(response2)

     let r3 = await request.post(`${baseUrl}/shoppers/${shopperId}/carts`,{
        data:{
      productId:productId,
      quantity: 1
        },
      headers:{
        Authorization:`Bearer ${token}`
      },ignoreHTTPSErrors:true
    })
    console.log(r3.status());

    })

    

    test("order",async({request})=>{
    let r1 = await request.post(`${baseUrl}/users/login`,{
        data:{
               email: "sahilsingle@gmail.com",
               password: "string",
               role: "SHOPPER"
        }, ignoreHTTPSErrors:true
    })
    let response = await r1.json()
    token = response.data.jwtToken

 let r2 = await request.get(`${baseUrl}/shoppers/${shopperId}/orders`,{
      headers:{
        Authorization:`Bearer ${token}`
      },ignoreHTTPSErrors:true
    })
    let response2 = await r2.json()
    // console.log(response2)

        let r3 = await request.post(`${baseUrl}/shoppers/${shopperId}/address`,{
        data:{
    addressId: 101,
    buildingInfo: "Sunrise Apartments, Block A",
    city: "Pune",
    country: "India",
    landmark: "Near Phoenix Mall",
    name: "Rahul Sharma",
    phone: "+91-9876543210",
    pincode: "432101",
    state: "Maharashtra",
    streetInfo: "Magarpatta Road",
    type: "Residential"   
        },     headers: {
      Authorization: `Bearer ${token}`
    },
    ignoreHTTPSErrors: true
    })
    let response3 = await r3.json()
    let addressId = response3.data.addressId

    console.log(addressId);
    

     let r4 = await request.post(`${baseUrl}/shoppers/${shopperId}/orders`,{
        data:{
        address: {
    addressId: addressId,
    buildingInfo: "Sunrise Apartments, Block B",
    city: "Pune",
    country: "India",
    landmark: "Near Phoenix Mall",
    name: "Rahul Sharma",
    phone: "+91-9876543210",
    pincode: "432101",
    state: "Maharashtra",
    streetInfo: "Magarpatta Road",
    type: "Residential"
  },
  paymentMode: "COD"
        },
      headers:{
        Authorization:`Bearer ${token}`
      },ignoreHTTPSErrors:true
    })
    console.log(r4.status());

    })



test("review ", async ({ request }) => {

  const r1 = await request.post(`${baseUrl}/users/login`, {
    data: {
      email: "sahilsingle@gmail.com",
      password: "string",
      role: "SHOPPER"
    },
    ignoreHTTPSErrors: true
  });

  const response = await r1.json();
  token = response.data.jwtToken;


  const r2 = await request.post(`${baseUrl}/reviews/?productId=${productId}`, {
    data: {
      dateTime: "2026-04-01T07:13:15.508Z",
      description: "GOOD",
      heading: "GOOD",
      rating: 5,
      shopperId: shopperId,
      shopperName: "SAHIL Singh"
    },
    headers: {
      Authorization: `Bearer ${token}`
    },
    ignoreHTTPSErrors: true
  });

  const response2 = await r2.json();
  console.log("Review added:", response2);

  const r3 = await request.get(`${baseUrl}/reviews/${productId}`, {
    headers: {
      Authorization: `Bearer ${token}`
    },
    ignoreHTTPSErrors: true
  });

  const response3 = await r3.json();
  console.log("Reviews fetched:", response3);
});

    

    




