import Block from "../../components/base/block.ts";
import greetings from "./chat-page-template.ts";
import ChatList from "../../blocks/chats_list/chats_list.ts";
import Input from "../../components/form/field/input/input.ts";
import Link from "../../components/links/link.ts";
import Plug from "../../components/plug/plug.ts";
import MessageChain from "../../blocks/message_chain/message_chain.ts";
import Img from "../../components/img/img.ts";
import chat2 from "../../public/static/img/chat2.svg";
import {attachmentsButton, chatPage, messageInput, sendButton, senderName} from "./chat-page-build.ts";
import {Validator} from "../../utils/field_validator.ts";
import Title from "../../components/titles/title.ts";
import Button from "../../components/button/button.ts";


export default class ChatPage extends Block {
    constructor(
        props: {
            events: {
                blur: ()=> void
            }
        }
    ) {
        // Создаём враппер DOM-элемент button
        const chatList = new ChatList({})


        const messageChain = new MessageChain({
                srcName: chat2,
                settings: {withInternalID: true},
                events: {
                    blur: () => {
                        chatPage.hideMessageChain()
                    }
                },
                user_id: 2
            }
        )


        const accountLink = new Link({
            className: "chats__account", href: "#", text: "Аккаунт", settings: {withInternalID: true}
        })


        const chatSearch = new Input({
            className: "chats__search-input",
            fieldName: "chat_search",
            text: "text",
            placeholder: "Поиск",
            events: {
                blur: ()=> {},
                focus: () => {}
            },
            validator: {}
        })


        const chatPlug = new Plug({
            className: "chats-plug",
            plugLink: {
                className: "chats-plug__message",
                href: "#",
                text: "Выберите чат, чтобы начать общаться.",
            }
        })


        props.chatSearch = chatSearch
        props.accountLink = accountLink
        props.chatPlug = chatPlug
        props.messageChain = messageChain
        props.chatsList = chatList
        props.settings = {withInternalID: true}
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
