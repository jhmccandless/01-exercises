"use strict";

/*
// small exercise
document.getElementById("heading").textContent = "Toppings";

// console.log(document.getElementsByTagName("H1")[0].textContent);

document.querySelector("#burger").className = "list-item";

document.querySelector("#list").append(document.createElement("li"));
*/
/*
// medium exercise
const containerSelector = document.querySelector("#container");
// const containerWidth = (style.width = "300px");
// const containerHeight = (style.height = "300px");

const buildPage = function () {
  const container = document.querySelector("#container");
  container.appendChild(headerContainer());
  //   container.appendChild(buildContent());
};

const headerContainer = function () {
  const header = document.createElement("header");
  header.appendChild(logoContainer());
  header.appendChild(navItems());
  return header;
};

const logoContainer = function () {
  const logo = document.createElement("h1");
  logo.textContent = "HighOnCoding";
  return logo;
};

const navItems = function () {
  const unorderedList = document.createElement("ul");
  ["home", "categories", "about"].forEach((item) => {
    const li = document.createElement("li");
    const link = document.createElement("a");
    link.setAttribute("href", "#");
    link.textContent = item;
    li.appendChild(link);
    unorderedList.appendChild(li);
  });
  return unorderedList;
};

buildPage();
*/

// adding event listeners
/*
// small
const pressBtn = document.createElement("button");
pressBtn.textContent = "Press Me";
document.body.appendChild(pressBtn);
pressBtn.className = "pressing";
document.querySelector(".pressing").addEventListener("click", function () {
  console.log("worked");
});

window.addEventListener("resize", function () {
  console.log("You can change the window size");
});
*/

// Medium
const newForm = document.createElement("form");
newForm.className = "input-form";
document.body.append(newForm);

const itemInput = document.createElement("input");
itemInput.placeholder = "Write Item Here";
itemInput.className = "item-entry";
document.querySelector(".input-form").appendChild(itemInput);

const inputButton = document.createElement("button");
inputButton.textContent = "Submit";
inputButton.className = "entry-button";
document.querySelector(".input-form").appendChild(inputButton);

const itemListing = document.createElement("ul");
itemListing.className = "list";
itemListing.textContent = "Grocery List";
document.body.append(itemListing);

// let listingItem = document.createElement("li");
// listingItem.className = "item";
// document.querySelector(".list").append(listingItem);
// listingItem.textContent = "item 1";

const btnPress = function () {
  const btnPress = document.querySelector(".entry-button");
  btnPress.addEventListener("click", function (event) {
    event.preventDefault();
    const singleItem = document.querySelector(".item-entry").value;
    console.log(singleItem);
    let listingItem = document.createElement("li");
    listingItem.textContent = singleItem;
    document.querySelector(".list").append(listingItem);
    document.querySelector(".input-form").reset();
  });
};

btnPress();
