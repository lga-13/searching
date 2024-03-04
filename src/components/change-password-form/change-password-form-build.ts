import Button from "../../components/button/button.ts";
import Label from "../../components/label/label.ts";
import Input from "../../components/input/input.ts";
import {Validator} from "../../utils/field_validator.ts";
import Img from "../../components/img/img.ts";
import avatar from "../../public/static/img/avatar.svg";
import btnback from "../../public/static/img/btn-back.svg";
import ChangePasswordForm from "./change-password-form.ts";
import ErrorMessage from "../../components/error-message/error-message.ts";

// Заголовок формы регистрации
const  changePasswordFormImg = new Img(
    {
        className: 'change-password-form__img',
        srcName: avatar,
        altText: 'photo',
        settings: {withInternalID: true}
    }
)
const PasswordLabel = new Label(
    {
        className: 'change-password-form__label',
        text: 'Старый пароль',
        settings: {withInternalID: true}
    }
)
const PasswordInput = new Input(
    {
        className: 'change-password-form__input',
        typeName: '',
        fieldName: "old-password",
        text: 'old_password',
        settings: {withInternalID: true},
        validator: Validator.validateName,
        events: {
            blur: () => {
                PasswordInput.validate()
            },
            focus: () => {
                PasswordInput.focus()
            }
        }
    }
)
const passwordErrorMessage = new ErrorMessage(
    {
        className: 'change-password-form__error-message',
        errorMessage: 'старый пароль введен неверно',
        settings: {withInternalID: true}
    }
)
const newPasswordLabel = new Label(
    {
        className: 'change-password-form__label',
        text: 'Новый пароль',
        settings: {withInternalID: true}
    }
)
const newPasswordInput = new Input(
    {
        className: 'change-password-form__input',
        typeName: '',
        fieldName: "new_password",
        text: 'new_password',
        settings: {withInternalID: true},
        validator: Validator.validateName,
        events: {
            blur: () => {
                newPasswordInput.validate()
            },
            focus: () => {
                newPasswordInput.focus()
            }
        }
    }
)
const newPasswordErrorMessage = new ErrorMessage(
    {
        className: 'change-password-form__error-message',
        errorMessage: 'новый пароль введен неверно',
        settings: {withInternalID: true}
    }
)
const repeatNewPasswordLabel = new Label(
    {
        className: 'change-password-form__label',
        text: 'Повторите новый пароль',
        settings: {withInternalID: true}
    }
)
const repeatNewPasswordInput = new Input(
    {
        className: 'change-password-form__input',
        typeName: 'password',
        fieldName: "repeat_new_password",
        text: 'repeat_new_password',
        settings: {withInternalID: true},
        validator: Validator.validateName,
        events: {
            blur: () => {
                repeatNewPasswordInput.validate()
            },
            focus: () => {
                repeatNewPasswordInput.focus()
            }
        }
    }
)
const repeatNewPasswordErrorMessage = new ErrorMessage(
    {
        className: 'change-password-form__error-message',
        errorMessage: 'пароли не совпадают',
        settings: {withInternalID: true}
    }
)
const changePasswordFormButton = new Button(
    {
        className: 'change-password-form__button',
        typeName: 'submit',
        text: 'Сохранить',
        settings: {withInternalID: true},
        events: {
            click: () => {

                // Проверка допустимой длины логина и пароля
                if (!Validator.validatePassword(PasswordInput.getInputValue())

                ) {
                    return;
                }
                else {
                    console.log(changePasswordForm.get_data());
                    changePasswordForm.clear()
                }
            },
        }
    })
const changePasswordButtonWithImg = new Img(
    {
        className: 'change-password-form__btn-back',
        typeName: 'button',
        href: '',
        srcName: btnback,
        alt: 'btn',
        settings: {withInternalID: true},
        events: {},
    }
)

export const changePasswordForm = new ChangePasswordForm(
    {
        className: "change-password-form",
        settings: {withInternalID: true},
        changePasswordFormImg: changePasswordFormImg,
        PasswordLabel: PasswordLabel,
        PasswordInput: PasswordInput,
        passwordErrorMessage: passwordErrorMessage,
        newPasswordLabel: newPasswordLabel,
        newPasswordInput: newPasswordInput,
        newPasswordErrorMessage: newPasswordErrorMessage,
        repeatNewPasswordLabel: repeatNewPasswordLabel,
        repeatNewPasswordInput: repeatNewPasswordInput,
        repeatNewPasswordErrorMessage: repeatNewPasswordErrorMessage,
        changePasswordFormButton: changePasswordFormButton,
        changePasswordButtonWithImg: changePasswordButtonWithImg,
        events: {
            blur: () => {changePasswordForm.hide()}}
    })