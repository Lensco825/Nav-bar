var first = document.getElementById("first");
var second = document.getElementById("second");
var third = document.getElementById("third");
var fourth = document.getElementById("fourth");
var fifth = document.getElementById("fifth");
var parent = document.querySelector("div");

var lists = [first, second, third, fourth, fifth];

var text = document.createElement("p");
parent.appendChild(text);

function show() {
  text.innerHtml = lists.value;
}

var setting = document.querySelector("ul");

function colorize() {
  document.body.style.background = "#D9B8C4";
}

function reedem() {
  document.body.style.background = "#FF1654";
}