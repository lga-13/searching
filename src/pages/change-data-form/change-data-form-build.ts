import Button from "../../components/button/button.ts";
import Label from "../../components/label/label.ts";
import Input from "../../components/input/input.ts";
import {Validator} from "../../utils/field_validator.ts";
import Img from "../../components/img/img.ts";
import avatar from "../../public/static/img/avatar.svg";
import btnback from "../../public/static/img/btn-back.svg";
import ChangeDataForm from "./change-data-form.ts";
import Link from "../../components/links/link.ts";

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
        settings: {withInternalID: true},
        validator: Validator.validatePassword,
        events: {
            blur: () => {
                changeDataFormEmailInput.validate()
            },
            focus: () => {
                // код, который будет выполняться при получении фокуса
                changeDataFormEmailInput.focus()
            }
        }
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
        fieldName: "phone",
        text: 'phone',
        settings: {withInternalID: true},
        validator: Validator.validatePhone,
        events: {
            blur: () => {
                changeDataFormPhoneInput.validate()
            },
            focus: () => {
                changeDataFormPhoneInput.focus()
            }
        }
    }
)
const changeDataFormButton = new Button(
    {
        className: 'change-data-form__button',
        text: 'Сохранить',
        settings: {withInternalID: true},
        events: {
            click: () => {

                // Проверка допустимой длины логина и пароля
                if (!Validator.validateEmail(changeDataFormEmailInput.getInputValue()) ||
                    !Validator.validateLogin(changeDataFormLoginInput.getInputValue()) ||
                    !Validator.validatePhone(changeDataFormPhoneInput.getInputValue()) ||
                    !Validator.validateName(changeDataFormNameInput.getInputValue()) ||
                    !Validator.validateName(changeDataFormSecondNameInput.getInputValue())

                ) {
                    return;
                }
                else {
                    console.log(changeDataForm.get_data());
                    changeDataForm.clear()
                }
            },
        }
    })
const buttonWithImg = new Img(
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
        changeDataFormNameLabel: changeDataFormNameLabel,
        changeDataFormNameInput: changeDataFormNameInput,
        changeDataFormSecondNameLabel: changeDataFormSecondNameLabel,
        changeDataFormSecondNameInput: changeDataFormSecondNameInput,
        changeDataFormEmailLabel: changeDataFormEmailLabel,
        changeDataFormEmailInput: changeDataFormEmailInput,
        changeDataFormPhoneLabel: changeDataFormPhoneLabel,
        changeDataFormPhoneInput: changeDataFormPhoneInput,
        changeDataFormButton: changeDataFormButton,
        buttonWithImg: buttonWithImg,
        changeDataFormLink: changeDataFormLink,
    })