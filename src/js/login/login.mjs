import { login } from "./login-handler.mjs";

const loginForm = document.querySelector("#login");
const successMsg = document.querySelector("#login-success-msg");

loginForm.addEventListener("submit", async function(event) {

    event.preventDefault();

    try {

        const loginData = {
            email: event.target.email.value,
            password: event.target.password.value,
        };

        localStorage.setItem("user", JSON.stringify(loginData.email));

        await login(loginData);

        successMsg.innerHTML = `<div class= "d-flex align-items-start">
                                 <p class="px-3">Loging in</p>
                                 <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                </div>`;

        setTimeout(() => {
            window.location.replace("/profile/");
        }, 500);
        
    } catch(error) {

        alert("There was a problem logging you in" + error);
    };
});