import Block from "../base/block.ts";
import greetings from "./field_template.ts"
import Label from "../label/label.ts";
import Input from "../input/input.ts";
import Link from "../links/link.ts";


export default class Field extends Block {

    // Кнопка

    constructor(props: {label: Label, input: Input, link: Link | null, settings: {withInternalID: boolean}}) {
        // Создаём враппер DOM-элемент button
        super("div", props);
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

    render() {
        return this.compile(greetings, this.props);
    }
}

