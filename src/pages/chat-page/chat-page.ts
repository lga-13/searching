import Block from "../../components/base/block.ts";
import greetings from "./chat-page-template.ts";
import Input from "../../components/form/field/input/input.ts";
import Link from "../../components/links/link.ts";
import Plug from "../../components/plug/plug.ts";
import MessageChain from "../../blocks/message_chain/message_chain.ts";
import chat2 from "../../public/static/img/chat2.svg";
import ChatList from "../../blocks/chats_list/chats_list.ts";
import Form from "../../components/form/form.ts";
import {Validator} from "../../utils/field_validator.ts";



export const MOCK_MESSAGE_DATA = [
        {
            srcName: chat2,
            index: 1,
            sender: "Мама",
            time: "10:30",
            count: 1,
            message_chain: [
                {
                    me: true,
                    text: "В лесу растут шишки!",
                    time: "10:30",
                },
                {
                    me: true,
                    text: "Крупные?",
                    time: "10:31",
                },
                {
                    me: false,
                    text: "Крупные",
                    time: "10:32",
                }]
        },
        {
            srcName: chat2,
            index: 2,
            sender: "Папа",
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
        props: {
            plug: {
                className: string,
                plugLink: {
                    className: string,
                    href: string,
                    text: string
                }
            }
        }
    ) {

        // Генерация списка чатов
        // Передаем функцию которая будет вызываться по клику миниатюры в чат листе.
        const chatList = new ChatList({
            showMessageChain: (user_id: number) => {this.showMessageChain(user_id)}
        })

        // Генерация месадж чейна и заглушки. По умолчанию скрыт месадж чейн.
        const messageChain = new MessageChain({
                srcName: chat2,
                chatListHook: () => {chatList.newMessage()},
            }
        )
        messageChain.hide()
        const chatPlug = new Plug({
            className: props.plug.className,
            plugLink: {
                className: props.plug.plugLink.className,
                href: props.plug.plugLink.href,
                text: props.plug.plugLink.text,
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
                    text: ''
                },
                inputFieldClassName: 'chats__search-input',
                errorMessageClassName: 'chats__message-error',
                fields: [{
                    inputName: 'search',
                    inputType: 'text',
                    inputPlaceholder: 'Поиск',
                    validator: Validator.validateSearch,
                    errorMessage: 'ошибка',
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
