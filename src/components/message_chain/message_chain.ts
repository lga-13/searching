import Block from "../base/block.ts";
import greetings from "./message_chain-template.ts";
import Input from "../input/input.ts";

export default class MessageChain extends Block {
    constructor(props: {messages: {text: string, me: boolean, time: string}[], settings: {withInternalID: boolean}, messageInput: Input, events: {
            blur: ()=> void
        },}) {
        super("div", props);
    }
    render() {
        this.hide()
        return this.compile(greetings, this.props);
    }
}