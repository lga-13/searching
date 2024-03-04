import "./chat-page.css"
import ChatList from "../../components/chats_list/chats_list.ts";
import ChatPage from "./chat-page.ts";
import Input from "../../components/input/input.ts";
import Link from "../../components/links/link.ts";
import Plug from "../../components/plug/plug.ts";
import MessageChain from "../../components/message_chain/message_chain.ts";
import {Validator} from "../../utils/field_validator.ts";

export const chatList = new ChatList({
    chats: [
        {
            index: 1,
            sender: "Мама",
            your: "Вы",
            content: "Привет! Как дела?",
            time: "10:30",
            count: 1
        },
        {
            index: 2,
            sender: "Папа",
            your: "Вы",
            content: "Вы как?",
            time: "10:31",
            count: 2
        }
    ],
    settings: {withInternalID: true},
    events: {
        click: (event) => {
            console.log(event)
            chatPage.showMessageChain()
        }
    }
})

export const chatSearch = new Input({
    className: "chats__search-input",
    fieldName: "chat_search",
    text: "text",
    settings: {withInternalID: true},
    placeholder: "Поиск",
    events: {
        blur: ()=> {},
        focus: () => {}
    },
    validator: {}
})

export const accountLink = new Link({
    className: "chats__account", href: "#", text: "Аккаунт", settings: {withInternalID: true}
})


export const plugLink = new Link({
    className: "chats-plug__message",
    href: "#",
    settings: {withInternalID: true},
    text: "Выберите чат, чтобы начать общаться."

})


export const chatPlug = new Plug({
    className: "chats-plug",
    plugLink: plugLink,
    settings: {withInternalID: true}
})



export const messageInput = new Input({
    className: "chats__search-input",
    fieldName: "message",
    placeholder: "Введите сообщение",
    events: {
        blur: ()=> {},
        focus: () => {}
    },
    settings: {withInternalID: true},
    text: "Введите сообщение",
    validator: Validator.validateMessage
})


export const chatMessageChain = new MessageChain({
        messages: [
            {
                me: false,
                text: "Привет!",
                time: "10:30",
            },
            {
                me: true,
                text: "Привет! Как ты",
                time: "10:31",
            },
            {
                me: false,
                text: "Пойдет! А ты?",
                time: "10:32",
            }

        ],
        settings: {withInternalID: true},
        messageInput: messageInput,
        events: {
            blur: ()=> {chatPage.hideMessageChain()}
        },
    }

)

export const chatPage = new ChatPage({
    chatsList: chatList,
    chatSearch: chatSearch,
    accountLink: accountLink,
    chatPlug: chatPlug,
    messageChain: chatMessageChain,
    settings: {withInternalID: true},
    events: {},
});