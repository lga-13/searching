import {Validator} from "../../utils/field_validator.ts";
import "./login-form.css";
import Form from "../../blocks/form/form.ts";

export const loginForm = new Form(
    {
        className: "login-form",

        title: {
            className: 'login-form__title',
            text: 'Войти',
            tag: 'h2',
            settings: {withInternalID: true}
        },

        button: {
            className: 'login-form__button',
            typeName: 'submit',
            text: 'Войти',
            settings: {withInternalID: true},
            events: {}
        },

        toggleButtons: [{
            className: 'form-toggle',
            typeName: 'button',
            text: '👁',
            settings: {withInternalID: true},
            events: {}
        }],

        link: {
            className: 'login-form__registration',
            href: '#',
            text: 'Еще не зарегестрированы?',
            settings: {withInternalID: true}
        },
        fields: [
            {
                label: {
                    className: 'login-form__label',
                    text: 'Логин',
                    settings: {withInternalID: true}
                },
                input: {
                    className: 'login-form__input',
                    name: 'login',
                    placeholder: "",
                    inputType: 'text',
                    settings: {withInternalID: true}
                },
                errorMessage: {
                    className: 'login-form__error-message',
                    text: 'логин введен некорректно',
                    settings: {withInternalID: true}
                },
                validator: Validator.validateLogin,
            },
            {
                label: {
                    className: 'login-form__label',
                    text: 'Пароль',
                    settings: {withInternalID: true}
                },
                input: {
                    className: 'login-form__input',
                    name: 'password',
                    placeholder: "",
                    inputType: 'password',
                    settings: {withInternalID: true}
                },
                errorMessage: {
                    className: 'login-form__error-message',
                    text: 'пароль введен некорректно',
                    settings: {withInternalID: true}
                },
                validator: Validator.validatePassword,
                link: {
                    className: 'login-form__forgot-password',
                    href: '#',
                    text: 'Забыли пароль?',
                },
            }
        ],
    })


