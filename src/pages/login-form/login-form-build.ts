import Button from "../../components/button/button.ts";
import FormTitle from "../../components/titles/form-title.ts";
import LoginForm from "../../pages/login-form/login-form.ts";
import Label from "../../components/label/label.ts";
import Input from "../../components/input/input.ts";
import Link from "../../components/links/link.ts";
import {Validator} from "../../utils/field_validator.ts";


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
        settings: {withInternalID: true},
        events: {
            blur: event => {
                if (!Validator.validateLogin(formLoginInput.getInputValue())) {
                    return;
                }
            }
        }
    }
)

const formPasswordInput = new Input(
    {
        className: 'login-form__input',
        text: 'password',
        settings: {withInternalID: true},
        events: {
            blur: event => {
                if (!Validator.validatePassword(formPasswordInput.getInputValue())) {
                    return;
                }
            }
        }
    }
)

const loginFormButton = new Button(
    {
        className: 'login-form__button',
        text: 'Авторизация',
        settings: {withInternalID: true},
        events: {
            click: event => {

                // Проверка допустимой длины логина и пароля
                if (!Validator.validatePassword(formPasswordInput.getInputValue()) || !Validator.validateLogin(formLoginInput.getInputValue())) {
                    return;
                }
                else {
                    console.log(`Login: ${formLoginInput.getInputValue()}, Password: ${formPasswordInput.getInputValue()}`);
                    formPasswordInput.clear();
                    formLoginInput.clear();
                }
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

export const loginForm = new LoginForm(
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