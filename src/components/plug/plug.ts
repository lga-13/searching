import Block from "../base/block.ts";
import greetings from "./plug-template.ts";
import Link from "../links/link.ts";

export default class Plug extends Block {
    constructor(props: {className: string, plugLink: Link, settings: {withInternalID: boolean}}) {
        super("div", props);
    }
    render() {
        return this.compile(greetings, this.props);
    }
}