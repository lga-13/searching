import "./chat-page.css"
import ChatList from "../../components/chats_list/chats_list.ts";
import ChatPage from "./chat-page.ts";
import Input from "../../components/input/input.ts";

export const chatList = new ChatList({
    chats: [
        {
            index: 1,
            sender: "Мама",
            your: "Вы",
            content: "Привет! Как дела?",
            time: "10:30",
            count: 1
        }
    ],
    settings: {withInternalID: true}
})

export const chatSearch = new Input({
    className: "chats__search-input",
    fieldName: "chat_search",
    text: "text",
    settings: {withInternalID: true},
    placeholder: "Поиск",
    events: {
        blur: ()=> {},
        focus: () => {}
    },
    validator: {}
})

export const chatPage = new ChatPage({
    chatsList: chatList,
    chatSearch: chatSearch,
    settings: {withInternalID: true}
});