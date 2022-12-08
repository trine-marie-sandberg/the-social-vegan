async function getFeed() {

    const postsUrl = "https://nf-api.onrender.com/api/v1/social/posts";

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

            const response = await fetch(postsUrl, fetchOptions);
            const json = await response.json();
            console.log(json)
        };
    } catch (error) {

        console.log(error);
    };
};

getFeed();