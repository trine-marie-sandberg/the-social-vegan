import { userData } from "./utils/user-data.mjs";

const createAccount = document.querySelector("#submit-create");
createAccount.addEventListener("click", function(event) {

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
        console.log(json)
    };

    postUserData();
});

