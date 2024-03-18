import {ErrorMessages, Validator} from "../../utils/field_validator.ts";
import Form from "../form/form.ts";
import "./change-data-form.css";

export const changeDataForm = new Form(
    {
        className: 'change-data-form',
        button: {
            className: 'change-data-form__button',
            typeName: 'submit',
            text: 'Сохранить'
        },
        fields: [
            {
                label: {
                    className: 'change-data-form__label',
                    text: "Логин",
                    settings: {withInternalID: true}
                },
                input: {
                    className: 'change-data-form__input',
                    name: 'login',
                    placeholder: '',
                    inputType: "text",
                    settings: {withInternalID: true},
                    events: {
                        click: () => {}
                    }
                },
                errorMessage: {
                    className: 'change-data-form__error-message',
                    text: ErrorMessages.validateLogin,
                    settings: {withInternalID: true}
                },
                validator: Validator.validateLogin,
            },
            {
                label: {
                    className: 'change-data-form__label',
                    text: "Имя",
                    settings: {withInternalID: true}
                },
                input: {
                    className: 'change-data-form__input',
                    name: 'first_name',
                    placeholder: '',
                    inputType: "text",
                    settings: {withInternalID: true},
                    events: {
                        click: () => {}
                    }
                },
                errorMessage: {
                    className: 'change-data-form__error-message',
                    text: ErrorMessages.validateName,
                    settings: {withInternalID: true}
                },
                validator: Validator.validateName,
            },
            {
                label: {
                    className: 'change-data-form__label',
                    text: "Фамилия",
                    settings: {withInternalID: true}
                },
                input: {
                    className: 'change-data-form__input',
                    name: 'second_name',
                    placeholder: '',
                    inputType: "text",
                    settings: {withInternalID: true},
                    events: {
                        click: () => {}
                    }
                },
                errorMessage: {
                    className: 'change-data-form__error-message',
                    text: ErrorMessages.validateName,
                    settings: {withInternalID: true}
                },
                validator: Validator.validateName,
            },
            {
                label: {
                    className: 'change-data-form__label',
                    text: "Почта",
                    settings: {withInternalID: true}
                },
                input: {
                    className: 'change-data-form__input',
                    name: 'email',
                    placeholder: '',
                    inputType: "email",
                    settings: {withInternalID: true},
                    events: {
                        click: () => {}
                    }
                },
                errorMessage: {
                    className: 'change-data-form__error-message',
                    text: ErrorMessages.validateEmail,
                    settings: {withInternalID: true}
                },
                validator: Validator.validateEmail,
            },
            {
                label: {
                    className: 'change-data-form__label',
                    text: "Телефон",
                    settings: {withInternalID: true}
                },
                input: {
                    className: 'change-data-form__input',
                    name: 'phone',
                    placeholder: '',
                    inputType: "email",
                    settings: {withInternalID: true},
                    events: {
                        click: () => {}
                    }
                },
                errorMessage: {
                    className: 'change-data-form__error-message',
                    text: ErrorMessages.validateEmail,
                    settings: {withInternalID: true}
                },
                validator: Validator.validateEmail,
            },
        ],
    })
changeDataForm.hide()