export async function getPosts(url, userToken) {

    try {

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
            console.log(url, fetchOptions)
            const json = await response.json();
            const postArray = json;
            //console.log(postArray)
            return postArray;
        };
        
    } catch (error) {

        console.log(error);
    };
};