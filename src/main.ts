import {render} from "./utils/render.ts";

import {error404Page} from "./pages/error404/error404.ts";
import {error500Page} from "./pages/error500/error500.ts";

import {chatPage} from "./pages/chat-page/chat-page.ts";
import {settingsPage} from "./pages/settings-page/settings-page.ts";

render("#app", error404Page)