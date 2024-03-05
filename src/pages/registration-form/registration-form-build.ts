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
                inputPlaceholder: "Укажите email",
                validator: Validator.validateEmail,
            },
            {
                labelText: 'Имя пользователя',
                inputName: 'login',
                inputType: 'text',
                inputPlaceholder: "Укажите login",
                validator: Validator.validateLogin,
            },
            {
                labelText: 'Имя',
                inputName: 'first_name',
                inputType: 'text',
                inputPlaceholder: "Укажите имя",
                validator: Validator.validateName,
            },
            {
                labelText: 'Фамилия',
                inputName: 'second_name',
                inputType: 'text',
                inputPlaceholder: "Укажите фамилию",
                validator: Validator.validateName,
            },
            {
                labelText: 'Телефон',
                inputName: 'phone',
                inputType: 'phone',
                inputPlaceholder: "Телефон",
                validator: Validator.validatePhone,
            },
            {
                labelText: 'Пароль',
                inputName: 'login',
                inputType: 'text',
                inputPlaceholder: "Укажите ваш логин",
                validator: Validator.validateLogin,
            },
            {
                labelText: 'Повтор пароля',
                inputName: "repeatPassword",
                inputType: 'text',
                inputPlaceholder: 'Повторите пароль',
                validator: Validator.validatePassword,
            }
        ],

    })