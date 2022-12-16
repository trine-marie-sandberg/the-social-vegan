export async function getPosts(url, userToken) {

    try {

        if (!localStorage.getItem("accessToken")) {

            console.log("Warning: accessToken not found");

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
            const postArray = json;
            return postArray;
        };
        
    } catch (error) {

        console.log(error);
    };
};