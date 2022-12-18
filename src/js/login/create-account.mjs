import { userData } from "./utils/user-data.mjs";
import { login } from "./login-handler.mjs";

const createAccount = document.querySelector("#submit-create");
const form = document.getElementById("create-account-form");
form.addEventListener("submit", function(event) {

    const user = userData(event);
    console.log(user)

    async function postUserData() {

        const postData = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        };

        const response = await fetch("https://nf-api.onrender.com/api/v1/social/auth/register", postData);
        const json = await response.json();
        console.log(json);

        const loginData = {
            email: user.email,
            password: user.password,
        };
        await login(loginData);
        window.location.replace("/profile/");
    };

    try {
        postUserData();
    } catch(error) {

        alert("There was a problem creating your account" + error);
    };

    
});

