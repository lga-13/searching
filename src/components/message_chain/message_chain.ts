import Block from "../base/block.ts";
import greetings from "./message_chain-template.ts";
import Input from "../input/input.ts";
import Button from "../button/button.ts";
import {attachmentsButton} from "../../pages/chat-page/chat-page-build.ts";
import Title from "../titles/title.ts";
import Img from "../img/img.ts";

export default class MessageChain extends Block {
    constructor(
        props: {
            srcName: string,
            senderName: Title,
            moreButton: Img,
            dataTitle: Title,
            messages: {
                text: string,
                me: boolean,
                time: string}[]

            settings: {withInternalID: boolean},
            messageInput: Input,
            events: {
                blur: ()=> void
            },
            sendButton: Button,
            attachmentsButton: Button,
        }
    ) {
        super("div", props);
    }
    render() {
        this.hide()
        return this.compile(greetings, this.props);
    }
}