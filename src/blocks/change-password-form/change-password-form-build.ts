import {ErrorMessages, Validator} from "../../utils/field_validator.ts";
import "./change-password-form.css"
import Form from "../form/form.ts";

export const changePasswordForm = new Form(
    {

        className: 'change-password-form',

        button: {
            className: 'change-password-form__button',
            typeName: 'submit',
            text: 'Сохранить'
        },

        fields: [
            {
                label: {
                    className: 'change-password-form__label',
                    text: "Старый пароль",
                    settings: {withInternalID: true}
                },
                input: {
                    className: 'change-password-form__input',
                    name: 'password',
                    placeholder: '',
                    inputType: "password",
                    settings: {withInternalID: true},
                    events: {
                        click: () => {}
                    }
                },
                errorMessage: {
                    className: 'change-password-form__error-message',
                    text: ErrorMessages.validatePassword,
                    settings: {withInternalID: true}
                },
                validator: Validator.validatePassword,
            },
            {
                label: {
                    className: 'change-password-form__label',
                    text: "Новый пароль",
                    settings: {withInternalID: true}
                },
                input: {
                    className: 'change-password-form__input',
                    name: 'new_password',
                    placeholder: '',
                    inputType: "password",
                    settings: {withInternalID: true},
                    events: {
                        click: () => {}
                    }
                },
                errorMessage: {
                    className: 'change-password-form__error-message',
                    text: ErrorMessages.validatePassword,
                    settings: {withInternalID: true}
                },
                validator: Validator.validatePassword,
            },
            {
                label: {
                    className: 'change-password-form__label',
                    text: "Повторите новый пароль",
                    settings: {withInternalID: true}
                },
                input: {
                    className: 'change-password-form__input',
                    name: 'repeat_password',
                    placeholder: '',
                    inputType: "password",
                    settings: {withInternalID: true},
                    events: {
                        click: () => {}
                    }
                },
                errorMessage: {
                    className: 'change-password-form__error-message',
                    text: ErrorMessages.validatePassword,
                    settings: {withInternalID: true}
                },
                validator: Validator.validatePassword,
            },
        ],
    }
)
// changePasswordForm.hide()


