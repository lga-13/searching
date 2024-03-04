import Block from "../base/block.ts";
import greetings from "./title-template.ts";


// Базовый заголовок формы
export default class Title extends Block {

    constructor(props: {className: string, text: string, settings: {withInternalID: true}, tag: string}) {
        // Создаём враппер DOM-элемент button
        super("div", props);
    }

    render() {
        return this.compile(greetings, this.props);
    }
}



