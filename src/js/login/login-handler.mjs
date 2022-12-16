import { storageSave } from "../storage/localstorage.mjs";
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

    const response = await fetch(loginUrl, postData);

    if (response.ok) {
        const { accessToken, ...profile } = await response.json();
        storageSave("accessToken", accessToken);
        storageSave("profile", profile);
    } else {
        throw new Error("Failed to login");
    }
};