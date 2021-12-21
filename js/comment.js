document.getElementById("comment-btn").addEventListener("click", function () {
    const textArea = document.getElementById("text-area");
    const useText = textArea.value;
    const commentList = document.getElementById("comment-list");
    const p = document.createElement("p");
    p.innerText = useText;
    commentList.appendChild(p);
    textArea.value = "";

})



//Note: 
/* 1.add event listener on button
2.get text field by getElementById
3.get section tag by getElementById
4.create a p tag
5.use p.innerText = text field;
6.append the p tag to the section tag; */