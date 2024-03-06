import "./chat-page.css"
import ChatPage from "./chat-page.ts";

export const chatPage = new ChatPage({plug:{
    className: "chats-plug",
    plugLink: {
        className: "chats-plug__message",
        href: "#",
        text: "Выберите чат, чтобы начать общаться.",
    }}
});