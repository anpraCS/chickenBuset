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
