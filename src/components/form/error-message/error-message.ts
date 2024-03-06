import Block from "../../base/block.ts";
import greetings from "./error-message-template.ts";

export default class ErrorMessage extends Block {
    constructor(props: {className: string, errorMessage: string, settings: {withInternalID: boolean}})
    {
        super("div", props);
    }

    render() {
        // this.hide()
        return this.compile(greetings, this.props);
    }
}
