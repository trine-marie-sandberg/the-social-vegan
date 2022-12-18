export function createPost(form, url, token) {

    const submitForm = form.submitbtn;
    submitForm.addEventListener("click", (event) => {

        event.preventDefault();
        const post = {
            "title": form.title.value,
            "body": form.textarea.value,
            "media": form.media.value,
            "tags": [form.tags.value],
        };
    
        const postData = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(post),
        };

        async function sendPost() {
            try {
                const response = await fetch(url, postData);
                const json = await response.json();
                 window.location.reload();

            } catch (error) {
                console.log(error);
            };
        };

        console.log(postData);
        sendPost();
    }); 
};