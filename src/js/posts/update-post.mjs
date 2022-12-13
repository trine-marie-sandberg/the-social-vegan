import { storageLoad } from "../storage/localstorage.mjs";

export function updatePost(btn, postData, modal) {

    const canselBtn = document.createElement("i");
        const canselIconClass = ["fa-solid", "fa-x", "p-2", "mb-4", "border", "rounded-1"];
        canselBtn.classList.add(...canselIconClass);
        modal.appendChild(canselBtn);

    btn.addEventListener("click", (event) => {

        canselBtn.addEventListener("click", () => {
            modal.style.display = "none";
            btn.style.display ="block";
        });

        if(modal.style.display = "block") {
            btn.style.display = "none";
        };
    });
    modal.style.display = "none";

    const form = document.createElement("form");
    modal.appendChild(form);

    form.innerHTML = `<div>
                        <label for="title">Title</label>
                        <input id="title" name="title" class="border rounded-1 w-100" type="text" required minlength="3" value="${postData.title}">
                      </div>
                      <div>
                        <label for="post">Post</label>
                        <textarea id="post" name="textarea" class="border rounded-1 w-100">${postData.body}</textarea>
                      </div>
                      <div>
                      <label for="media">Image url</label>
                      <input type="text" id="media" name="media" class="border rounded-1 w-100" value="${postData.media}">
                      </div>
                      <button name="submit" class="btn btn-primary btn-md text-secondary p-2 m-2">Save changes</button>`;

    const updatePostUrl = `https://nf-api.onrender.com/api/v1/social/posts/${postData.id}`;

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const sendData = {
            "title": form.title.value,
            "body": form.textarea.value,
            "tags": [""],
            "media": form.media.value,
        };
        console.log(sendData);

        const token = storageLoad("accessToken");

        async function sendPost() {

            try {
                const postData = {
                    method: "PUT",
                    body: JSON.stringify(sendData),
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                };
                const response = await fetch(updatePostUrl, postData);
                const json = await response.json();
                window.location.reload();
            } catch (error) {
                console.log(error)
            }
        };
        sendPost();
    });
};