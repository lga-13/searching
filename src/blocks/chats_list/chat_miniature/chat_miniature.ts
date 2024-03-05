import Block from "../../../components/base/block.ts";
import greetings from "./chat_miniature-template.ts";


export default class ChatMiniature extends Block {

    constructor(props: {
                    srcName: string,
                    index: number,
                    sender: string,
                    your: string,
                    content: string,
                    time: string,
                    count: number,
                    settings: {withInternalID: boolean},
                }
    ) {
        // Создаём враппер DOM-элемент button
        super("div", props);
    }

    render() {
        return this.compile(greetings, this.props);
    }
}