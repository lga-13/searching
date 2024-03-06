import Block from "../../components/base/block.ts";
import greetings from "./chat-page-template.ts";
import Input from "../../components/form/field/input/input.ts";
import Link from "../../components/links/link.ts";
import Plug from "../../components/plug/plug.ts";
import MessageChain from "../../blocks/message_chain/message_chain.ts";
import chat2 from "../../public/static/img/chat2.svg";
import ChatList from "../../blocks/chats_list/chats_list.ts";



export const MOCK_MESSAGE_DATA = [
        {
            srcName: chat2,
            index: 1,
            sender: "Мама",
            your: "Вы",
            content: "Привет! Как дела?",
            time: "10:30",
            count: 1,
            message_chain: [
                {
                    me: true,
                    text: "В лесу растут шишки!",
                    time: "10:30",
                },
                {
                    me: false,
                    text: "Крупные?",
                    time: "10:31",
                },
                {
                    me: true,
                    text: "Крупные",
                    time: "10:32",
                }]
        },
        {
            srcName: chat2,
            index: 2,
            sender: "Папа",
            your: "Вы",
            content: "Пойдет! А ты?",
            time: "10:32",
            count: 2,
            message_chain:[
                {
                    me: true,
                    text: "Привет!",
                    time: "10:30",
                },
                {
                    me: false,
                    text: "Привет! Как ты",
                    time: "10:31",
                },
                {
                    me: true,
                    text: "Пойдет! А ты?",
                    time: "10:32",
                }]
        }
]


export function get_chats_list(data) {
    return data
}


export function getMessageChain(data, index: number) {
    console.log("Получена дата", data)
    return data.find(item => item.index === index)?.message_chain;
}


export function getSender(data, index: number) {
    return data.find(item => item.index === index)?.sender;
}


export function addMessageChain(data, index, message, time) {
    const item = data.find(item => item.index === index);
    if(item) {
        item.message_chain.push({
            me: true,
            text: message,
            time: time,
        });
    } else {
        console.log(`Нет элемента с индексом ${index}`);
    }
}



export function get_message_chain() {
    return MOCK_MESSAGE_DATA
}

export default class ChatPage extends Block {
    constructor(
        props: {}
    ) {

        // Генерация списка чатов
        // Передаем функцию которая будет вызываться по клику миниатюры в чат листе.
        const chatList = new ChatList({
            showMessageChain: (user_id: number) => {this.showMessageChain(user_id)}
        })

        // Генерация месадж чейна и заглушки. По умолчанию скрыт месадж чейн.
        const messageChain = new MessageChain({
                srcName: chat2
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


        props.chatSearch = chatSearch
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
        console.log("Тронули", user_id)
        return true
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
