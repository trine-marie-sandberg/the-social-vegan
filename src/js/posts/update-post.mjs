export function updatePost(btn, postData, modal, requestHeader) {

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
    const updatePostUrl = `https://nf-api.onrender.com/api/v1/social/posts/${postData.id}`;
    console.log(updatePostUrl);
    console.log(postData);

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
};