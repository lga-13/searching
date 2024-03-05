import Block from "../base/block.ts";
import greetings from "./img-template.ts";

export default class Img extends Block {
    constructor(props: {className: string, srcName: string, altText: string, settings: {withInternalID: boolean}}) {
        super("div", props);
    }
    render() {
        return this.compile(greetings, this.props);
    }
}