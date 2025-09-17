

const accordionItems = document.getElementsByClassName("accordion-item");
const accordiontext = document.getElementsByClassName("accordion-text");

// chceme vlastne prejsť cet accordion item a potom na kliknutie textu chceme vlastne robiť toggle

accordionItems.forEach(item => {
      accordionItems.addEventListener('click', e => {
           if (accordiontext.style.display === "none") {
    accordiontext.style.display = "block";
  } else {
    accordiontext.style.display = "none";
  }
  });
});