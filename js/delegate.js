const items = document.getElementsByClassName("item");
for (const item of items) {
    item.addEventListener("click", function () {
        document.getElementById("item-container").removeChild(item)
    })
}


const items = document.getElementsByClassName("item");
for (const item of items) {
    item.addEventListener("click", function (event) {
        event.target.parentNode.removeChild(event.target);
    })
}

document.getElementById("add-item").addEventListener("click", function () {
    const li = document.createElement("li");
    li.innerText = "Added new item";
    li.classList.add('item')
    const ul = document.getElementById("item-container");
    ul.appendChild(li);

    document.getElementById("item-container").addEventListener("click", function (event) {
        event.target.parentNode.removeChild(event.target);

    })
})


