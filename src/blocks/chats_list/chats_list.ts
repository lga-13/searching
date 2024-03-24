import Block from '../../components/base/block.ts';
import greetings from './chats_list-template.ts';
import ChatMiniature from './chat_miniature/chat_miniature.ts';
import { get_chats_list } from '../../pages/chat-page/chat-page.ts';
import monthDict from "../../deps/time_prepare/_month_dict.ts";
import TimeConverter from "../../deps/time_prepare/converter.ts";

export function cutTimeStringMessageChain(messageDate: Date) {
  const hours = messageDate.getHours();
  const minutes = messageDate.getMinutes();
  return `${hours}:${minutes}`;
}


export function cutTimeStringTitle(messageDate: Date) {
  const day = messageDate.getDate();
  const month = messageDate.getMonth();
  return `${day} ${monthDict[month]}`;
}

export function cutTimeStringChatList(messageDate: Date) {
  const day = messageDate.getDate();
  const month = messageDate.getMonth();
  const year = messageDate.getFullYear();
  const hours = messageDate.getHours();
  const minutes = messageDate.getMinutes();
  const today = new Date();
  if (
    day === today.getDate()
      && month === today.getMonth()
      && year === today.getFullYear()
  ) {
    return `${hours}:${minutes}`;
  } if (
    year === today.getFullYear()
  ) {
    if (month === today.getMonth()) {
      if (day === today.getDate() - 1) {
        return 'Вчера';
      }
      if (day === today.getDate() - 2) {
        return 'Позавчера';
      }
    }
    return `${month}.${day}`;
  }
  return `${month}.${day}.${year}`;
}

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
      const raw_time = chat.message_chain[chat.message_chain.length - 1].time;
      const newTime = new TimeConverter(raw_time).toChatList();

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

      let active_flag = false;

      if (active_chat && active_chat == chat.index) {
        active_flag = true;
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
            this.rebuildChatList(chat.index);
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
