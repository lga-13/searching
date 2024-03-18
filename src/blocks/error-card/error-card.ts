import Title, {TitleBlockType} from "../../components/title/title.ts";
import ErrorMessage, {errorMessageBlockType} from "../form/field/error-message/error-message.ts";
import Link, {LinkBlockType} from "../../components/link/link.ts";
import Block from "../../components/base/block.ts";
import greetings from "./error-card-template.ts";

export interface Error500PageType {
    className: string,
    title: TitleBlockType
    message: TitleBlockType
    link: LinkBlockType,
    errorTitle?: Title,
    errorMessage?: ErrorMessage,
    errorLink?: Link,
    settings?: {withInternalID: boolean}
}



export default class ErrorCard extends Block {
    constructor(props: Error500PageType) {

        props.errorTitle = new Title(props.title)
        props.errorMessage = new Title(props.message)
        props.errorLink = new Link(props.link)
        super("div", props);
    }

    render() {
        return this.compile(greetings, this.props);
    }
}