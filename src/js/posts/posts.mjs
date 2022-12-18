import { storageLoad } from "../storage/localstorage.mjs";
import { getPosts } from "./get-posts.mjs";
import { displayPosts } from "./display-posts.mjs";
import { createPost } from "./create-post.mjs";
import { getSinglePost } from "./single-post.mjs";
import { tagHandler } from "../filter/tags.mjs";

function postHandler() {

const postsContainer = document.getElementById("posts-container");

let allPostUrl = `https://nf-api.onrender.com/api/v1/social/posts/?_author=true`;

const userToken = storageLoad("accessToken");

const user = storageLoad("profile");
let username;
if(storageLoad("profile")) {
    username = user.name;
};


const userOnlyPostUrl = `https://nf-api.onrender.com/api/v1/social/profiles/${username}/posts/?_author=true`;

if(postsContainer) {

    try {
        displayPosts(getPosts(allPostUrl, userToken), postsContainer, username, userToken);

    } catch(error) {
        console.log(error)
    }

    const tagsForm = document.getElementById("tags-form");
    const tagContainer = document.getElementById("tag-container");
    tagContainer.style.height = "200px";
    tagContainer.style.overflowY = "scroll";
    tagContainer.style.overflowX = "hide";
    tagHandler(tagsForm, tagContainer);
};

const postForm = document.getElementById("create-post");

if(postForm) {
    createPost(postForm, allPostUrl, userToken);
};

const usersPostsContainer = document.getElementById("users-posts-container");

if(usersPostsContainer) {

    displayPosts(getPosts(userOnlyPostUrl, userToken), usersPostsContainer, username, userToken);
};

const singlePostContainer = document.getElementById("single-post-container");

if(singlePostContainer) {
    getSinglePost(singlePostContainer, userToken);
};
};

postHandler();