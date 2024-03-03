import Block from "../base/block.ts";
import greetings from "./form-title-template.ts";

export default class FormTitle extends Block {
    constructor(props: {className: string, text: string, settings: {withInternalID: true}}) {
        // Создаём враппер DOM-элемент button
        super("h2", props);
    }

    render() {
        return this.compile(greetings, this.props);
    }
}



