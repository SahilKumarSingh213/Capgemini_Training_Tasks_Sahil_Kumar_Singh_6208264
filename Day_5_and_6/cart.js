var buttons = document.querySelectorAll("button");
buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
        var _a;
        var img = (_a = btn.parentElement) === null || _a === void 0 ? void 0 : _a.querySelector("img");
        var name = img === null || img === void 0 ? void 0 : img.alt;
        if (!name)
            return;
        var cart = localStorage.getItem("cart");
        var items = cart ? JSON.parse(cart) : [];
        items.push(name);
        localStorage.setItem("cart", JSON.stringify(items));
        alert("Added to cart");
    });
});
if (window.location.pathname.includes("cart.html")) {
    var cartDiv_1 = document.getElementById("cartItems");
    var cart = localStorage.getItem("cart");
    var items = cart ? JSON.parse(cart) : [];
    if (items.length === 0) {
        cartDiv_1.innerText = "Cart is empty";
    }
    items.forEach(function (item) {
        var p = document.createElement("p");
        p.innerText = item;
        cartDiv_1 === null || cartDiv_1 === void 0 ? void 0 : cartDiv_1.appendChild(p);
    });
}
