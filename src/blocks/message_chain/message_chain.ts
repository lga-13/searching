
import greetings from "./message_chain-template.ts";
import Input from "../../components/form/field/input/input.ts";
import Button from "../../components/button/button.ts";
import Title from "../../components/titles/title.ts";
import Img from "../../components/img/img.ts";
import morebtn from "../../public/static/img/more-btn.svg";
import {Validator} from "../../utils/field_validator.ts";
import Block from "../../components/base/block.ts";


const fetch_messages = {
    1: [],
    2: [
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

]}

export default class MessageChain extends Block {
    constructor(
        props: {
            srcName: string,
            user_id: number
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
                text: "Брат",
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
                events: {click: ()=>{}}}
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

        super("div", props);
    }
    render() {
        this.hide()
        return this.compile(greetings, this.props);
    }
}