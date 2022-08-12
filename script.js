const hero = document.querySelector(".container .hero");
const gambar = document.querySelectorAll(".list-gambar img");
let id = 0;
hero.addEventListener("click", function (e) {
  if (e.target.className == "next") {
    id++;
    if (id > gambar.length) id = 0;
    hero.style.backgroundImage = `url(${gambar[id].src})`;
  } else if (e.target.className == "prev") {
    id--;
    if (id < 0) id = gambar.length - 1;
    hero.style.backgroundImage = `url(${gambar[id].src})`;
  }
  e.preventDefault();
});

const menuToggle = document.querySelector(".menu-toggle input");
menuToggle.addEventListener("click", function () {
  document.querySelector("nav ul").classList.toggle("slide");
  document.body.classList.toggle("hidden");
});
