import {Validator} from "../../utils/field_validator.ts";
import avatar from "../../public/static/img/avatar.svg";
import Form from "../../components/form/form.ts";
import "./change-password-form.css"

export const changePasswordForm = new Form(
    {

        className: 'change-password-form',

        button: {
            className: 'change-password-form__button',
            typeName: 'submit',
            text: 'Сохранить'
        },

        labelFieldClassName: 'change-password-form__label',
        inputFieldClassName: 'change-password-form__input',
        errorMessageClassName: 'change-password-form__error-message',

        fields: [
            {
                labelText: 'Старый пароль',
                inputName: 'password',
                inputType: 'text',
                inputPlaceholder: "",
                validator: () => {return Validator.validateLogin},
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
    }
)
changePasswordForm.hide()


