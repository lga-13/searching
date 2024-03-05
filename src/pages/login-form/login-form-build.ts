import LoginForm from "../../pages/login-form/login-form.ts";
import {Validator} from "../../utils/field_validator.ts";


export const loginForm = new LoginForm(
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
                validator: Validator.validateLogin
            },
            {
                labelText: 'Пароль',
                inputName: 'password',
                inputType: 'text',
                inputPlaceholder: "Укажите ваш пароль",
                validator: Validator.validatePassword
            }
        ],
    })