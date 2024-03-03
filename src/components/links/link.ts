import Block from "../base/block.ts";
import greetings from "./link-template.ts";

export default class Link extends Block {
    constructor(props: {className: string, href: string, text: string, settings: {withInternalID: true}}) {
        super("a", props);
    }
    render() {
        return this.compile(greetings, this.props);
    }
}
