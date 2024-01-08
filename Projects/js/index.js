const myButton = [];
myButton[0] = document.getElementById("mybutt1");
myButton[1] = document.getElementById("mybutt2");
myButton[2] = document.getElementById("mybutt3");
myButton[3] = document.getElementById("mybutt4");

// element nemeh function ()
function addCard() {
    let divAddCard = document.createElement("div");
    const title = document.getElementById("title");
    const description = document.getElementById("description");
    let bigFatherDiv = document.getElementById("box1");
    divAddCard.innerHTML = `${title.value + "\n" + description.value}`;
    divAddCard.style.backgroundColor = "red";
    divAddCard.style.height = "100px";
    divAddCard.style.width = "100px";
    bigFatherDiv.appendChild(divAddCard);
}

function addTaskShow() {
    let TaskShow = document.getElementsByClassName("addTaskk")[0];
    TaskShow.style.display = "flex";
}

function hide() {
    let TaskShow = document.getElementsByClassName("addTaskk")[0];
    TaskShow.style.display = "none";
}
myButton[0].addEventListener("click", addTaskShow);