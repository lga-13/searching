import Block from "../base/block.ts";
import greetings from "./chats_list-template.ts"
import MessageChain from "../message_chain/message_chain.ts";
import {chatPage} from "../../pages/chat-page/chat-page-build.ts";

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
        settings: {withInternalID: boolean},
        events: {
            click: (event) => void
        }
    }
    ) {
        // Создаём враппер DOM-элемент button
        super("div", props);
    }

    render() {
        return this.compile(greetings, this.props);
    }
}