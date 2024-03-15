import Block from "../base/block.ts";
import Input from "./field/input/input.ts";
import Title from "../titles/title.ts";
import Button from "../button/button.ts";
import Label from "./field/label/label.ts";
import Field from "./field/field.ts";
import ErrorMessage from "./error-message/error-message.ts";
import greetings from "./form-template.ts";
import Link from "../links/link.ts";
import {Validator} from "../../utils/field_validator.ts";


export default class Form extends Block{

    constructor(props: {
        className: string,

        button: {
            className: string,
            typeName: string,
            text: string
        },

        img: {
            className: string,
            srcName: string,
            altText: string,
        },

        toggleButtons: {
            className: string,
            typeName: string,
            text: string
        }[],

        title: {
            className: string,
            text: string,
            tag: string,
        } | null,

        link: {
            className: string,
            href: string,
            text: string,
        } | null,

        labelFieldClassName: string | null,
        inputFieldClassName: string,
        errorMessageClassName: string,

        fields: {
            labelText: string,
            inputName: string,
            inputType: 'text' | 'password',
            inputPlaceholder: string,
            validator: typeof Validator[keyof typeof Validator],
            errorMessage: string,
            link: {
                className: string,
                href: string,
                text: string,
            } | null,
        }[],

    }) {

        if (props.link) {
            props.formLink = new Link(
                {
                    className: props.link.className,
                    href: props.link.href,
                    text: props.link.text,
                    settings: {withInternalID: true}
                }
            )}

        if (props.title) {
            props.formTitle = new Title(
                {
                    className: props.title.className,
                    text: props.title.text,
                    tag: props.title.tag,
                    settings: {withInternalID: true},
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
                    },
                    keydown: (event) => {}
                }}
        )

        const formToggleButtons = [];
        if (props.toggleButtons) {
            Object.values(props.toggleButtons).forEach(toggleButton => {
                const currentToggleButton = new Button({
                    className: toggleButton.className,
                    typeName: toggleButton.typeName,
                    text: toggleButton.text,
                    settings: {withInternalID: true},
                    events: {
                        click: () => {
                            this.togglePasswordVisibility();
                        }
                    }
                });
                formToggleButtons.push(currentToggleButton);
            });
        }

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
            })
            formFields.push(currentField)
        })

        props.formToggleButtons = formToggleButtons
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

    togglePasswordVisibility() {
        const passwordInput = this.element.querySelector('input[type="password"]');
        if (passwordInput) {
            const currentType = passwordInput.getAttribute('type');
            const newType = currentType === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', newType);
        }
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