import Block from "../base/block.ts";
import greetings from "./button_template.ts"


export default class Button extends Block {

    // Кнопка

    constructor(props: {className: string, text: string, settings: {withInternalID: true}, events: {click: (event)=>void}}) {
        // Создаём враппер DOM-элемент button
        super("button", props);
    }

    render() {
        return this.compile(greetings, this.props);
    }
}

