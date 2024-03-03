import Button from "../../components/button/button.ts";
import FormTitle from "../../components/titles/form-title.ts";
import Label from "../../components/label/label.ts";
import Input from "../../components/input/input.ts";
import Link from "../../components/links/link.ts";
import RegistrationForm from "./registration-form.ts";


const registrationTitle = new FormTitle(
    {
        className: 'registration-form__title',
        text: 'Регистрация',
        settings: {withInternalID: true}
    }
)

const registrationFormEmailLabel = new Label(
    {
        className: 'registration-form__label',
        text: 'Почта',
        settings: {withInternalID: true}
    }
)

const registrationFormEmailInput = new Input(
    {
        className: 'registration-form__input',
        text: 'email',
        settings: {withInternalID: true},
        events: {}
    }
)

const registrationFormLoginLabel = new Label(
    {
        className: 'registration-form__label',
        text: 'Логин',
        settings: {withInternalID: true}
    }
)

const registrationFormLoginInput = new Input(
    {
        className: 'registration-form__input',
        text: 'login',
        settings: {withInternalID: true},
        events: {}
    }
)

const registrationFormNameLabel = new Label(
    {
        className: 'registration-form__label',
        text: 'Имя',
        settings: {withInternalID: true}
    }
)

const registrationFormNameInput = new Input(
    {
        className: 'registration-form__input',
        text: 'first-name',
        settings: {withInternalID: true},
        events: {}
    }
)

const registrationFormSecondNameLabel = new Label(
    {
        className: 'registration-form__label',
        text: 'Фамилия',
        settings: {withInternalID: true}
    }
)

const registrationFormSecondNameInput = new Input(
    {
        className: 'registration-form__input',
        text: 'second-name',
        settings: {withInternalID: true},
        events: {}
    }
)

const registrationFormPhoneLabel = new Label(
    {
        className: 'registration-form__label',
        text: 'Телефон',
        settings: {withInternalID: true}
    }
)

const registrationFormPhoneInput = new Input(
    {
        className: 'registration-form__input',
        text: 'phone',
        settings: {withInternalID: true},
        events: {}
    }
)

const registrationFormPasswordLabel = new Label(
    {
        className: 'registration-form__label',
        text: 'Пароль',
        settings: {withInternalID: true}
    }
)

const registrationFormPasswordInput = new Input(
    {
        className: 'registration-form__input',
        text: 'password',
        settings: {withInternalID: true},
        events: {}
    }
)

const registrationFormRepeatPasswordLabel = new Label(
    {
        className: 'registration-form__label',
        text: 'Повторите пароль',
        settings: {withInternalID: true}
    }
)

const registrationFormRepeatPasswordInput = new Input(
    {
        className: 'registration-form__input',
        text: 'repeat password',
        settings: {withInternalID: true},
        events: {}
    }
)

const registrationFormButton = new Button(
    {
        className: 'registration-form__button',
        text: 'Регистрация',
        settings: {withInternalID: true},
        events: {}
    })

const registrationFormLoginLink = new Link(
    {
        className: 'registration-form__login',
        href: '#',
        text: 'Войти',
        settings: {withInternalID: true}
    }
)

export const registrationForm = new RegistrationForm(
    {
        className: "registration-form",
        settings: {withInternalID: true},
        registrationTitle: registrationTitle,
        registrationFormEmailLabel: registrationFormEmailLabel,
        registrationFormEmailInput: registrationFormEmailInput,
        registrationFormLoginLabel: registrationFormLoginLabel,
        registrationFormLoginInput: registrationFormLoginInput,
        registrationFormNameLabel: registrationFormNameLabel,
        registrationFormNameInput: registrationFormNameInput,
        registrationFormSecondNameLabel: registrationFormSecondNameLabel,
        registrationFormSecondNameInput: registrationFormSecondNameInput,
        registrationFormPhoneLabel: registrationFormPhoneLabel,
        registrationFormPhoneInput: registrationFormPhoneInput,
        registrationFormPasswordLabel: registrationFormPasswordLabel,
        registrationFormPasswordInput: registrationFormPasswordInput,
        registrationFormRepeatPasswordLabel: registrationFormRepeatPasswordLabel,
        registrationFormRepeatPasswordInput: registrationFormRepeatPasswordInput,
        registrationFormButton: registrationFormButton,
        registrationFormLink: registrationFormLoginLink,
    })