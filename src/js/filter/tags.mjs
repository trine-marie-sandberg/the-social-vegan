import { getPosts } from "../posts/get-posts.mjs";
import { storageLoad } from "../storage/localstorage.mjs";
import { postList } from "../search/map-and-display.mjs";
import { displayPosts } from "../posts/display-posts.mjs";

//Filter with tags (temporarily has its own box, can I include it in search somehow?)
export function tagHandler(tagForm, container) {

    const userToken = storageLoad("accessToken")

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