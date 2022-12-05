import { login } from "./login-handler.mjs";

const loggInOutBtn = document.querySelector("#log-in-out");

const API_BASE_URL = "https://nf-api.onrender.com";

const loginUser = document.querySelector("#login");
loginUser.addEventListener("click", function(event) {

    event.preventDefault();

    const email = document.querySelector("#email-username");
    const password = document.querySelector("#password");

    const loginData = {
        email: email.value,
        password: password.value,
    };

    if(localStorage.getItem("accessToken")) {
        loggInOutBtn.innerHTML = "Logout";
    };

    console.log(loginData)
    login(loginData)
});