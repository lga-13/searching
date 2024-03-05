import Button from "../../components/button/button.ts";
import Label from "../../components/label/label.ts";
import Input from "../../components/input/input.ts";
import {Validator} from "../../utils/field_validator.ts";
import Img from "../../components/img/img.ts";
import avatar from "../../public/static/img/avatar.svg";
import btnback from "../../public/static/img/btn-back.svg";
import ChangeDataForm from "./change-data-form.ts";
import Link from "../../components/links/link.ts";
import ErrorMessage from "../../components/error-message/error-message.ts";
import ButtonWithImg from "../../components/btn-with-img/btn-with-img.ts";
import Form from "../form/form.ts";

// Заголовок формы регистрации
const  changeDataFormImg = new Img(
    {
        className: 'change-data-form__img',
        srcName: avatar,
        altText: 'photo',
        settings: {withInternalID: true}
    }
)

const changeDataFormLink = new Link(
    {
        className: 'change-data-form__link-hide',
        href: '#',
        text: 'Сменить аватар',
        settings: {withInternalID: true}
    }
)

const changeDataFormLoginLabel = new Label(
    {
        className: 'change-data-form__label',
        text: 'Логин',
        settings: {withInternalID: true}
    }
)

const changeDataFormLoginInput = new Input(
    {
        className: 'change-data-form__input',
        placeholder: "login",
        fieldName: "first_name",
        text: 'first-name',
        settings: {withInternalID: true},
        validator: Validator.validateLogin,
    }
)
const loginErrorMessage = new ErrorMessage(
    {
        className: 'change-data-form__error-message',
        errorMessage: 'логин введен неверно',
        settings: {withInternalID: true}
    }
)

const changeDataFormNameLabel = new Label(
    {
        className: 'change-data-form__label',
        text: 'Имя',
        settings: {withInternalID: true}
    }
)

const changeDataFormNameInput = new Input(
    {
        className: 'change-data-form__input',
        placeholder: "name",
        fieldName: "first_name",
        text: 'first-name',
        settings: {withInternalID: true},
        validator: Validator.validateName,
        events: {
            blur: () => {
                changeDataFormNameInput.validate()
            },
            focus: () => {
                changeDataFormNameInput.focus()
            }
        }
    }
)

const nameErrorMessage = new ErrorMessage(
    {
        className: 'change-data-form__error-message',
        errorMessage: 'имя введено неверно',
        settings: {withInternalID: true}
    }
)

const changeDataFormSecondNameLabel = new Label(
    {
        className: 'change-data-form__label',
        text: 'Фамилия',
        settings: {withInternalID: true}
    }
)

const changeDataFormSecondNameInput = new Input(
    {
        className: 'change-data-form__input',
        placeholder: "second_name",
        fieldName: "second_name",
        text: 'second-name',
        settings: {withInternalID: true},
        validator: Validator.validateName,
        events: {
            blur: () => {
                changeDataFormSecondNameInput.validate()
            },
            focus: () => {
                changeDataFormSecondNameInput.focus()
            }
        }
    }
)

const secondNameErrorMessage = new ErrorMessage(
    {
        className: 'change-data-form__error-message',
        errorMessage: 'фамилия введена неверно',
        settings: {withInternalID: true}
    }
)

const changeDataFormEmailLabel = new Label(
    {
        className: 'change-data-form__label',
        text: 'Почта',
        settings: {withInternalID: true}
    }
)

const changeDataFormEmailInput = new Input(
    {
        className: 'change-data-form__input',
        fieldName: "password",
        text: 'password',
        placeholder: "email",
        settings: {withInternalID: true},
        validator: Validator.validateEmail,
    }
)

const emailErrorMessage = new ErrorMessage(
    {
        className: 'change-data-form__error-message',
        errorMessage: 'почта введена неверно',
        settings: {withInternalID: true}
    }
)

const changeDataFormPhoneLabel = new Label(
    {
        className: 'change-data-form__label',
        text: 'Телефон',
        settings: {withInternalID: true}
    }
)

const changeDataFormPhoneInput = new Input(
    {
        className: 'change-data-form__input',
        typeName: 'text',
        fieldName: "phone",
        text: 'phone',
        settings: {withInternalID: true},
        validator: Validator.validatePhone,
    }
)

const phoneErrorMessage = new ErrorMessage(
    {
        className: 'change-data-form__error-message',
        errorMessage: 'телефон введен неверно',
        settings: {withInternalID: true}
    }
)

const changeDataFormButton = new Button(
    {
        className: 'change-data-form__button',
        typeName: 'button',
        text: 'Сохранить',
        settings: {withInternalID: true},
        events: {
            click: () => {

                // Проверка допустимой длины логина и пароля
                if (changeDataForm.validate()) {
                    console.log(changeDataForm.get_data());
                    changeDataForm.clear()
                }
            },
        }
    })

const buttonWithImg = new ButtonWithImg(
    {
        className: 'change-data-form__btn-back',
        typeName: 'button',
        href: '',
        srcName: btnback,
        alt: 'btn',
        settings: {withInternalID: true},
        events: {},
    }
)

export const changeDataForm = new ChangeDataForm(
    {
        className: "change-data-form",
        settings: {withInternalID: true},
        changeDataFormImg: changeDataFormImg,
        changeDataFormLoginLabel: changeDataFormLoginLabel,
        changeDataFormLoginInput: changeDataFormLoginInput,
        loginErrorMessage: loginErrorMessage,
        changeDataFormNameLabel: changeDataFormNameLabel,
        changeDataFormNameInput: changeDataFormNameInput,
        nameErrorMessage: nameErrorMessage,
        changeDataFormSecondNameLabel: changeDataFormSecondNameLabel,
        changeDataFormSecondNameInput: changeDataFormSecondNameInput,
        secondNameErrorMessage: secondNameErrorMessage,
        changeDataFormEmailLabel: changeDataFormEmailLabel,
        changeDataFormEmailInput: changeDataFormEmailInput,
        emailErrorMessage: emailErrorMessage,
        changeDataFormPhoneLabel: changeDataFormPhoneLabel,
        changeDataFormPhoneInput: changeDataFormPhoneInput,
        phoneErrorMessage: phoneErrorMessage,
        changeDataFormButton: changeDataFormButton,
        buttonWithImg: buttonWithImg,
        changeDataFormLink: changeDataFormLink,
        events: {}
    })