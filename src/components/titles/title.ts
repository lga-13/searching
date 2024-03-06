import Block from "../base/block.ts";
import greetings from "./title-template.ts";


// Базовый заголовок формы
export default class Title extends Block {

    constructor(props: {className: string, text: string, settings: {withInternalID: true}, tag: string}) {
        // Создаём враппер DOM-элемент button
        super("div", props);
    }

    setText(text: string) {
        this.props.text = text
        this.eventBus().emit(Block.EVENTS.FLOW_RENDER)
    }

    render() {
        return this.compile(greetings, this.props);
    }
}



