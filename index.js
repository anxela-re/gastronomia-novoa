import AOS from "./node_modules/aos";
import Splide from "./node_modules/@splidejs/splide";

AOS.init();

let offsetMarList, countMarList, offsetTierraList, countTierraList;
const marList = document.querySelector("#mar-category-list");
const seeMoreMarBtn = document.querySelector("#seeMoreMarBtn");
const offsetMarListEl = document.querySelector("#offsetMarList");
const countMarListEl = document.querySelector("#countMarList");

const tierraList = document.querySelector("#tierra-category-list");
const seeMoreTierraBtn = document.querySelector("#seeMoreTierraBtn");
const offsetTierraListEl = document.querySelector("#offsetTierraList");
const countTierraListEl = document.querySelector("#countTierraList");

offsetMarList = 10;
offsetTierraList = 10;
if (marList) {
  countMarList = marList.children.length;
  offsetMarListEl.textContent = offsetMarList;
  countMarListEl.textContent = countMarList;
}

if (seeMoreMarBtn) {
  seeMoreMarBtn.addEventListener("click", () => {
    if (marList) {
      let top =
        offsetMarList + 6 < countMarList ? offsetMarList + 6 : countMarList;
      for (let i = offsetMarList; i < top; i++) {
        const item = marList.children.item(i);
        if (item) item.style.display = "inherit";
      }
      offsetMarList = top;
      if (offsetMarList === countMarList) {
        seeMoreMarBtn.disabled = true;
      }
      offsetMarListEl.textContent = offsetMarList;
    }
  });
}
if (tierraList) {
  countTierraList = tierraList.children.length;
  offsetTierraListEl.textContent = offsetTierraList;
  countTierraListEl.textContent = countTierraList;
}

if (seeMoreTierraBtn) {
  seeMoreTierraBtn.addEventListener("click", () => {
    if (tierraList) {
      let top =
        offsetTierraList + 6 < countTierraList
          ? offsetTierraList + 6
          : countTierraList;
      for (let i = offsetTierraList; i < top; i++) {
        const item = tierraList.children.item(i);
        if (item) item.style.display = "inherit";
      }
      offsetTierraList = top;
      if (offsetTierraList === countTierraList) {
        seeMoreTierraBtn.disabled = true;
      }
      offsetTierraListEl.textContent = offsetTierraList;
    }
  });
}

if (document.querySelector(".splide")) {
  new Splide(".splide", {
    type: "loop",
    perPage: Math.floor(document.querySelector("body").clientWidth / 350),
    height: "9rem",
    cover: true,
    breakpoins: {
      640: {
        height: "6rem",
      },
    },
    gap: "1rem",
  }).mount();
}

let logos = document.getElementsByClassName("logo");
// if(logos.length) {
//   for( let logo of logos) {
//     console.log(logo)
//   }
// }
function checkPosition() {
  if (logos.length) {
    for (let logo of logos) {
      let positionFromTop = logo.getBoundingClientRect().top;
      console.log(positionFromTop - window.innerHeight <= 0);
      if (positionFromTop - window.innerHeight <= 0) {
        logo.classList.add("logo-animation");
      } else {
        logo.classList.remove("logo-animation");
        logo.classList.add("init-logo")
        console.log(logo.classList)
      }
    }
  }
}
window.addEventListener("scroll", checkPosition);
function init() {
  checkPosition();
}
init();
