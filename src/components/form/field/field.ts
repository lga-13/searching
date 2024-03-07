import Block from "../../base/block.ts";
import greetings from "./field_template.ts"
import Label from "./label/label.ts";
import Input from "./input/input.ts";
import Link from "../../links/link.ts";
import ErrorMessage from "../error-message/error-message.ts";



interface FieldProps {
    label: Label;
    input: Input;
    link: Link | null;
    errorMessage: ErrorMessage | null;
    settings?: { withInternalID: boolean };
}


export default class Field extends Block {

    // Кнопка

    constructor(props: FieldProps) {
        // Создаём враппер DOM-элемент button
        props.settings = {withInternalID: true}
        super("div", props);
    }

    validate(): boolean {
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

