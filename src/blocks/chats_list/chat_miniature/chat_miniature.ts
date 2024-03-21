import Block from "../../../components/base/block.ts";
import greetings from "./chat_miniature-template.ts";


interface ChatMiniatureBlockType {
    srcName: {},
    index: number,
    sender: string,
    your: boolean,
    content: string,
    time: string,
    count: number,
    settings: {withInternalID: boolean},
    events: {
        click: () => void
    }
}


export default class ChatMiniature extends Block {

    constructor(props: ChatMiniatureBlockType) {
        // Создаём враппер DOM-элемент button
        super("div", props);
    }

    render() {
        return this.compile(greetings, this.props);
    }
}