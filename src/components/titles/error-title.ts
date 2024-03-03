import Block from "../base/block.ts";
import greetings from "./error-title-template.ts";

export default class ErrorTitle extends Block {
    constructor(props: {className: string, text: string}) {
        super("h1", props);
    }

    render() {
        return this.compile(greetings, this.props);
    }
}

