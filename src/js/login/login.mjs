export async function login(userToLogin) {

    //Login endpoint
    const loginUrl = "https://nf-api.onrender.com/api/v1/social/auth/login";
    
    //Data to POST
    const postData = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userToLogin),
    };

    try {

        //fetch postData
        const response = await fetch(loginUrl, postData);
        const json = await response.json();
        //Get accesstoken and store it
        const token = json.accessToken;
        localStorage.setItem("accessToken", token);

    } catch (error) {
        console.log(error);
    } finally {
        if (localStorage.getItem("accessToken" === null)) {
            console.log("failed to store token")
        } else if (localStorage.getItem("accessToken")) {
            console.log(localStorage.getItem("accessToken"))
        };
    };
};