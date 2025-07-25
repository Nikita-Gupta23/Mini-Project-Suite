let btns = document.querySelectorAll("button");
let ip = document.querySelector("input");
let string = '';
Array.from(btns).forEach((btn) => {
    btn.addEventListener("click", (e) => {
        if (e.target.innerHTML === "=") {
            string = eval(string);
            ip.value = string;
        } else if (e.target.innerHTML === "AC") {
            string = '';
            ip.value = string;
        } else if (e.target.innerHTML === "%") {
            string = string / 100;
            ip.value = string;
        } else if (e.target.innerHTML === 'Del') {
            string = string.substring(0, string.length - 1);
            ip.value = string;
        } else {
            string += e.target.innerHTML;
            ip.value = string;
        }
    })
});