function handleJustFunctionClick() {
    const p = document.getElementById("clicking-method");
    p.innerText = "I love you babe";
}

document.getElementById("handle-event").addEventListener("click", function () {
    const handleEvent = document.getElementById("clicking-method");
    handleEvent.innerText = "hello dear this is me";
})


//
document.getElementById("update-name").addEventListener("click", function () {
    const handleInput = document.getElementById("input");
    const handleEvent = document.getElementById("clicking-method");
    handleEvent.innerText(handleInput.value)
})