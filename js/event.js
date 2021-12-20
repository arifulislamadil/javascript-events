function makeRed() {
    document.body.style.backgroundColor = "red";
}
function makeYellow() {
    document.body.style.backgroundColor = "yellow";
}

const blueButton = document.getElementById("make-blue-button");
blueButton.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = "blue";
}


const greenButton = document.getElementById("make-green-button");
greenButton.onclick = function () {
    document.body.style.backgroundColor = "green";
}

const goldenButton = document.getElementById("make-golden");
goldenButton.addEventListener("mousemove", makeGoldenRod)
function makeGoldenRod() {
    document.body.style.backgroundColor = "goldenrod"
}


const hotPinkButton = document.getElementById("make-hotpink");
hotPinkButton.addEventListener("click", function () {
    document.body.style.backgroundColor = "hotpink"
})


const lightBlue = document.getElementById("make-lightBlue").addEventListener("click", function () {
    document.body.style.backgroundColor = "lightskyblue"
})
