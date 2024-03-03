import Button from "../../components/button/button.ts";
import FormTitle from "../../components/titles/form-title.ts";
import Label from "../../components/label/label.ts";
import Input from "../../components/input/input.ts";
import Link from "../../components/links/link.ts";
import RegistrationForm from "./registration-form.ts";
import {Validator} from "../../utils/field_validator.ts";


// Заголовок формы регистрации
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
        fieldName: "email",
        text: 'email',
        settings: {withInternalID: true},
        validator: Validator.validateEmail,
        events: {
                blur: () => {
                        if (!registrationFormEmailInput.already_check && !Validator.validateEmail(registrationFormEmailInput.getInputValue())) {
                                registrationFormEmailInput.already_check = true
                                return;
                        }
                },
                focus: () => {
                        registrationFormEmailInput.already_check = false
                }
        }
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
        fieldName: "login",
        text: 'login',
        settings: {withInternalID: true},
        validator: Validator.validateLogin,
        events: {
                blur: () => {
                        if (!registrationFormLoginInput.already_check && !Validator.validateLogin(registrationFormLoginInput.getInputValue())) {
                                registrationFormLoginInput.already_check = true
                                return;
                        }
                },
                focus: () => {
                        registrationFormLoginInput.already_check = false
                }
        }
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
        fieldName: "first_name",
        text: 'first-name',
        settings: {withInternalID: true},
        validator: Validator.validateName,
        events: {
                blur: () => {
                        registrationFormNameInput.validate()
                },
                focus: () => {
                        registrationFormNameInput.focus()
                }
        }
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
        fieldName: "second_name",
        text: 'second-name',
        settings: {withInternalID: true},
        validator: Validator.validateName,
        events: {
                blur: () => {
                        registrationFormSecondNameInput.validate()
                },
                focus: () => {
                        registrationFormSecondNameInput.focus()
                }
        }
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
        fieldName: "phone",
        text: 'phone',
        settings: {withInternalID: true},
        validator: Validator.validatePhone,
        events: {
                blur: () => {
                        registrationFormPhoneInput.validate()
                },
                focus: () => {
                        registrationFormPhoneInput.focus()
                }
        }
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
        fieldName: "password",
        text: 'password',
        settings: {withInternalID: true},
        validator: Validator.validatePassword,
        events: {
                blur: () => {
                        registrationFormPasswordInput.validate()
                },
                focus: () => {
                        registrationFormPasswordInput.focus()
                }
        }
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
        fieldName: "repeatPassword",
        className: 'registration-form__input',
        text: 'repeat password',
        settings: {withInternalID: true},
        validator: Validator.validatePassword,
        events: {
                blur: () => {
                        registrationFormRepeatPasswordInput.validate()
                },
                focus: () => {
                        registrationFormRepeatPasswordInput.focus()
                }
        }
    }
)

const registrationFormButton = new Button(
    {
        className: 'registration-form__button',
        text: 'Зарегистрироваться',
        settings: {withInternalID: true},
        events: {
                click: () => {

                        // Проверка допустимой длины логина и пароля
                        if (!Validator.validateEmail(registrationFormEmailInput.getInputValue()) ||
                            !Validator.validateLogin(registrationFormLoginInput.getInputValue()) ||
                            !Validator.validatePassword(registrationFormPasswordInput.getInputValue()) ||
                            !Validator.validatePhone(registrationFormPhoneInput.getInputValue()) ||
                            !Validator.validateName(registrationFormNameInput.getInputValue()) ||
                            !Validator.validateName(registrationFormSecondNameInput.getInputValue())

                        ) {
                                return;
                        }
                        else {
                                console.log(registrationForm.get_data());
                                registrationForm.clear()
                        }
                },
        }
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