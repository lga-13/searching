import Block from "../base/block.ts";
import greetings from "./error-message-template.ts";

export default class ErrorMessage extends Block {
    constructor(props: {className: string, errorMessage: string, settings: {withInternalID: boolean}})
    {
        super("div", props);
    }

    render() {
        return this.compile(greetings, this.props);
    }
}
