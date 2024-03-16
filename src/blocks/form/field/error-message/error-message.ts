import greetings from "./error-message-template.ts";
import Block from "../../../../components/base/block.ts";



export interface errorMessageBlockType {
    className: string,
    text: string,
    settings?: {withInternalID: boolean}
}


export default class ErrorMessage extends Block {
    constructor(props: errorMessageBlockType)
    {
        super("div", props);
    }

    render() {
        this.hide()
        return this.compile(greetings, this.props);
    }
}
