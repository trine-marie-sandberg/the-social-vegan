import { storageLoad } from "../storage/localstorage.mjs";

export function deletePost(btn, id) {

    const deleteUrl = `https://nf-api.onrender.com/api/v1/social/posts/${id}`;

    btn.addEventListener("click", (event) => {
        console.log(deleteUrl);
        const token = storageLoad("accessToken");

        async function removePost() {

            try {
                const postData = {
                    method: "DELETE",

                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                };
                const response = await fetch(deleteUrl, postData);
                //const json = await response.json();
                window.location.reload();

            } catch (error) {
                console.log(error)
            }
        };

        removePost();
    });
};