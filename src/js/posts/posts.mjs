import { storageLoad } from "../storage/localstorage.mjs";
import { getPosts } from "./get-posts.mjs";
import { displayPosts } from "./display-posts.mjs";
import { createPost } from "./create-post.mjs";


const allPostUrl = "https://nf-api.onrender.com/api/v1/social/posts";

const userToken = storageLoad("accessToken");

const user = storageLoad("profile");
const username = user.name;
const userOnlyPostUrl = `https://nf-api.onrender.com/api/v1/social/profiles/${username}/posts`;

const postsContainer = document.getElementById("posts-container");

displayPosts(getPosts(allPostUrl, userToken), postsContainer);

const postForm = document.getElementById("create-post");

createPost(postForm, allPostUrl, userToken);