import {Validator} from "../../utils/field_validator.ts";
import "./registration-form.css";
import Form from "../../blocks/form/form.ts";

export const registrationForm = new Form(
    {

        className: 'registration-form',

        title: {
            className: 'registration-form__title',
            text: 'Регистрация',
            tag: 'h2',
            settings: {withInternalID: true}
        },

        button: {
            className: 'registration-form__button',
            typeName: 'submit',
            text: 'Зарегистрироваться',
            settings: {withInternalID: true},
            events: {
                click: () => {
                    if (registrationForm.validate()) {
                        const data = registrationForm.get_data()
                        console.log(data)
                        registrationForm.clear()
                    }
                }
            }
        },
        toggleButtons: [
            {
                className: 'form-toggle',
                typeName: 'button',
                text: '👁',
                settings: {withInternalID: true},
                events: {}
            },
            {
                className: 'form-toggle-two',
                typeName: 'button',
                text: '👁',
                settings: {withInternalID: true},
                events: {}
            }
        ],
        link: {
            className: 'registration-form__login',
            href: '#',
            text: 'Войти',
            settings: {withInternalID: true},
        },
        fields: [
            {
                label: {
                    className: 'registration-form__label',
                    text: 'Почта',
                    settings: {withInternalID: true}
                },
                input: {
                    className: 'registration-form__input',
                    name: 'email',
                    placeholder: "",
                    inputType: 'text',
                    settings: {withInternalID: true}
                },
                errorMessage: {
                    className: 'login-form__error-message',
                    text: 'почта введена некорректно',
                    settings: {withInternalID: true}
                },
                validator: Validator.validateEmail
            },
            {
                label: {
                    className: 'registration-form__label',
                    text: 'Логин',
                    settings: {withInternalID: true}
                },
                input: {
                    className: 'registration-form__input',
                    name: 'login',
                    placeholder: "",
                    inputType: 'text',
                    settings: {withInternalID: true}
                },
                errorMessage: {
                    className: 'login-form__error-message',
                    text: 'логин введен некорректно',
                    settings: {withInternalID: true}
                },
                validator: Validator.validateLogin,

            },
            {
                label: {
                    className: 'registration-form__label',
                    text: 'Имя',
                    settings: {withInternalID: true}
                },
                input: {
                    className: 'registration-form__input',
                    name: 'first_name',
                    placeholder: "",
                    inputType: 'text',
                    settings: {withInternalID: true}
                },
                errorMessage: {
                    className: 'login-form__error-message',
                    text: 'имя введено некорректно',
                    settings: {withInternalID: true}
                },
                validator: Validator.validateName
            },
            {
                label: {
                    className: 'registration-form__label',
                    text: 'Фамилия',
                    settings: {withInternalID: true}
                },
                input: {
                    className: 'registration-form__input',
                    name: 'second_name',
                    placeholder: "",
                    inputType: 'text',
                    settings: {withInternalID: true}
                },
                errorMessage: {
                    className: 'login-form__error-message',
                    text: 'фамилия введена некорректно',
                    settings: {withInternalID: true}
                },
                validator: Validator.validateName,
            },
            {
                label: {
                    className: 'registration-form__label',
                    text: 'Телефон',
                    settings: {withInternalID: true}
                },
                input: {
                    className: 'registration-form__input',
                    name: 'phone',
                    placeholder: "",
                    inputType: 'phone',
                    settings: {withInternalID: true}
                },
                errorMessage: {
                    className: 'login-form__error-message',
                    text: 'телефон введен некорректно',
                    settings: {withInternalID: true}
                },
                validator: Validator.validatePhone,
            },
            {
                label: {
                    className: 'registration-form__label',
                    text: 'Пароль',
                    settings: {withInternalID: true}
                },
                input: {
                    className: 'registration-form__input',
                    name: 'password',
                    placeholder: "",
                    inputType: 'password',
                    settings: {withInternalID: true}
                },
                errorMessage: {
                    className: 'login-form__error-message',
                    text: 'пароль введен некорректно',
                    settings: {withInternalID: true}
                },
                validator: Validator.validatePassword,
            },
            {
                label: {
                    className: 'registration-form__label',
                    text: 'Повторите пароль',
                    settings: {withInternalID: true}
                },
                input: {
                    className: 'registration-form__input',
                    name: "repeatPassword",
                    placeholder: "",
                    inputType: 'password',
                    settings: {withInternalID: true}
                },
                errorMessage: {
                    className: 'login-form__error-message',
                    text: 'пароли не совпадают',
                    settings: {withInternalID: true}
                },
                validator: Validator.validatePassword,
            }
        ],
    })