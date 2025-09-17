

const accordionItems = document.getElementsByClassName("accordion__item");
const accordionText = document.getElementsByClassName("accordion__text");
const iconPlus = document.getElementsByClassName("accordion__open")
const iconMinus = document.getElementsByClassName("accordion__close");

document.addEventListener("DOMContentLoaded", () => {
  for (let i = 0; i < accordionItems.length; i++) {
    const item = accordionItems[i];
    const text = accordionText[i];
    const plus = iconPlus[i];
    const minus = iconMinus[i];


    item.addEventListener("click", () => {
      text.classList.toggle("is-open");

      if (text.classList.contains("is-open")) {
        plus.style.display = "none";
        minus.style.display = "block";
      } else {
        plus.style.display = "block";
        minus.style.display = "none";
      }
    });
  }
});


