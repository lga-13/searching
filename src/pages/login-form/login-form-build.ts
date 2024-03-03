import Button from "../../components/button/button.ts";
import FormTitle from "../../components/titles/form-title.ts";
import LoginForm from "../../pages/login-form/login-form.ts";
import Label from "../../components/label/label.ts";
import Input from "../../components/input/input.ts";
import Link from "../../components/links/link.ts";
import {Validator} from "../../utils/field_validator.ts";


const loginFormTitle = new FormTitle(
    {
        className: 'login-form__title',
        text: 'Войти',
        settings: {withInternalID: true}
    }
)

const loginFormLoginLabel = new Label(
    {
        className: 'login-form__label',
        text: 'Логин',
        settings: {withInternalID: true}
    }
)

const loginFormPasswordLabel = new Label(
    {
        className: 'login-form__label',
        text: 'Пароль',
        settings: {withInternalID: true}
    }
)

const loginFormLoginInput = new Input(
    {
        className: 'login-form__input',
        text: 'login',
        settings: {withInternalID: true},
        events: {
            blur: event => {
                if (!Validator.validateLogin(loginFormLoginInput.getInputValue())) {
                    return;
                }
            }
        }
    }
)

const loginFormPasswordInput = new Input(
    {
        className: 'login-form__input',
        text: 'password',
        settings: {withInternalID: true},
        events: {
            blur: event => {
                if (!Validator.validatePassword(loginFormPasswordInput.getInputValue())) {
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
                if (!Validator.validatePassword(loginFormPasswordInput.getInputValue()) || !Validator.validateLogin(loginFormLoginInput.getInputValue())) {
                    return;
                }
                else {
                    console.log(`Login: ${loginFormLoginInput.getInputValue()}, Password: ${loginFormPasswordInput.getInputValue()}`);
                    loginFormPasswordInput.clear();
                    loginFormLoginInput.clear();
                }
            },
        },
    })

const loginFormForgotPasswordLink = new Link(
    {
        className: 'login-form__forgot-password',
        href: '#',
        text: 'Забыли пароль?',
        settings: {withInternalID: true}
    }
)

const loginFormRegistrationLink = new Link(
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
        formTitle: loginFormTitle,
        formLoginLabel: loginFormLoginLabel,
        formPasswordLabel: loginFormPasswordLabel,
        formLoginInput: loginFormLoginInput,
        formPasswordInput: loginFormPasswordInput,
        loginFormButton: loginFormButton,
        loginFormLink: loginFormRegistrationLink,
        loginFormPasswordLink: loginFormForgotPasswordLink,
    })