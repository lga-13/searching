import Block from "../../components/base/block.ts";
import greetings from "./chat-page-template.ts";
import ChatList from "../../components/chats_list/chats_list.ts";
import Input from "../../components/input/input.ts";
import Link from "../../components/links/link.ts";
import Plug from "../../components/plug/plug.ts";
import MessageChain from "../../components/message_chain/message_chain.ts";
import Img from "../../components/img/img.ts";


export default class ChatPage extends Block {
    constructor(
        props: {
            chatAvatarImg: Img,
            chatsList: ChatList,
            chatPlug: Plug
            accountLink: Link,
            settings: {withInternalID: boolean},
            chatSearch: Input,
            messageChain: MessageChain,
            events: {
                blur: ()=> void
            }
        }
    ) {
        // Создаём враппер DOM-элемент button
        super("div", props);
    }

    showMessageChain() {
        Object.values(this.children).forEach(child => {
            if (child instanceof MessageChain) {
                child.show()
            }
            if (child instanceof Plug) {
                child.hide()
            }
            return true
        });
    }

    hideMessageChain() {
        Object.values(this.children).forEach(child => {
            if (child instanceof MessageChain) {
                child.hide()
            }
            if (child instanceof Plug) {
                child.show()
            }
        });
        return

    }


    render() {
        return this.compile(greetings, this.props);
    }
}
