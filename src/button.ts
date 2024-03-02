import Block from "./components/base/block";
import Handlebars from "handlebars";
import greetings from "./template.ts"
import {type} from "node:os";

export default class Button extends Block {
    constructor(props) {
        // Создаём враппер DOM-элемент button
        super("button", props);
    }

    render() {
        // Разметка кнопки
        const template = Handlebars.compile(greetings)
        return  template(this.props);
    }
}


export function render(query, block) {
    const root = document.querySelector(query);
    // Можно завязаться на реализации вашего класса Block
    console.log(root instanceof HTMLElement)
    console.log(block.getContent() instanceof HTMLElement)
    root.appendChild(block.getContent());

    block.dispatchComponentDidMount();

    return root;
}
