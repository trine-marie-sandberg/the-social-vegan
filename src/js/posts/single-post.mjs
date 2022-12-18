export async function getSinglePost(container, token) {

    const queryString = document.location.search;
    const param = new URLSearchParams(queryString);
    const id = param.get("id");
    const singlePostUrl = `https://nf-api.onrender.com/api/v1/social/posts/${id}&?_comments=true`;

    const fetchOptions = {

        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await fetch(singlePostUrl, fetchOptions);
    const json = await response.json();
    
    const postCard = document.createElement("div");
    container.appendChild(postCard);

    postCard.innerHTML = `<div class="p-4 bg-white border border-info rounded-4">
                             <button id="back-btn" class="btn btn-primary text-secondary mb-2"><i class="fa-solid fa-arrow-left"></i> Back</button>
                             <h1>${json.title}</h1>
                             <p>${json.body}</p>
                             <image src="${json.media}" alt="responsive image" class="img-fluid" style="max-height: 500px;">
                           </div>`;

    for (let i = 0; i < json.comments.length; i++) {
        const commentsContainer = document.createElement("div");
        const card = `<div class="bg-white mt-2 p-4 border border-info rounded-4">
                        <h3>${json.comments[i].owner}</h3>
                        <p>${json.comments[i].body}</p>
                      </div>`;
        commentsContainer.innerHTML = card;
        container.appendChild(commentsContainer);
    };

    const backBtn = document.getElementById("back-btn");
    backBtn.addEventListener("click", () => {
        history.back();
    });
};