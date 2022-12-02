function logout() {

    const loggoutBtn = document.querySelector("#log-in-out");

    loggoutBtn.addEventListener("click", function(event) {
        
        event.preventDefault();
        console.log(event);

    });
};

logout();