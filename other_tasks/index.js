const forms = document.querySelectorAll(".auth-form");
const buttonActivate = document.querySelector("#btn-regist");
function validUserData(forms){
  forms.forEach((form) => {
    switch (form.placeholder) {
      case "Email":
        console.log("Это почта!");
      case "Login":
        console.log("Это login!");
      case "Password":
        console.log("Это password!");
      case "Password2":
        console.log("Это password2!");
    }
})
}
document.getElementById
buttonActivate.addEventListener("click", () => {
  validUserData(forms);
})

