import { getPosts } from "../posts/get-posts.mjs";
import { storageLoad } from "../storage/localstorage.mjs";
import { postList } from "../search/map-and-display.mjs";
import { displayPosts } from "../posts/display-posts.mjs";

//Filter with tags (temporarily has its own box, can I include it in search somehow?)
export function tagHandler(tagForm, container) {

    tagForm.style.display = "none";

    const userToken = storageLoad("accessToken")

    const openTags = document.getElementById("show-tags");
    openTags.addEventListener("click", (event) => {
        
        tagForm.style.display = "block";
        openTags.style.display ="none";
        closeTags.style.display = "block";
        container.style.display = "block";
    });

    const closeTags = document.getElementById("close-tags");
    closeTags.style.display = "none";
    closeTags.addEventListener("click", (event) => {

        tagForm.style.display = "none";
        openTags.style.display ="block";
        closeTags.style.display = "none";
        container.style.display = "none";
    });

    const search = tagForm.tagsearch;
    search.addEventListener("keyup", (event) => {
        
        async function getTagedPosts() {

            try {
                let tag = search.value;
                console.log(tag)
                const filterPostUrl = `https://nf-api.onrender.com/api/v1/social/posts/?_tag=${tag}&_author=true`;
                const postArray = await getPosts(filterPostUrl, userToken);
                console.log(postArray)
                postList(postArray, container);

            } catch(error) {
                console.log(error);
            }
        };
        getTagedPosts();
    });
};