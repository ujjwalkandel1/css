//javascript events
// example 1

document
   .getElementById("changeTextButton")
   .addEventListener("click", function () {
    let paragraph = document.getElementById("myParagraph");
    paragraph.textContent = "the paragraph is changed";
   });

   //exmaple-2
   document
   .getElementById("highlightFirstCity")
   .addEventListener("click", function () {
    let citiesList = document.getElementById("citiesList");
    citiesList.firstElementChild.classList.add("highlight")
   });