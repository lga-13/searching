import Block from "../../../components/base/block.ts";
import greetings from "./message-template.ts";


export default class Message extends Block {

    constructor(props: {
        me: boolean,
        text: string,
        time: string
        settings: {withInternalID: boolean}
    }) {
        super("div", props);
    }

    render() {
        return this.compile(greetings, this.props);
    }
}