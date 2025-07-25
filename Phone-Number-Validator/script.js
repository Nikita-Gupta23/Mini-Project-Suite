const input = document.getElementById("user-input");
const chkBtn = document.getElementById("check-btn");
const clrBtn = document.getElementById("clear-btn");
const output = document.getElementById("results-div");
chkBtn.addEventListener("click", () => {
    const num = input.value;
    const regex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s-]?)\d{3}([\s-]?)\d{4}$/
    if (num === "") {
        alert("Please provide a phone number");
    } else if (regex.test(num)) {
        output.innerText = `Valid US number: ${num}`;
    } else {
        output.innerText = `Invalid US number: ${num}`;
    }
});
clrBtn.addEventListener("click", () => {
    output.innerText = "";
});