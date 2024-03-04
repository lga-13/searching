import Block from "../base/block.ts";
import greetings from "./button_template.ts"


export default class Button extends Block {

    // Кнопка

    constructor(props: {className: string, typeName:string, text: string, settings: {withInternalID: true}, events: {click: (event)=>void}}) {
        // Создаём враппер DOM-элемент button
        super("div", props);
    }

    render() {
        return this.compile(greetings, this.props);
    }
}

