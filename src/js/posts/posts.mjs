const userName = "anton_hollerudhagen";

const allPostUrl = "https://nf-api.onrender.com/api/v1/social/posts";
const userOnlyPostUrl = `https://nf-api.onrender.com/api/v1/social/profiles/${userName}/posts`;

const user = localStorage.getItem("user");
//const userName = "";
const userJson = JSON.parse(user);
console.log(userJson);

export async function getPosts(url) {

    try {
        //

        const userToken = localStorage.getItem("accessToken");

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