import {render} from "./utils/render.ts";
import {loginForm} from "./pages/login-form/login-form-build.ts";
import {registrationForm} from "./pages/registration-form/registration-form-build.ts";
import {error404} from "./pages/error404/error404-build.ts";
import {error500} from "./pages/error500/error500-build.ts";


// render("#app", loginForm);
render("#app", error500);
