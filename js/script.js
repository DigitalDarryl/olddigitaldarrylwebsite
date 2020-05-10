/* ------ SCROLL SMOOTH -------- */

const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 800
});

const cookieContainer = document.querySelector(".cookie-container");
const privacyBtn = document.querySelector(".privacy-btn");

privacyBtn.addEventListener("click", ()=> {
  cookieContainer.classList.remove("active");
  localStorage.setItem("cookieBannerDisplayed", true);
});

setTimeout( () => {
  if(!localStorage.getItem("cookieBannerDisplayed")){
  cookieContainer.classList.add("active");
  }
},3000);