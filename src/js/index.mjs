import { logout } from "./menu-items/logout.mjs";
import { logInOutIndicator } from "./menu-items/login-out-indicator.mjs";
import { searchHandler } from "./search/search.mjs";
import { filterHandler } from "./filter/filter.mjs";

logout();
logInOutIndicator();

const search = document.getElementById("search");
searchHandler(search);