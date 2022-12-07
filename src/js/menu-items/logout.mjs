export function logout() {

    const loggoutBtn = document.querySelector("#log-in-out");

    loggoutBtn.addEventListener("click", function(event) {

        if(localStorage.getItem("accessToken")) {
            
            event.preventDefault();
            localStorage.removeItem("accessToken");
            loggoutBtn.innerHTML = "Login";
        };  
    });
};