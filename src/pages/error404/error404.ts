import "./error404.css";
import Block from "../../components/base/block.ts";
import ErrorTitle from "../../components/titles/title.ts";
import Link from "../../components/links/link.ts";
import ErrorMessage from "../../components/form/error-message/error-message.ts";
import greetings from "./error404-template.ts";



export default class Error404 extends Block {
    constructor(props: {
        className: string, errorTitle: ErrorTitle, errorMessage: ErrorMessage, errorLink: Link,
        settings: {withInternalID: boolean}})
    {
        // Создаём враппер DOM-элемент button
        super("div", props);
    }

    render() {
        return this.compile(greetings, this.props);
    }
}

