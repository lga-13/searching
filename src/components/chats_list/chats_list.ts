import Block from "../base/block.ts";
import greetings from "./chats_list-template.ts"

export default class ChatList extends Block {

    constructor(props: {
        chats: {
            index: number,
            sender: string,
            your: string,
            content: string,
            time: string,
            count: number
        }[],
        settings: {withInternalID: boolean}
    }
    ) {
        // Создаём враппер DOM-элемент button
        super("div", props);
    }

    render() {
        return this.compile(greetings, this.props);
    }
}