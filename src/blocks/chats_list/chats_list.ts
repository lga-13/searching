import Block from "../../components/base/block.ts";
import greetings from "./chats_list-template.ts"
import ChatMiniature from "./chat_miniature/chat_miniature.ts";
import {get_chats_list, MOCK_MESSAGE_DATA} from "../../pages/chat-page/chat-page.ts";


export default class ChatList extends Block {


    constructor(props: {showMessageChain: (user_id: number) => void}){


        // Созадние чат листа

        // Создаём враппер DOM-элемент button
        super("div", props);
        this.newMessage()
    }

    newMessage() {
        const chatList = []
        Object.values(get_chats_list(MOCK_MESSAGE_DATA)).forEach(chat => {
            const parts = chat.message_chain[chat.message_chain.length - 1].time.split(':');
            parts.pop();
            let newTime = parts.join(':');
            const currentChatMiniature = new ChatMiniature({
                srcName: chat.srcName,
                index:  chat.index,
                sender: chat.sender,
                your: chat.message_chain[chat.message_chain.length - 1].me,
                content: chat.message_chain[chat.message_chain.length - 1].text,
                time: newTime,
                count: chat.count,
                settings: {withInternalID: true},
                events: {
                    click: () => {
                        this.props.showMessageChain(chat.index)
                    }
                }
            })
            chatList.push(currentChatMiniature)

        })
        console.log(this.children)
        console.log(chatList)
        this.children.chatList = chatList
        this.eventBus().emit(Block.EVENTS.FLOW_RENDER)
    }

    render() {
        return this.compile(greetings, this.props);
    }
}