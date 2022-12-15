import { logout } from "./menu-items/logout.mjs";
import { logInOutIndicator } from "./menu-items/login-out-indicator.mjs";
import { searchHandler } from "./search/search.mjs";
import { filterHandler } from "./filter/filter.mjs";

logout();
logInOutIndicator();

const search = document.getElementById("search");
searchHandler(search);

const tagsForm = document.getElementById("tags-form");
const tagContainer = document.getElementById("tag-container")
if(tagsForm) {
    filterHandler(tagsForm, tagContainer);
};