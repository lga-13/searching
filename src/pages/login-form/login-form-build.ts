import {Validator} from "../../utils/field_validator.ts";
import Form from "../../components/form/form.ts";
import "./login-form.css";
import ErrorMessage from "../../components/form/error-message/error-message.ts";


export const loginForm = new Form(
    {
        className: "login-form",
        title: {
            className: 'login-form__title',
            text: 'Войти',
            tag: 'h2',
        },
        button: {
            className: 'login-form__button',
            typeName: 'submit',
            text: 'Войти'
        },
        labelFieldClassName: 'login-form__label',
        inputFieldClassName: 'login-form__input',
        errorMessageClassName: 'login-form__error-message',
        link: {
            className: 'login-form__registration',
            href: '#',
            text: 'Еще не зарегестрированы?',
        },
        fields: [
            {
                labelText: 'Логин',
                inputName: 'login',
                inputType: 'text',
                inputPlaceholder: "",
                validator: Validator.validateLogin,
                errorMessage: 'логин введен неверно'
            },
            {
                labelText: 'Пароль',
                inputName: 'password',
                inputType: 'text',
                inputPlaceholder: "",
                validator: Validator.validatePassword,
                errorMessage: 'пароль введен неверно',
                link: {
                    className: 'login-form__forgot-password',
                    href: '#',
                    text: 'Забыли пароль?',
                },
            }
        ],
    })


