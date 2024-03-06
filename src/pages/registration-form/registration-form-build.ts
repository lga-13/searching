import {Validator} from "../../utils/field_validator.ts";
import Form from "../../components/form/form.ts";
import "./registration-form.css";

export const registrationForm = new Form(
    {
        className: "registration-form",
        title: {
            className: 'registration-form__title',
            text: 'Регистрация',
            tag: 'h2'
        },
        button: {
            className: 'registration-form__button',
            typeName: 'submit',
            text: 'Зарегистрироваться'
        },
        labelFieldClassName: 'registration-form__label',
        inputFieldClassName: 'registration-form__input',
        errorMessageClassName: 'registration-form__error-message',
        link: {
            className: 'registration-form__login',
            href: '#',
            text: 'Войти',
        },
        fields: [
            {
                labelText: 'Почта',
                inputName: 'email',
                inputType: 'text',
                inputPlaceholder: "",
                validator: Validator.validateEmail,
                errorMessage: 'почта введена неверно',
            },
            {
                labelText: 'Логин',
                inputName: 'login',
                inputType: 'text',
                inputPlaceholder: "",
                validator: Validator.validateLogin,
                errorMessage: 'логин введен неверно',

            },
            {
                labelText: 'Имя',
                inputName: 'first_name',
                inputType: 'text',
                inputPlaceholder: "",
                validator: Validator.validateName,
                errorMessage: 'имя введено неверно',
            },
            {
                labelText: 'Фамилия',
                inputName: 'second_name',
                inputType: 'text',
                inputPlaceholder: "",
                validator: Validator.validateName,
                errorMessage: 'фамилия введена неверно',
            },
            {
                labelText: 'Телефон',
                inputName: 'phone',
                inputType: 'phone',
                inputPlaceholder: "",
                validator: Validator.validatePhone,
                errorMessage: 'телефон введен неверно',
            },
            {
                labelText: 'Пароль',
                inputName: 'login',
                inputType: 'text',
                inputPlaceholder: "",
                validator: Validator.validateLogin,
                errorMessage: 'пароль введен неверно',
            },
            {
                labelText: 'Повторите пароль',
                inputName: "repeatPassword",
                inputType: 'text',
                inputPlaceholder: '',
                validator: Validator.validatePassword,
                errorMessage: 'пароли не совпадают',
            }
        ],
    })