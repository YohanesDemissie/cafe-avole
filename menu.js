var index = 1;
showImage(1);

function plusIndex(n) {
  index = index + 1;
  showImage(index);
}

function showImage(n) {
  var imagelist = document.getElementsByClassName("slideImage");
  if (n > imagelist.length) { index = 1; }
  if (n < 1) { index = imagelist.length; }

  for (var i = 0; i < imagelist.length; i++) {
    imagelist[i].style.display = "none";
  }

  imagelist[index - 1].style.display = "block";

}

autoSlide();
function autoSlide() {
  var imagelist = document.getElementsByClassName("slideImage");
  for (var i = 0; i < imagelist.length; i++) {
    imagelist[i].style.display = "none";
  }
  if (index > imagelist.length) { index = 1 }

  imagelist[index - 1].style.display = "block";
  index++;

  setTimeout(autoSlide, 3000);
}
// var slideIndex = 1;
// showDivs(slideIndex);

// function plusDivs(n) {
//   showDivs(slideIndex += n);
// }

// function showDivs(n) {
//   var i;
//   var x = document.getElementsByClassName("mySlides");
//   if (n > x.length) { slideIndex = 1 }
//   if (n < 1) { slideIndex = x.length }
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   x[slideIndex - 1].style.display = "block";
// }