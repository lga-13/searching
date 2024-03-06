import Block from "../base/block.ts";
import Input from "./field/input/input.ts";
import Title from "../titles/title.ts";
import Button from "../button/button.ts";
import Label from "./field/label/label.ts";
import Field from "./field/field.ts";
import ErrorMessage from "./error-message/error-message.ts";
import greetings from "./form-template.ts";
import Link from "../links/link.ts";


export default class Form extends Block{

    constructor(props: {
        className: string,
        title: {
            className: string,
            text: string,
            tag: string,
        } | null,
        button: {
            className: string,
            typeName: string,
            text: string
        },
        labelFieldClassName: string | null,
        inputFieldClassName: string,
        errorMessageClassName: string,
        link: {
            className: string,
            href: string,
            text: string,
        },
        fields: {
            labelText: string,
            inputName: string,
            inputType: string,
            inputPlaceholder: string,
            validator: () => boolean,
            errorMessage: string,
            link: {
                className: string,
                href: string,
                text: string,
            } | null,
        }[],

    }) {
        if (props.title) {
            props.formTitle = new Title(
                {
                    className: props.title.className,
                    text: props.title.text,
                    settings: {withInternalID: true},
                    tag: props.title.tag
                }
            )
        }

        props.formButton = new Button(
            {
                className: props.button.className,
                typeName: props.button.typeName,
                settings: {withInternalID: true},
                text: props.button.text,
                events: {
                    click: () => {
                        console.log("Вызвана валидация по кнопке")
                        if (this.validate()) {
                            console.log("Все поля валидны")
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
            const currentErrorMessage = new ErrorMessage(
                {
                    className: props.errorMessageClassName,
                    errorMessage: field.errorMessage,
                    settings: {withInternalID: true}
                }
            )

            // Прикручиваем к полю ссылку если она передана.
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

    clear(): boolean {
        Object.values(this.children).forEach(child => {
            if (child instanceof Array && child.every((item) => item instanceof Field)) {
                Object.values(child).forEach(field => {
                    field.clear()
                })
            }
            return true
        });
    }

    validate(): boolean {
        console.log("Вызван метод валадации формы")
        Object.values(this.children).forEach(child => {
            if (child instanceof Array && child.every((item) => item instanceof Field)) {
                Object.values(child).forEach(field => {
                    if (!field.validate()) {
                        console.log("Найдено невалидное поле")
                        return false
                    }
                    console.log("НЕ Найдено невалидное поле")
                })
            }
        console.log("Все нормально")
        return true
        });
    }


    // Метод возвращает даныне всех полей
    get_data(): {string: string} {

        const current_condition = {}

        Object.values(this.children).forEach(child => {
            if (child instanceof Array && child.every((item) => item instanceof Field)) {
                current_condition[child.getName()] = child.getInputValue();
            }
        })
        return current_condition
    }
    render() {
        return this.compile(greetings, this.props);
    }
}