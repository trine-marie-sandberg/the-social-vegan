import { testUser } from "./utils/testuser.mjs";

export async function login(url) {

    //Login endpoint
    const loginEndpoint = "/api/v1/social/auth/login";
    
    //User to login
    const userToLogin = {
        email: testUser.email,
        password: testUser.password
    };
    
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
        const response = await fetch(url + loginEndpoint, postData);
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