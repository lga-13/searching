import {ErrorMessages, Validator} from "../../utils/field_validator.ts";
import Form from "../form/form.ts";

export const changeDataForm = new Form(
    {
        className: 'change-data-form',
        button: {
            className: 'change-data-form__button',
            typeName: 'submit',
            text: 'Сохранить'
        },
        labelFieldClassName: 'change-data-form__label',
        inputFieldClassName: 'change-data-form__input',
        errorMessageClassName: 'change-data-form__error-message',
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
            // {
            //     labelText: 'Имя',
            //     inputName: 'first_name',
            //     inputType: 'text',
            //     inputPlaceholder: '',
            //     validator: Validator.validateName,
            //     errorMessage: 'имя введено некорректно',
            // },
            // {
            //     labelText: 'Фамилия',
            //     inputName: 'second_name',
            //     inputType: 'text',
            //     inputPlaceholder: '',
            //     validator: Validator.validateName,
            //     errorMessage: 'фамилия введена некорректно',
            // },
            // {
            //     labelText: 'Почта',
            //     inputName: 'email',
            //     inputType: 'text',
            //     inputPlaceholder: '',
            //     validator: Validator.validateEmail,
            //     errorMessage: 'почта введена некорректно',
            // },
            // {
            //     labelText: 'Телефон',
            //     inputName: 'phone',
            //     inputType: 'phone',
            //     inputPlaceholder: '',
            //     validator: Validator.validatePhone,
            //     errorMessage: 'телефон введен некорректно',
            // },
        ],
    })
// changeDataForm.hide()