import { storageLoad } from "../storage/localstorage.mjs";
import { getPosts } from "./get-posts.mjs";

const allPostUrl = "https://nf-api.onrender.com/api/v1/social/posts";

const userToken = storageLoad("accessToken");
        console.log("USERTOKEN: " + userToken)

const user = storageLoad("profile");
const username = user.name;
console.log(username)

const userOnlyPostUrl = `https://nf-api.onrender.com/api/v1/social/profiles/${username}/posts`;

getPosts(allPostUrl, userToken);
getPosts(userOnlyPostUrl, userToken);