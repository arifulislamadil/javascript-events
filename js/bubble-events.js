//li clicked
document.getElementById("second-item").addEventListener("click", function (event) {
    console.log("second1 item clicked");
    event.stopImmediatePropagation();
})
document.getElementById("second-item").addEventListener("click", function (event) {
    console.log("second2 item clicked");
    event.stopPropagation();
})
document.getElementById("second-item").addEventListener("click", function (event) {
    console.log("second3 item clicked");
    event.stopPropagation();
})
document.getElementById("second-item").addEventListener("click", function (event) {
    console.log("second4 item clicked");
    event.stopPropagation();
})

//ul clicked
document.getElementById("list-container").addEventListener("click", function () {
    console.log("list container clicked");
})

//section
document.getElementById("section-container").addEventListener("click", function () {
    console.log("section container clicked");
})