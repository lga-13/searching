import Block from "../../components/base/block.ts";
import greetings from "./chat-page-template.ts";
import ChatList from "../../components/chats_list/chats_list.ts";
import Input from "../../components/input/input.ts";


export default class ChatPage extends Block {
    constructor(
        props: {
            chatsList: ChatList,
            settings: {withInternalID: boolean},
            chatSearch: Input
        }
    ) {
        // Создаём враппер DOM-элемент button
        super("div", props);
    }

    render() {
        return this.compile(greetings, this.props);
    }
}
