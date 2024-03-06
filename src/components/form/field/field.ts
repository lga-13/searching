import Block from "../../base/block.ts";
import greetings from "./field_template.ts"
import Label from "./label/label.ts";
import Input from "./input/input.ts";
import Link from "../../links/link.ts";


export default class Field extends Block {

    // Кнопка

    constructor(props: {label: Label, input: Input, link: Link | null, settings: {withInternalID: boolean}}) {
        // Создаём враппер DOM-элемент button
        super("div", props);
    }

    validate(): boolean {
        console.log("Вызван метод валадации Филда")
        return this.children.input.validate()
    }

    clear() {
        this.children.input.clear()
    }

    getInputValue() {
        return this.child.input.getInputValue()
    }

    getName() {
        return this.child.input.getName()
    }

    render() {
        return this.compile(greetings, this.props);
    }
}

