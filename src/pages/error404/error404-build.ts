import FormTitle from "../../components/titles/error-title.ts";
import Link from "../../components/links/link.ts";
import "./error404.css";
import Error404 from "./error404.ts";
import ErrorMessage from "../../components/error-message/error-message.ts";


const errorTitle = new FormTitle(
    {
        className: 'error404__title',
        text: '404',
        settings: {withInternalID: true}
    }
)
const errorMessage = new ErrorMessage(
    {
        className: 'error404__message',
        text: 'Не в ту дверь...',
        settings: {withInternalID: true}
    }
)
const errorLink = new Link(
    {
        className: 'error404__back-chats',
        href: '#',
        text: 'вернуться к чатам',
        settings: {withInternalID: true}
    }
)

export const error404 = new Error404(
    {
        className: "h1",
        settings: {withInternalID: true},
        errorTitle: errorTitle,
        errorMessage: errorMessage,
        errorLink: errorLink,
    })