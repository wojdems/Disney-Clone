const buttonLeft = document.querySelectorAll(".arrow-left");
const buttonRight = document.querySelectorAll(".arrow-right");
const wrapper = document.querySelectorAll(".movies");
const box = document.querySelectorAll(".box");

for (let i = 0; i < box.length; i++) {
  buttonRight[i].addEventListener("click", () => {
    wrapper[i].scrollLeft += box[i].offsetWidth;
  });

  buttonLeft[i].addEventListener("click", () => {
    wrapper[i].scrollLeft -= box[i].offsetWidth;
  });
}
