import {render} from "./utils/render.ts";
// import {loginForm} from "./pages/login-form/login-form-build.ts";
// import {registrationForm} from "./pages/registration-form/registration-form-build.ts";
// import {error404} from "./pages/error404/error404-build.ts";
// import {error500} from "./pages/error500/error500-build.ts";
// import APIClient from "./clients/base/fetch.ts";
// import {settingsPage} from "./pages/settings-page/settings-page-build.ts";
// import {chatList, chatMessageChain, chatPage} from "./pages/chat-page/chat-page-build.ts";
// import {currentErrorMessage, loginForm} from "./pages/login-form/login-form-build.ts";
import {registrationForm} from "./pages/registration-form/registration-form-build.ts";


// render("#app", loginForm);
    render("#app", registrationForm)


// const client = new APIClient();
//
// client.get('http://10.177.233.169:8000/', {param1: 'value1', param2: 'value2'})
//     .then(data => console.log(data))
//     .catch(error => console.error(error));