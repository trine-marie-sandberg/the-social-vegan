import { login } from "./login-handler.mjs";

const loginUser = document.querySelector("#login");
const successMsg = document.querySelector("#login-success-msg");
loginUser.addEventListener("click", function(event) {

    try {
        
        event.preventDefault();
        const email = document.querySelector("#email-username");
        const password = document.querySelector("#password");

        const loginData = {
            email: email.value,
            password: password.value,
        };

        login(loginData);

        successMsg.innerHTML = `<div class= "d-flex align-items-start">
                                 <p class="px-3">Login successful</p>
                                 <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                </div>`;

        setTimeout(() => {
            window.location.replace("profile.html");
        }, 500);
        
    } catch(error) {

        console.log(error)
    };
});