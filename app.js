const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const greeting = document.querySelector(".greeting");
// const loginButton = document.querySelector(".login-form button");

const HIDDEN_CLASSNAME = "hidden";

function handleLoginSubmit(event) {
    event.preventDefault();
    const userName = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${userName}`;    
    greeting.classList.remove(HIDDEN_CLASSNAME);
}   

// loginButton.addEventListener("click", handleLoginButtonClick);
loginForm.addEventListener("submit", handleLoginSubmit);