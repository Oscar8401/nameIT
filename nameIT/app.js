// declare a list (array) of images title
 var pics = [
    "Images/adler-2872995_1920.jpg",
    "Images/lion-3040797_1920.jpg",
    "Images/mammal-3218712_1920.jpg",
    "Images/monkey-1321358_1920.jpg",
    "Images/owl-3340957_1920.jpg",
    "Images/puma-2903312_1920.jpg"
];

var btn = document.querySelector("button");
var img = document.querySelector("img");
var counter = 1;
btn.addEventListener("click", function () {
    if (counter === 6) {
        counter = 0;
    }
    img.src = pics[counter]
    counter = counter + 1;

});