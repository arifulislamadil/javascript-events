//Btn One
document.getElementById("btn-one").addEventListener("click", function () {
    const inputField = document.getElementById("input-field-one");
    const show = document.getElementById("show");
    show.innerText = inputField.value;
    inputField.value = ""

});

//Btn two
document.getElementById("btn-two").addEventListener("click", function () {
    const inputField = document.getElementById("input-field-two");
    const show = document.getElementById("show-two");
    show.innerText = inputField.value;
    inputField.value = ""

});


