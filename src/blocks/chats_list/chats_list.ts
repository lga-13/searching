import Block from '../../components/base/block.ts';
import greetings from './chats_list-template.ts';
import ChatMiniature from './chat_miniature/chat_miniature.ts';
import { get_chats_list } from '../../pages/chat-page/chat-page.ts';

export interface ChatListBlockType
    {
        showMessageChain: (user_id: number) => void,
        readAllMessages: (user_id: number) => void
    }

export default class ChatList extends Block {
  constructor(props: ChatListBlockType) {
    // Созадние чат листа

    // Создаём враппер DOM-элемент button
    super('div', props);
    this.rebuildChatList();
  }

  rebuildChatList(active_chat = null) {
    const chatList = [];
    Object.values(get_chats_list()).forEach((chat) => {
      // Сборка времени миниатюры чата
      const parts = chat.message_chain[chat.message_chain.length - 1].time.split(':');
      parts.pop();
      const newTime = parts.join(':');

      // Подсчет сообщений
      let counter = 0;
      Object.values(chat.message_chain).forEach((message) => {
        if (!message.read && !message.me) {
          counter += 1;
        }
      });

      let formattedText = chat.message_chain[chat.message_chain.length - 1].text;
      if (formattedText.length > 25) {
        formattedText = `${formattedText.substring(0, 25)} ...`;
      }

      let active_flag = false

      if (active_chat && active_chat == chat.index) {
        active_flag = true
      }

      const currentChatMiniature = new ChatMiniature({
        active: active_flag,
        srcName: chat.srcName,
        index: chat.index,
        sender: chat.sender,
        your: chat.message_chain[chat.message_chain.length - 1].me,
        content: formattedText,
        time: newTime,
        count: counter,
        settings: { withInternalID: true },
        events: {
          click: () => {
            this.props.readAllMessages(chat.index);
            this.props.showMessageChain(chat.index);
            this.rebuildChatList(chat.index)
          },
        },
      });
      chatList.push(currentChatMiniature);
    });
    this.children.chatList = chatList;
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  render() {
    return this.compile(greetings, this.props);
  }
}
