import Button, {render} from "./components/button/button.ts";
import FormTitle from "./components/titles/form-title.ts";
import LoginForm from "./pages/login-form/login-form.ts";
import Label from "./components/label/label.ts";
import Input from "./components/input/input.ts";
import Link from "./components/links/link.ts";

const formTitle = new FormTitle(
    {
        className: 'login-form__title',
        text: 'Войти',
        settings: {withInternalID: true}
    }
)

const formLoginLabel = new Label(
    {
        className: 'login-form__label',
        text: 'Логин',
        settings: {withInternalID: true}
    }
)

const formPasswordLabel = new Label(
    {
        className: 'login-form__label',
        text: 'Пароль',
        settings: {withInternalID: true}
    }
)

const formLoginInput = new Input(
    {
        className: 'login-form__input',
        text: 'login',
        settings: {withInternalID: true}
    }
)

const formPasswordInput = new Input(
    {
        className: 'login-form__input',
        text: 'password',
        settings: {withInternalID: true}
    }
)
const loginFormButton = new Button(
    {
        className: 'login-form__button',
        text: 'Авторизация',
        settings: {withInternalID: true},
        events: {
            // Названия события точно такие же, как и у первого аргумента addEventListener:
            // click, mouseEnter, ...
            click: event => {
                console.log(event);
            },
        },
    })
const loginFormPasswordLink = new Link(
    {
        className: 'login-form__forgot-password',
        href: '#',
        text: 'Забыли пароль?',
        settings: {withInternalID: true}
    }
)
const loginFormLink = new Link(
    {
        className: 'login-form__registration',
        href: '#',
        text: 'Еще не зарегестрированны?',
        settings: {withInternalID: true}
    }
)
const loginForm = new LoginForm(
    {
        className: "login-form",
        settings: {withInternalID: true},
        formTitle: formTitle,
        formLoginLabel: formLoginLabel,
        formPasswordLabel: formPasswordLabel,
        formLoginInput: formLoginInput,
        formPasswordInput: formPasswordInput,
        loginFormButton: loginFormButton,
        loginFormLink: loginFormLink,
        loginFormPasswordLink: loginFormPasswordLink,
    })

render("#app", loginForm);


// Через секунду контент изменится сам, достаточно обновить пропсы
// setTimeout(() => {
//     button.setProps({
//         className: 'otherClass',
//         child: 'Click me, please',
//     });
// }, 1000);
