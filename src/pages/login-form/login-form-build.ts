import {Validator} from "../../utils/field_validator.ts";
import Form from "../../components/form/form.ts";
import "./login-form.css";
import ErrorMessage from "../../components/error-message/error-message.ts";


export const loginForm = new Form(
    {
        className: "login-form",
        titleClassName: 'login-form__title',
        titleText: 'Войти',
        titleTag: 'h2',
        buttonClassName: 'login-form__button',
        buttonTypeName: 'submit',
        buttonText: 'Авторизация',
        labelFieldClassName: 'login-form__label',
        inputFieldClassName: 'login-form__input',
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
                inputPlaceholder: "Укажите ваш логин",
                validator: Validator.validateLogin,
            },
            {
                labelText: 'Пароль',
                inputName: 'password',
                inputType: 'text',
                inputPlaceholder: "Укажите ваш пароль",
                validator: Validator.validatePassword,
                link: {
                    className: 'login-form__forgot-password',
                    href: '#',
                    text: 'Забыли пароль?',
                }
            }
        ],

    })

export const currentErrorMessage = new ErrorMessage(
    {
        className: 'login-form__error-message',
        errorMessage: 'логин введен неверно',
        settings: {withInternalID: true}
    }
)


