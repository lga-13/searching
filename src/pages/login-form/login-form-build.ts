import {Validator} from "../../utils/field_validator.ts";
import Form from "../../components/form/form.ts";
import "./login-form.css";

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

        toggleButtons: [{
            className: 'form-toggle',
            typeName: 'button',
            text: '👁'
        }],

        link: {
            className: 'login-form__registration',
            href: '#',
            text: 'Еще не зарегестрированы?',
        },

        labelFieldClassName: 'login-form__label',
        inputFieldClassName: 'login-form__input',
        errorMessageClassName: 'login-form__error-message',

        fields: [
            {
                labelText: 'Логин',
                inputName: 'login',
                inputType: 'text',
                inputPlaceholder: "",
                validator: Validator.validateLogin,
                errorMessage: 'логин введен некорректно'
            },
            {
                labelText: 'Пароль',
                inputName: 'password',
                inputType: 'password',
                inputPlaceholder: "",
                validator: Validator.validatePassword,
                errorMessage: 'пароль введен некорректно',
                link: {
                    className: 'login-form__forgot-password',
                    href: '#',
                    text: 'Забыли пароль?',
                },
            }
        ],
    })


