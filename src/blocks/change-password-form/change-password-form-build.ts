import {Validator} from "../../utils/field_validator.ts";
import avatar from "../../public/static/img/avatar.svg";
import btnback from "../../public/static/img/btn-back.svg";
import Form from "../../components/form/form.ts";
import "./change-password-form.css"

export const changePasswordForm = new Form(
    {
            className: 'change-password-form',
            imgClass: 'change-password-form__img',
            srcNameAvatar: avatar,
            buttons: [
                {
                className: 'change-password-form__button',
                typeName: 'submit',
                text: 'Сохранить'
            },
                {
                className: 'change-password-form__btn-back',
                srcNameImg: btnback,
                typeName: '',
                text: ''
                }
            ],
            labelFieldClassName: 'change-password-form__label',
            inputFieldClassName: 'change-password-form__input',
            errorMessageClassName: 'change-password-form__error-message',
            link: {
                className: '',
                href: '',
                text: '',
            },
            fields: [
                {
                    labelText: 'Старый пароль',
                    inputName: 'password',
                    inputType: 'text',
                    inputPlaceholder: "",
                    validator: Validator.validateLogin,
                    errorMessage: 'старый пароль введен некорректно'
                },
                {
                    labelText: 'Новый пароль',
                    inputName: 'password',
                    inputType: 'text',
                    inputPlaceholder: "",
                    validator: Validator.validatePassword,
                    errorMessage: 'новый пароль введен некорректно',
                },
                {
                    labelText: 'Повторите новый пароль',
                    inputName: 'password',
                    inputType: 'text',
                    inputPlaceholder: "",
                    validator: Validator.validatePassword,
                    errorMessage: 'пароли не совпадают',
                }
            ],
            events: {
                blur: () => {changePasswordForm.hide()}}

    })



