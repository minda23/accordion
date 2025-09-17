

const accordionItems = document.getElementsByClassName("accordion__item");
const accordionText = document.getElementsByClassName("accordion__text");
const iconPlus = document.getElementsByClassName("accordion__open")
const iconMinus = document.getElementsByClassName("accordion__close")

console.log(accordionItems)

// chceme vlastne prejsť cet accordion item a potom na kliknutie textu chceme vlastne robiť toggle
// chceme pridať interaktivu accordion items preto robime forEach
// použiť overflow a height 
// 1. is-open ma niejaku velku vysku (lebo je otvorene), a inac ten komponent / element ma malu vysku
// (popripade pouzit !important)
// ked to spravim treba to pushnut a commitovať a vymazať komenty

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


