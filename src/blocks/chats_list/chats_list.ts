import Block from "../../components/base/block.ts";
import greetings from "./chats_list-template.ts"
import ChatMiniature from "./chat_miniature/chat_miniature.ts";
import chat2 from "../../public/static/img/chat2.svg";


const fetch_messages = [
    {
        srcName: chat2,
        index: 1,
        sender: "Мама",
        your: "Вы",
        content: "Привет! Как дела?",
        time: "10:30",
        count: 1
    },
    {
        srcName: chat2,
        index: 2,
        sender: "Папа",
        your: "Вы",
        content: "Вы как?",
        time: "10:31",
        count: 2
    }
]


export default class ChatList extends Block {


    constructor(props: {}){
        const chatList = []
        Object.values(fetch_messages).forEach(chat => {
            const currentChatMiniature = new ChatMiniature({
                srcName: chat.srcName,
                index:  chat.index,
                sender: chat.sender,
                your: chat.your,
                content: chat.content,
                time: chat.time,
                count: chat.count,
                settings: {withInternalID: true},
            })
            chatList.push(currentChatMiniature)
        })
        props.chatList = chatList
        // Создаём враппер DOM-элемент button
        super("div", props);
    }




    render() {
        return this.compile(greetings, this.props);
    }
}