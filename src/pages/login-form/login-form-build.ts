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
        fieldName: "login",
        text: 'login',
        settings: {withInternalID: true},
        validator: Validator.validateLogin,
        events: {
            blur: () => {
                loginFormLoginInput.validate()
            },
            focus: () => {
                loginFormLoginInput.focus()
            }
        }
    }
)

const loginFormPasswordInput = new Input(
    {
        className: 'login-form__input',
        fieldName: "password",
        text: 'password',
        settings: {withInternalID: true},
        validator: Validator.validatePassword,
        events: {
            blur: () => {
                loginFormPasswordInput.validate()
            },
            focus: () => {
                // код, который будет выполняться при получении фокуса
                loginFormPasswordInput.focus()
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
            click: () => {
                // Проверка допустимой длины логина и пароля
                if (loginForm.validate()) {
                    console.log(loginForm.get_data());
                    loginForm.clear();
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
        text: 'Еще не зарегестрированы?',
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