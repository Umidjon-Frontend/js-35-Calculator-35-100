const result = document.querySelector(".result");
const btns = document.querySelectorAll(".calculate__body span");
const clear = document.querySelector(".clear");
const deleteNum = document.querySelector(".delete");

for (let i = 0; i < btns.length; i++) {
    if (btns[i].innerHTML === "=") {
        btns[i].addEventListener("click", calculate);
    } else {
        btns[i].addEventListener("click", addToCurrentValue(i));
    }
}

// ADD
function addToCurrentValue(id) {
    return () => {
        if (btns[id].innerHTML === "0" || btns[id].innerHTML === "00") {
            if (result.value.length < 1) {
                result.value += "0.";
            } else {
                result.value += btns[id].innerHTML;
            }
        }
        if (btns[id].innerHTML === "⬅") {
            result.value += "";
        } else {
            result.value += btns[id].innerHTML;
        }
    };
}

// CLEAR
clear.addEventListener("click", () => {
    result.value = "";
});

// CALCULATE
function calculate() {
    return (result.value = eval(result.value));
}
deleteNum.addEventListener("click", () => {
    let a = result.value;
    let array = a.split("");
    array.splice(-1);
    result.value = array.join("");
});
