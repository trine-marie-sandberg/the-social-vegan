import { getPosts } from "../posts/get-posts.mjs";
import { storageLoad } from "../storage/localstorage.mjs";
import { postList } from "../search/map-and-display.mjs";

//Filter with tags (temporarily has its own box, can I include it in search somehow?)
export function filterHandler(tagForm, container) {

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

//filter by old/new date
export function sortByNewOld() {

    const btnNew = document.getElementById("btn-new");
    const btnOld = document.getElementById("btn-old");

    let filter = "";

    btnNew.addEventListener("click", (event) => {
        event.preventDefault();
        filter = "&sort=title&sortOrder=asc";
        //window.location.reload();
    });

    btnOld.addEventListener("click", (event) => {
        event.preventDefault();
        filter = "&sort=title&sortOrder=desc";
        //window.location.reload();
    })

    return filter;
};