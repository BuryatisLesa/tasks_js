const buttonDisabel = document.querySelector(".button-icon--disable");
const buttonActive = document.querySelector(".button-icon--active");


buttonDisabel.addEventListener("click", () => {
    buttonDisabel.style.display = "none";
    buttonActive.style.display = "block";
    alert(`${window.screen.height} x ${window.screen.width}`);
})


buttonActive.addEventListener("click", () => {
    buttonDisabel.style.display = "block";
    buttonActive.style.display = "none";
})