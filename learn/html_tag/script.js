// const display = window.getComputedStyle(btn).display;

var all = document.getElementsByTagName("*");

for (var i = 0, max = all.length; i < max; i++) {
  const element = all[i];
  console.log(element.tagName, window.getComputedStyle(element).display);
}