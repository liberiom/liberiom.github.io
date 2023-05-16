var textBox = document.getElementById('textbox');
var boring = document.getElementById('boring');
var fancy = document.getElementById('fancy');

function alert() {
    alert("Hello, World!");
}

function fancify() {
    textBox.style.fontWeight = "bold";
    textBox.style.color = "blue";
    textBox.style.textDecoration = "underline";
}

function boringfy() {
    textBox.style.fontWeight = "normal";
    textBox.style.color = "black";
    textBox.style.textDecoration = "none";
}

function bigger() {
    textBox.style.fontSize="24pt";
}

function moo() {
    let text = textBox.value;
    let parts = text.split('.');
    for (let i = 0; i < parts.length; i++) {
        parts[i] += "-Moo. "
    }
    text = parts.join("");
    textBox.value = text;
}