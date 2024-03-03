import Block from "../base/block.ts";
import greetings from "./label-template.ts";

export default class Label extends Block {
    constructor(props: {className: string, text: string, settings: {withInternalID: true}}) {
        super("div", props);
    }

    render() {
        return this.compile(greetings, this.props);
    }
}

