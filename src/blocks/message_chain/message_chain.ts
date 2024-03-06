
import greetings from "./message_chain-template.ts";
import Input from "../../components/form/field/input/input.ts";
import Button from "../../components/button/button.ts";
import Title from "../../components/titles/title.ts";
import Img from "../../components/img/img.ts";
import morebtn from "../../public/static/img/more-btn.svg";
import {Validator} from "../../utils/field_validator.ts";
import Block from "../../components/base/block.ts";
import Message from "./message/message.ts";
import {addMessageChain, getMessageChain, getSender, MOCK_MESSAGE_DATA} from "../../pages/chat-page/chat-page.ts";


const fetch_messages = {
    1: [
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
        }
    ],
    2: [
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
    }

]}

export default class MessageChain extends Block {
    constructor(
        props: {
            srcName: string,
            settings: {withInternalID: boolean},
            messageInput: Input,
            events: {
                blur: ()=> void
            },
            sendButton: Img,
            attachmentsButton: Img,
        }
    ) {

        const moreButton = new Img(
            {
                className: 'message-chain__more-button',
                srcName: morebtn,
                altText: 'btn',
                settings: {withInternalID: true},
                events: {},
            }
        )
        props.moreButton = moreButton

        const dataTitle = new Title(
            {
                className: 'message-chain__data-title',
                text: '5 марта',
                settings: {withInternalID: true},
                tag: 'p',
            })
        props.dataTitle = dataTitle


        const messageInput = new Input({
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
        props.messageInput = messageInput


        const senderName = new Title(
            {className: "message-chain__header-title",
                text: "",
                settings: {withInternalID: true},
                tag: "h3"}
        )
        props.senderName = senderName

        const sendButton = new Button(
            {
                className: "button",
                typeName: "button",
                text: "->",
                settings: {withInternalID: true},
                events: {click: ()=>{
                        console.log(messageInput)
                        addMessageChain(MOCK_MESSAGE_DATA, this.props.user_id, "Новое сообщение")
                        console.log(getMessageChain(MOCK_MESSAGE_DATA, this.props.user_id))
                        this.setCurrrentMessage(this.props.user_id)

                    }
                }
            }
        )
        props.sendButton = sendButton

        const attachmentsButton = new Button(
            {
                className: "button",
                typeName: "button",
                text: "+",
                settings: {withInternalID: true},
                events: {click: ()=>{}}}
        )
        props.attachmentsButton = attachmentsButton

        props.user_id = null

        super("div", props);
    }

    setCurrrentMessage(user_id: number){
        console.log("Вызвано получение сообщений ")
        const messages = []
        this.props.user_id = user_id
        Object.values(getMessageChain(MOCK_MESSAGE_DATA, this.props.user_id)).forEach(message => {
            const currentMessage = new Message({
                me: message.me,
                text:  message.text,
                time: message.time,
                settings: {withInternalID: true},
            })
            messages.push(currentMessage)
        })
        this.children.messages = messages
        this.children.senderName.setText(getSender(MOCK_MESSAGE_DATA, this.props.user_id))
        this.eventBus().emit(Block.EVENTS.FLOW_CDU)
    }


    render() {
        return this.compile(greetings, this.props);
    }
}