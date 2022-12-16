import { storageLoad } from "../storage/localstorage.mjs";
import { displayPosts } from "../posts/display-posts.mjs";
import { getPosts } from "../posts/get-posts.mjs";

const postsContainer = document.getElementById("posts-container");
const userToken = storageLoad("accessToken");
const user = storageLoad("profile");
const username = user.name;

//filter by old/new date
function sortByNewOld(postsContainer, username, userToken) {

    const btnNew = document.getElementById("btn-new");
    const btnOld = document.getElementById("btn-old");
    let filter = "";

    btnNew.addEventListener("click", (event) => {
        event.preventDefault();
        filter = "&sort=title&sortOrder=asc";
        const postOrder = filter;
        let allPostUrl = `https://nf-api.onrender.com/api/v1/social/posts/?_author=true${postOrder}`;
        displayPosts(getPosts(allPostUrl, userToken), postsContainer, username, userToken);
        console.log(allPostUrl);
    });

    btnOld.addEventListener("click", (event) => {
        event.preventDefault();
        filter = "&sort=title&sortOrder=desc";
        const postOrder = filter;
        let allPostUrl = `https://nf-api.onrender.com/api/v1/social/posts/?_author=true${postOrder}`;
        displayPosts(getPosts(allPostUrl, userToken), postsContainer, username, userToken);
        console.log(allPostUrl);
    });

    //return filter;
};

sortByNewOld(postsContainer, username, userToken);