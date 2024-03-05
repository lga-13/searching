import Block from "../base/block.ts";
import Input from "../input/input.ts";
import Title from "../titles/title.ts";
import Button from "../button/button.ts";
import Label from "../label/label.ts";
import Field from "../field/field.ts";
import ErrorMessage from "../error-message/error-message.ts";
import greetings from "./form-template.ts";
import Link from "../links/link.ts";


export default class Form extends Block{

    constructor(props: {
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
        const currentErrorMessage = new ErrorMessage(
            {
                className: 'login-form__error-message',
                errorMessage: 'логин введен неверно',
                settings: {withInternalID: true}
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
                            this.clear();
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

            let currentLink = null
            if (field.link) {
                currentLink = new Link({
                    className: field.link.className,
                    href: field.link.href,
                    text: field.link.text,
                    settings: {withInternalID: true}
                })
            }
            const currentField = new Field({
                label: currentLabel,
                input: currentInput,
                link: currentLink,
                errorMessage: currentErrorMessage,
                settings: {withInternalID: true}
            })
            formFields.push(currentField)
        })

        if (props.link) {
            props.formLink = new Link(
            {
                className: props.link.className,
                href: props.link.href,
                text: props.link.text,
                settings: {withInternalID: true}
            }
        )}

        props.settings = {withInternalID: true}
        props.formFields = formFields
        super("div", props);
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
            if (child instanceof Array && child.every((item) => item instanceof Field)) {
                Object.values(child).forEach(field => {
                    if (!field.validate()) {
                        return false
                    }
                })
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
    render() {
        return this.compile(greetings, this.props);
    }
}