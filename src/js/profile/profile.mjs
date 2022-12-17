import { storageLoad } from "../storage/localstorage.mjs";

const token = storageLoad("accessToken");
const user = storageLoad("profile")

const avatarContainer = document.getElementById("profile-img-form-container");
const avatarForm = document.createElement("form");
avatarForm.innerHTML = `<label for="img">Profile image url</label>
                        <input type="text" id="img" class="rounded-2 border" name="img">
                        <button type="submit" class="btn btn-primary text-secondary">Submit</button>`;

function profileImageHandler() {

    const user = storageLoad("profile");
    const profileImg = document.getElementById("profile-image");
    avatarContainer.appendChild(avatarForm);

    if(user.avatar) {
        profileImg.src = user.avatar;
    } else {};

    profileImg.addEventListener("click", (event) => {

        avatarForm.style.display = "block";

        avatarForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const requestBody = {
                "banner": "",
                "avatar": avatarForm.img.value,
            };

            const updateAvatarUrl = `https://nf-api.onrender.com/api/v1/social/profiles/${user.name}/media`;

            async function updateAvatar() {

                try {
                    const postData = {
                        method: "PUT",
                        body: JSON.stringify(requestBody),
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        },
                    };
                    const response = await fetch(updateAvatarUrl, postData);
                    const json = await response.json();
                    window.location.reload();
                } catch (error) {
                    console.log(error)
                }
            };
            updateAvatar();
        });
    });

    window.addEventListener('mouseup', function(event) { 
        if(event.target != avatarForm.img && event.target.parentNode != avatarForm.img){
        
            avatarForm.style.display = 'none';
        };
    });
};

if(token) {

    profileImageHandler();
};