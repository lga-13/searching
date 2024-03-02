import Block from "../base/block.ts"
import greetings from "./input-template.ts";

export default class Input extends Block {
    constructor(props: {className: string, text: string, placeholder: string}) {
        super("input", props);
    }

    render() {
        return this.compile(greetings, this.props);
    }
}
