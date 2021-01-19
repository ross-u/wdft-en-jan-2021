"use strict";

// console.dir(document);

// // ACCESSING ELEMENTS
// // .querySelector() - returns only the first found occurence of the element
// // returns only one HTML element object

// const firstDiv = document.querySelector("#first");
// console.log("firstDiv", firstDiv);

// const thirdDiv = document.querySelector(".third");
// console.log("thirdDiv", thirdDiv);

// // .querySelectorAll() - returns an array of all elements that match the selector
// const allDivs = document.querySelectorAll("div");
// console.log("allDivs", allDivs);

// // .style

// //  background-color  ==> backgroundColor
// allDivs[2].style.backgroundColor = "green";

// firstDiv.style.backgroundColor = "red";
// firstDiv.style.border = "4px solid black";
// firstDiv.style.fontSize = "30px";
// firstDiv.style.marginBottom = "20px";

// allDivs.forEach(function (el) {
//   el.style.width = "200px";
//   el.style.height = "50px";
//   el.style.border = "1px solid blue";
// });

// // .getElementsByTagName()  .getElementsByClassName()
// // - used to return a list of matching elements

// const divsByTag = document.getElementsByTagName("div");
// console.log("divsByTag", divsByTag);

// // Array/list returned by .getElementsByTagName()  .getElementsByClassName()
// // are not iterable by array methods (.forEach, .map, .filter )
// // divsByTag.forEach(function (el) {});

// const divsByTagArr = [...divsByTag];

// divsByTagArr.forEach(function (el) {
//   // console.log("iterate over el", el);
// });

// //.getElementById()  - returns a single element with the matching id
// const title = document.getElementById("title");

// // console.log("title", title);
const secondDiv = document.querySelector("#second");

const para = secondDiv.querySelector("p");
console.log("para", para);
