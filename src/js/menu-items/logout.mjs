export function logout() {

    const loggoutBtn = document.querySelector("#log-in-out");

    loggoutBtn.addEventListener("click", function(event) {

        if(localStorage.getItem("accessToken")) {
            
            event.preventDefault();
            localStorage.removeItem("accessToken");
            localStorage.removeItem("user");
            localStorage.removeItem("profile");
            loggoutBtn.innerHTML = "Login";

            window.location.reload();
        };  
    });
};