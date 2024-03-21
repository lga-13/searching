import render from './utils/render.ts';

import { settingsPage } from './pages/settings-page/settings-page.ts';
import { chatPage } from './pages/chat-page/chat-page.ts';
import loginForm from './pages/login-form/login-form.ts';
import registrationForm from './pages/registration-form/registration-form.ts';

render('#app', loginForm);
