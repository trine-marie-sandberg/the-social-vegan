import { userData } from "./utils/user-data.mjs";

const createAccount = document.querySelector("#submit-create");
createAccount.addEventListener("click", function(event) {

    const user = userData(event);
    console.log(user)
});

