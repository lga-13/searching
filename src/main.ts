import {render} from "./utils/render.ts";
import {loginForm} from "./pages/login-form/login-form-build.ts";
import {registrationForm} from "./pages/registration-form/registration-form-build.ts";
import {error404} from "./pages/error404/error404-build.ts";
import {error500} from "./pages/error500/error500-build.ts";
import APIClient from "./clients/base/fetch.ts";

// render("#app", loginForm);
render("#app", error500);


const client = new APIClient();

client.get('http://localhost:8000/', {param1: 'value1', param2: 'value2'})
    .then(data => console.log(data))
    .catch(error => console.error(error));