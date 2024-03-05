import {Validator} from "../../utils/field_validator.ts";
import Form from "../../components/form/form.ts";
import "./login-form.css";


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
        fields: [
            {
                labelText: 'Логин',
                inputName: 'login',
                inputType: 'text',
                inputPlaceholder: "Укажите ваш логин",
                validator: Validator.validateLogin,
                link: {
                    className: 'login-form__forgot-password',
                    href: '#',
                    text: 'Забыли пароль?',
                }
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