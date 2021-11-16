let xmark = document.querySelector(".fa-xmark");
let bars = document.querySelector(".fa-bars");
let navbarList = document.querySelector(".navbar__list");
xmark.addEventListener("click", isHiddenToggle);
bars.addEventListener("click", isHiddenToggle);

function isHiddenToggle(e) {
  bars.classList.toggle("is-hidden");
  xmark.classList.toggle("is-hidden");

  if (e.path[0].classList.contains("fa-bars")) {
    navbarList.style.display = "flex";
  } else {
    navbarList.style.display = "none";
  }
}
