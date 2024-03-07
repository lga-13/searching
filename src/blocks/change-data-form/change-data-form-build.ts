import {Validator} from "../../utils/field_validator.ts";
import avatar from "../../public/static/img/avatar.svg";
import Form from "../../components/form/form.ts";
import "./change-data-form.css";

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
                labelText: 'Логин',
                inputName: 'login',
                inputType: 'text',
                inputPlaceholder: '',
                validator: Validator.validateLogin,
                errorMessage: 'логин введен некорректно',

            },
            {
                labelText: 'Имя',
                inputName: 'first_name',
                inputType: 'text',
                inputPlaceholder: '',
                validator: Validator.validateName,
                errorMessage: 'имя введено некорректно',
            },
            {
                labelText: 'Фамилия',
                inputName: 'second_name',
                inputType: 'text',
                inputPlaceholder: '',
                validator: Validator.validateName,
                errorMessage: 'фамилия введена некорректно',
            },
            {
                labelText: 'Почта',
                inputName: 'email',
                inputType: 'text',
                inputPlaceholder: '',
                validator: Validator.validateEmail,
                errorMessage: 'почта введена некорректно',
            },
            {
                labelText: 'Телефон',
                inputName: 'phone',
                inputType: 'phone',
                inputPlaceholder: '',
                validator: Validator.validatePhone,
                errorMessage: 'телефон введен некорректно',
            },
        ],
    })
changeDataForm.hide()