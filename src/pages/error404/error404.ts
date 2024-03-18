import Block from "../../components/base/block.ts";
import ErrorCard from "../../blocks/error-card/error-card.ts";
import greetings from "./error404-template.ts";
import "./error404.css";

export default class Error404Page extends Block {
    constructor(props: {}) {
        props.errorCard = new ErrorCard(
            {
                className: "h1",
                title: {
                    className: 'error404__title',
                    text: '404',
                    tag: "div",
                    settings: {withInternalID: true},
                },
                message: {
                    className: 'error404__message',
                    text: 'Не существует',
                    settings: {withInternalID: true},
                    tag: "h1"
                },
                link: {
                    className: 'error404__back-chats',
                    href: '#',
                    text: 'вернуться к чатам',
                    settings: {withInternalID: true}
                },
                settings: {withInternalID: true},
            })
        super("div", props);
    }

    render() {
        return this.compile(greetings, this.props);
    }
}
export const error404Page = new Error404Page({})