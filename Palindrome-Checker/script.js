const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

const palindromeResult = input => {
    const originalText = input;
    if (originalText === "") {
        alert("Please input a value");
        return;
    }
    result.replaceChildren();
    const processedText = input.toLowerCase().replace(/[^a-z0-9]/g, "");
    let resultMsg = `<strong>${originalText}</strong> ${processedText === [...processedText].reverse().join("")?"is":"is not"} a palindrome.`;

    const para = document.createElement("p");
    para.className = "user-input";
    para.innerHTML = resultMsg;
    result.appendChild(para);
    result.classList.remove("hidden");
};

checkBtn.addEventListener("click", () => {
    palindromeResult(textInput.value);
    textInput.value = "";
});

textInput.addEventListener("keydown", e => {
    if (e.key === "Enter") {
        palindromeResult(textInput.value);
        textInput.value = "";
    }
});