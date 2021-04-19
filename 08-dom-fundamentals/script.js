"use strict";

/*
// small exercise
document.getElementById("heading").textContent = "Toppings";

// console.log(document.getElementsByTagName("H1")[0].textContent);

document.querySelector("#burger").className = "list-item";

document.querySelector("#list").append(document.createElement("li"));
*/

// medium exercise
const containerSelector = document.querySelector("#container");
// const containerWidth = (style.width = "300px");
// const containerHeight = (style.height = "300px");
console.log(containerSelector.textContent);
const addDiv = document.createElement("div");
containerSelector.append(addDiv);
containerSelector.append(addDiv);
containerSelector.childNodes.forEach((item) => {
  item.className = "inner-div";
});
containerSelector.style.height = "300px";
containerSelector.style.width = "400px";
containerSelector.style.border = "solid";
