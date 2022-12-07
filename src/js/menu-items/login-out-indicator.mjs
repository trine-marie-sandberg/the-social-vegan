export function logInOutIndicator() {

    const logInOutBtn = document.querySelector("#log-in-out");
    
    if(localStorage.getItem("accessToken")) {

        logInOutBtn.innerHTML = "Logout";
    } else if(!localStorage.getItem("accessToken")) {

        logInOutBtn.innerHTML = "Login";
    };
};