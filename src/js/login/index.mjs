import { login } from "./login.mjs";
import { testUser } from "./utils/testuser.mjs";

const API_BASE_URL = "https://nf-api.onrender.com";

    //User to login
    const userToLogin = {
        email: testUser.email,
        password: testUser.password
    };

login(userToLogin);