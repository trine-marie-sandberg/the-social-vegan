import { storageLoad } from "../storage/localstorage.mjs";

const allPostUrl = "https://nf-api.onrender.com/api/v1/social/posts";

const user = storageLoad("profile");
const username = user.name;
console.log(username)

const userOnlyPostUrl = `https://nf-api.onrender.com/api/v1/social/profiles/${username}/posts`;

export async function getPosts(url) {

    try {
        //

        const userToken = storageLoad("accessToken");
        console.log("USERTOKEN: " + userToken)

        if (!localStorage.getItem("accessToken")) {
            console.log("missing accessToken");
        } else {

            const fetchOptions = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${userToken}`,
                },
            };
            console.log(fetchOptions)

            const response = await fetch(url, fetchOptions);
            const json = await response.json();
            console.log(json)
        };
    } catch (error) {

        console.log(error);
    };
};

getPosts(allPostUrl);
getPosts(userOnlyPostUrl);