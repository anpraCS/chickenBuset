// NAVBAR OPEN

const navList = document.querySelector(".list");
const menuBtn = document.querySelector(".menu-btn");

menuBtn.addEventListener("click", function () {
  navList.classList.toggle("slide-navbar");
});

document.addEventListener("click", function (e) {
  if (!menuBtn.contains(e.target) && !navList.contains(e.target)) {
    navList.classList.remove("slide-navbar");
  }
});

// NAVBAR CLOSE

// SHOPPING CART OPEN

let shoppingCart = document.querySelector(".orderCart");
let shoppingBtn = document.querySelector(".shopping-cart-btn");

shoppingBtn.addEventListener("click", function () {
  shoppingCart.classList.toggle("slide-order");
});

document.addEventListener("click", function (e) {
  if (!shoppingBtn.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("slide-order");
  }
});

// SHOPPING CART CLOSE

// MENU OPEN

function annoucementFromOrdered(productName, productPrice) {
  alert(`Anda telah membeli ${productName} seharga Rp. ${productPrice}`);
}

const buyButtons = document.querySelectorAll(".menu-order");

buyButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const detailProduct = this.closest(".details");
    const productName = detailProduct.querySelector("h5").innertext;
    const productPrice = detailProduct.querySelector("p").innerText;

    annoucementFromOrdered(productName, productPrice);
  });
});

// MENU CLOSE
