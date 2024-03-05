import Block from "./block.ts";
import Input from "../input/input.ts";
import Title from "../titles/title.ts";
import Button from "../button/button.ts";
import {loginForm} from "../../pages/login-form/login-form-build.ts";
import Label from "../label/label.ts";
import {Validator} from "../../utils/field_validator.ts";
import Field from "../field/field.ts";
import ErrorMessage from "../error-message/error-message.ts";


export default class Form extends Block{

    constructor(tagName: string, props: {
        className: string,
        titleClassName: string,
        titleText: string,
        titleTag: string,
        buttonClassName: string,
        buttonTypeName: string,
        buttonText: string,
        labelFieldClassName: string,
        inputFieldClassName: string,
        fields: {}
    }) {
        props.formTitle = new Title(
            {
                className: props.titleClassName,
                text: props.titleText,
                settings: {withInternalID: true},
                tag: props.titleTag
            }
        )
        props.formButton = new Button(
            {
                className: props.buttonClassName,
                typeName: props.buttonTypeName,
                settings: {withInternalID: true},
                text: props.buttonText,
                events: {
                    click: () => {
                        // Проверка допустимой длины логина и пароля
                        if (this.validate()) {
                            console.log(this.get_data());
                            loginForm.clear();
                        }
                }
            }}
        )
        const formFields = []
        Object.values(props.fields).forEach(field => {
            const currentLabel = new Label({
                className: props.labelFieldClassName,
                text: field.labelText,
                settings: {withInternalID: true}
            })
            const currentInput = new Input({
                className: props.inputFieldClassName,
                inputName: field.inputName,
                inputPlaceholder: field.inputPlaceholder,
                inputType: field.inputType,
                settings: {withInternalID: true},
                validator: field.validator,
            })
            const currentErrorMessage = new ErrorMessage(
                {
                    className: 'login-form__error-message',
                    errorMessage: 'логин введен неверно',
                    settings: {withInternalID: true}
                }
            )

            const currentField = new Field({
                label: currentLabel,
                input: currentInput,
                errorMessage: currentErrorMessage,
                settings: {withInternalID: true}
            })
            formFields.push(currentField)
        })
        props.settings = {withInternalID: true}
        props.formFields = formFields
        super(tagName, props);
    }

    clear() {
        Object.values(this.children).forEach(child => {
            if (child instanceof Input) {
                child.clear()
            }
        });
    }

    validate(): boolean {
        Object.values(this.children).forEach(child => {
            if (child instanceof Input) {
                if (!child.submit_validate()) {
                    return false
                }
            }
            return true
        });
    }

    get_data(): {string: string} {

        const current_condition = {}

        Object.values(this.children).forEach(child => {
            if (child instanceof Input) {
                current_condition[child.getName()] = child.getInputValue();
            }
        })
        return current_condition
    }

}