

import Field, {fieldBlockType} from "./field/field.ts";
import greetings from "./form-template.ts";
import Link, {LinkBlockType} from "../../components/link/link.ts";
import Button, {buttonBlockType} from "../../components/button/button.ts";
import Title, {TitleBlockType} from "../../components/title/title.ts";
import Block from "../../components/base/block.ts";


interface FormProps {
    className: string,

    // ДАНЫНЕ ЭЛЕМЕНТОВ

    title?: TitleBlockType,

    // Обязательная кнопка
    button: buttonBlockType,
    toggleButtons: buttonBlockType[],

    // Необязательная ссылка под кнопкой
    link?: LinkBlockType

    fields: fieldBlockType[],

    // ЭЛЕМЕНТЫ
    formTitle?: Title | null
    formFields?: Field[]
    formButton?: Button,
    formLink?: Link | null,
    formToggleButtons?: Button[] | null

    settings?: {withInternalID: boolean}

}


export default class Form extends Block{

    constructor(props: FormProps) {

        // Заголовок формы
        let formTitle = null
        if (props.title) {
            formTitle = new Title(props.title)
        }
        props.formTitle = formTitle


        //Поля формы
        const formFields = []
        Object.values(props.fields).forEach(field => {
            const currentField = new Field(field)
            formFields.push(currentField)
        })
        props.formFields = formFields


        // Кнопка
        props.formButton = new Button(props.button)


        // Ссылка формы
        let formLink = null
        if (props.link) {
            formLink = new Link(props.link)}
        props.formLink = formLink

        let formToggleButtons = [];
        if (props.toggleButtons) {
            Object.values(props.toggleButtons).forEach(toggleButton => {
                const currentToggleButton = new Button(toggleButton);
                formToggleButtons.push(currentToggleButton);
            });
        }
        props.formToggleButtons = formToggleButtons


        props.settings = {withInternalID: true}

        super("div", props);
    }

    // Очистка полей формы
    clear(): boolean {

        // Ищем поля формы
        Object.values(this.children).forEach(child => {
            // Проверяем на поля
            if (child instanceof Array && child.every((item) => item instanceof Field)) {
                Object.values(child).forEach(field => {
                    field.clear()
                })
            }
            return true
        });
    }

    // Валидация полей формы
    validate(): boolean {
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
        return true
        });
    }

    // Смена пароля
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