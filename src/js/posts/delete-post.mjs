import { storageLoad } from "../storage/localstorage.mjs";

export function deletePost(deleteBtn, id, deleteModal) {

    const deleteUrl = `https://nf-api.onrender.com/api/v1/social/posts/${id}`;

    deleteBtn.addEventListener("click", (event) => {
        console.log(deleteUrl);
        const token = storageLoad("accessToken");

        deleteModal.innerHTML = `<h2>Delete this post?</h2>
                                <p class="btn btn-primary btn-md text-secondary m-4 delete-confirm">Delete</p>
                                <p class="btn btn-primary btn-md text-secondary m-4 delete-no">No</p>`;
                                
                                const delNo = document.querySelector(".delete-no");
                                delNo.addEventListener("click", () => {
                                    deleteModal.style.display = "none";
                                });

        const delComfirm = document.querySelector(".delete-confirm");

        deleteModal.style.display = "block";

        delComfirm.onclick = async function removePost() {

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
        //removePost();
    });
};