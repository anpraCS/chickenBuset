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

// MENU OPEN

let orderBtn = document.querySelector(".menu-order");
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

orderBtn.addEventListener("click", function () {
  console.log("beli");
});

// MENU CLOSE
