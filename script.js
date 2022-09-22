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