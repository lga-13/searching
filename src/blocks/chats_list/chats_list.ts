import Block from "../../components/base/block.ts";
import greetings from "./chats_list-template.ts"
import ChatMiniature from "./chat_miniature/chat_miniature.ts";
import {get_chats_list, MOCK_MESSAGE_DATA} from "../../pages/chat-page/chat-page.ts";


export default class ChatList extends Block {


    constructor(props: {showMessageChain: (user_id: number) => void}){
        const chatList = []
        Object.values(get_chats_list(MOCK_MESSAGE_DATA)).forEach(chat => {
            const currentChatMiniature = new ChatMiniature({
                srcName: chat.srcName,
                index:  chat.index,
                sender: chat.sender,
                your: chat.your,
                content: chat.content,
                time: chat.time,
                count: chat.count,
                settings: {withInternalID: true},
                events: {
                    click: () => {
                        props.showMessageChain(chat.index)
                    }
                }
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