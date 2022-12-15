import { getPosts } from "../posts/get-posts.mjs";
import { storageLoad } from "../storage/localstorage.mjs";
import { displayResults } from "../search/modal-componments.mjs";

export function filterHandler(tagForm, container) {

    const userToken = storageLoad("accessToken")

    const search = tagForm.tagsearch;
    search.addEventListener("keyup", (event) => {
        
        async function getTagedPosts() {
            let tag = search.value;
            console.log(tag)
            const filterPostUrl = `https://nf-api.onrender.com/api/v1/social/posts/?_tag=${tag}&?_author=true`;
            const postArray = await getPosts(filterPostUrl, userToken);
            console.log(postArray)
            
            //const displayPosts = displayResults(postArray.id, postArray.title, postArray.image, postArray.author);
        };
        getTagedPosts();
    });
};