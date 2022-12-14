import { storageLoad } from "../storage/localstorage.mjs";

export function deletePost(deleteBtn, id, deleteModal) {

    const deleteUrl = `https://nf-api.onrender.com/api/v1/social/posts/${id}`;

    //{ MODAL COMPONMENTS
        const dialogText = document.createElement("h2");
        dialogText.innerText = "Delete this post?"
        deleteModal.appendChild(dialogText);
                                    
        const noBtn = document.createElement("button");
        const btnClasses = ["btn", "btn-primary", "btn-md", "text-secondary", "m-4"];
        noBtn.classList.add(...btnClasses);
        noBtn.innerText = "No";
        deleteModal.appendChild(noBtn);
    
        const confirmBtn = document.createElement("button");
        confirmBtn.classList.add(...btnClasses);
        confirmBtn.innerText = "Delete";
        confirmBtn.style.backgroundColor = "darkred";
        deleteModal.appendChild(confirmBtn);
    //}
    deleteModal.style.display = "none";

    deleteBtn.addEventListener("click", () => {

        deleteModal.style.display = "block";
        const delNo = noBtn;
        delNo.addEventListener("click", () => {
            deleteModal.style.display = "none";
        });
                                
        const delComfirm = confirmBtn;
        delComfirm.onclick = async function removePost() {

            try {
                const token = storageLoad("accessToken");
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
                console.log(error);
            };
        };
    });
};