import Block from "../../components/base/block.ts";
import greetings from "./chat-page-template.ts";
import Link from "../../components/link/link.ts";
import Plug from "../../components/plug/plug.ts";
import MessageChain from "../../blocks/message_chain/message_chain.ts";
import chat2 from "../../public/static/img/chat2.svg";
import ChatList from "../../blocks/chats_list/chats_list.ts";
import {Validator} from "../../utils/field_validator.ts";
import Form from "../../blocks/form/form.ts";
import "./chat-page.css"


export const MOCK_MESSAGE_DATA = [
        {
            srcName: chat2,
            index: 14658764747,
            sender: "Мама",
            message_chain: [
                {
                    me: true,
                    text: "В лесу растут шишки!",
                    read: true,
                    time: "10:30:34",
                },
                {
                    me: true,
                    text: "Крупные?",
                    time: "10:31:53",
                    read: true,
                },
                {
                    me: false,
                    text: "Крупные",
                    time: "10:32:45",
                    read: false,
                }]
        },
        {
            srcName: chat2,
            index: 2343265678,
            sender: "Папа",
            message_chain:[
                {
                    me: false,
                    text: "Привет!",
                    time: "10:30:34",
                    read: true,
                },
                {
                    me: true,
                    text: "Привет! Как ты",
                    time: "10:31:28",
                    read: true,
                },
                {
                    me: false,
                    text: "Пойдет! А ты?",
                    time: "10:32:34",
                    read: false,
                },
                {
                    me: false,
                    text: "Ау",
                    time: "10:41:28",
                    read: false,
                },
                {
                    me: false,
                    text: "Ты тут?",
                    time: "11:31:28",
                    read: false,
                },]
        },
        {
            srcName: chat2,
            index: 16565464623,
            sender: "Мама",
            message_chain: [
                {
                    me: true,
                    text: "Привет",
                    time: "10:30:34",
                    read: true
                },
            ]
        },
        {
            srcName: chat2,
            index: 15655,
            sender: "Мама",
            message_chain: [
                {
                    me: true,
                    text: "Привет",
                    time: "10:30:34",
                    read: true
                },
            ]
        },
        {
            srcName: chat2,
            index: 13,
            sender: "Мама",
            message_chain: [
                {
                    me: true,
                    text: "Привет",
                    time: "10:30:34",
                    read: true
                },
            ]
        },
        {
            srcName: chat2,
            index: 123,
            sender: "Мама",
            message_chain: [
                {
                    me: true,
                    text: "Привет",
                    time: "10:30:34",
                    read: true
                },
            ]
        },
        {
            srcName: chat2,
            index: 1233213123131,
            sender: "Мама",
            message_chain: [
                {
                    me: true,
                    text: "Привет",
                    time: "10:30:34",
                    read: true
                },
            ]
        },
        {
            srcName: chat2,
            index: 132323,
            sender: "Мама",
            message_chain: [
                {
                    me: true,
                    text: "Привет",
                    time: "10:30:34",
                    read: true
                },
            ]
        },
        {
            srcName: chat2,
            index: 1000,
            sender: "Мама",
            message_chain: [
                {
                    me: true,
                    text: "Привет",
                    time: "10:30:34",
                    read: true
                },
            ]
        },
        {
            srcName: chat2,
            index: 121211,
            sender: "Мама",
            message_chain: [
                {
                    me: true,
                    text: "Привет",
                    time: "10:30:34",
                    read: true
                },
            ]
        },
]


export function get_chats_list() {
    return MOCK_MESSAGE_DATA
}


export function getMessageChain(index: number) {
    return MOCK_MESSAGE_DATA.find(item => item.index === index)?.message_chain;
}


export function getSender(index: number) {
    return MOCK_MESSAGE_DATA.find(item => item.index === index)?.sender;
}


export function addMessageChain(index, message, time) {
    const item = MOCK_MESSAGE_DATA.find(item => item.index === index);
    if(item) {
        item.message_chain.push({
            me: true,
            text: message,
            time: time,
            read: false
        });
    } else {
        console.log(`Нет элемента с индексом ${index}`);
    }
}


export function readMessageChain(index) {
    const item = MOCK_MESSAGE_DATA.find(item => item.index === index);
    if(item) {
        Object.values(item.message_chain).forEach(message => {
            message.read = true
        })
    } else {
        console.log(`Нет элемента с индексом ${index}`);
    }
}



export default class ChatPage extends Block {
    constructor(props: {}) {


        // Генерация списка чатов
        // Передаем функцию которая будет вызываться по клику миниатюры в чат листе для открытия чатов.
        // Передаем функцию которая будет прочитывать все чаты при клике на миниматюру.

        const chatList = new ChatList({
            showMessageChain: (user_id: number) => {this.showMessageChain(user_id)},
            readAllMessages: (user_id: number) => {readMessageChain(user_id)}
        })

        // Генерация месадж чейна и заглушки. По умолчанию скрыт месадж чейн.
        const messageChain = new MessageChain({
            srcName: chat2,
            sender_name: {
                className: "message-chain__header-title",
                text: '',
                tag: 'h3',
                settings: {withInternalID: true},
            },
            messageForm: {
                className: "message-chain__send-field",
                button: {
                    className: "message-chain__send-button",
                    typeName: "button",
                    text: "",
                    settings: {withInternalID: true},
                },
                fields: [
                    {
                        input: {
                            className: "message-chain__message_input",
                            name: "message",
                            placeholder: "Cообщение",
                            inputType: "text",
                            settings: {withInternalID: true},
                            events: {
                                click: () => {}
                            },
                        validator: Validator.validateMessage
                        }
                    }
                ]
            },
            attachmentButton: {
                className: "message-chain__attachment-button",
                typeName: "button",
                text: "",
                settings: {withInternalID: true},
                events: {click: ()=>{}}
            },
            moreButton: {
                className: "message-chain__more-button",
                typeName: "button",
                text: "",
                settings: {withInternalID: true},
                events: {
                    click: ()=>{},
                    keydown: (event) => {}
                }
            },
            chatListHook: () => {chatList.rebuildChatList()},
            }
        )

        messageChain.hide()
        const chatPlug = new Plug({
            className: "chats-plug",
            plugLink: {
                className: "chats-plug__message",
                href: "#",
                text: "Выберите чат, чтобы начать общаться.",
            }
        })


        const accountLink = new Link({
            className: "chats__account",
            href: "#",
            text: "Аккаунт",
            settings: {withInternalID: true}
        })


        const searchForm = new Form(
            {
                className: 'chats__search-box',
                button: {
                    className: 'chats__search-btn',
                    typeName: 'button',
                    text: '',
                    settings: {withInternalID: true}
                },
                inputFieldClassName: 'chats__search-input',
                errorMessageClassName: 'chats__message-error',
                fields: [{
                    input: {
                        className: 'chats__search-input',
                        name: "chat_search",
                        placeholder: "",
                        inputType: "text",
                        settings: {withInternalID: true},
                        events: {
                            click: () => {}
                        }
                    },
                    validator: Validator.validateSearch,
                }],

            }
        )
        props.searchForm = searchForm
        props.accountLink = accountLink
        props.chatPlug = chatPlug
        props.messageChain = messageChain


        props.chatsList = chatList
        props.settings = {withInternalID: true}
        super("div", props);
    }

    showMessageChain(user_id: number) {
        this.children.messageChain.show()
        this.children.chatPlug.hide()
        this.children.messageChain.setCurrentMessage(user_id)
        return true
    }

    readAllMessage(user_id: number) {

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

export const chatPage = new ChatPage({});
