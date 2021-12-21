//Hide information
document.getElementById("delete-btn").addEventListener('click', function () {
    const hideInformation = document.getElementById("secret-information");
    hideInformation.style.display = "none";
})

//Focus
document.getElementById("input-field").addEventListener("focus", function () {
    document.body.style.backgroundColor = "red"
})

//Blur
document.getElementById("input-field").addEventListener("blur", function () {
    document.body.style.backgroundColor = "green"
})

// click
document.getElementById("input-field").addEventListener("click", function () {
    document.body.style.backgroundColor = "blue"
})

//confirm delete information
document.getElementById("delete-confirm").addEventListener("keyup", function (event) {
    const deleteBtn = document.getElementById("delete-btn")
    if (event.target.value == "delete") {
        deleteBtn.removeAttribute("disabled")
    }
    else {
        deleteBtn.setAttribute("disabled", true)
    }
});

//change
document.getElementById("delete-confirm").addEventListener("change", function () {
    const inputField = document.getElementById("delete-confirm");
    console.log(inputField.value);
})