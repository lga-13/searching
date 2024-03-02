import Block from "./base/block.ts";
import greetings from "./button_template.ts"


export default class Button extends Block {

    // Кнопка

    constructor(props: {className: string, text: string}) {
        // Создаём враппер DOM-элемент button
        super("button", props);
    }

    render() {
        console.log("Вызыван рендер Button")
        return this.compile(greetings, this.props);
    }
}


export function render(query, block) {
    const root = document.querySelector(query);
    // Можно завязаться на реализации вашего класса Block
    console.log(root instanceof HTMLElement)
    console.log(block.getContent() instanceof HTMLElement)
    root.appendChild(block.getContent());
    return root;
}
