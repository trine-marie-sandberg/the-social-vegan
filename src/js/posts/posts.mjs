import { storageLoad } from "../storage/localstorage.mjs";
import { getPosts } from "./get-posts.mjs";
import { displayPosts } from "./display-posts.mjs";
import { createPost } from "./create-post.mjs";
import { getSinglePost } from "./single-post.mjs";

function postHandler() {

const allPostUrl = "https://nf-api.onrender.com/api/v1/social/posts/?_author=true";

const userToken = storageLoad("accessToken");

const user = storageLoad("profile");
const username = user.name;
const userOnlyPostUrl = `https://nf-api.onrender.com/api/v1/social/profiles/${username}/posts/?_author=true`;

const postsContainer = document.getElementById("posts-container");

if(postsContainer) {

    displayPosts(getPosts(allPostUrl, userToken), postsContainer, username, userToken);
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