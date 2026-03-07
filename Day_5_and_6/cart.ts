let buttons = document.querySelectorAll("button")

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    let img = btn.parentElement?.querySelector("img")
    let name = img?.alt

    if (!name) return

    let cart = localStorage.getItem("cart")
    let items = cart ? JSON.parse(cart) : []

    items.push(name)

    localStorage.setItem("cart", JSON.stringify(items))

    alert("Added to cart")
  })
})

if (window.location.pathname.includes("cart.html")) {

  let cartDiv = document.getElementById("cartItems")

  let cart = localStorage.getItem("cart")
  let items = cart ? JSON.parse(cart) : []

  if (items.length === 0) {
    cartDiv!.innerText = "Cart is empty"
  }

  items.forEach((item: string) => {
    let p = document.createElement("p")
    p.innerText = item
    cartDiv?.appendChild(p)
  })
}