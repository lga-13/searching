import Block from "../base/block.ts";
import greetings from "./field_template.ts"
import Label from "../label/label.ts";
import Input from "../input/input.ts";


export default class Field extends Block {

    // Кнопка

    constructor(props: {label: Label, input: Input}) {
        // Создаём враппер DOM-элемент button
        super("div", props);
    }

    render() {
        return this.compile(greetings, this.props);
    }
}

