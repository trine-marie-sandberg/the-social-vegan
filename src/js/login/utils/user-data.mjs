const createAccount = document.querySelector("#submit-create");

export function userData(event) {

    event.preventDefault();

    const userName = document.querySelector("#username");
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");

    const registerUser = {
        name: userName.value,
        email: email.value,
        password: password.value,
    };

    return registerUser;
    
};