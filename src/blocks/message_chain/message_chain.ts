import greetings from './message_chain-template.ts';
import Button, { buttonBlockType } from '../../components/button/button.ts';
import Title, { TitleBlockType } from '../../components/title/title.ts';
import Block from '../../components/base/block.ts';
import Message from './message/message.ts';
import { getMessageChain, getSender } from '../../pages/chat-page/chat-page.ts';
import Form, { FormProps } from '../form/form.ts';
import {cutTimeStringMessageChain, cutTimeStringTitle} from "../chats_list/chats_list.ts";
import MessageContainer from "./message_container/message_container.ts";

export interface MessageChainBlockType {

    srcName: {}
    sender_name: TitleBlockType,
    messageForm: FormProps,
    attachmentButton: buttonBlockType,
    moreButton: buttonBlockType
    user_id?: number | null
    settings?: {withInternalID: boolean}

    // ЭЛЕМЕНТЫ
    messageChainMoreButton?: Button,
    chainMessages? : Message[],
    messageChainAttachmentsButton? : Button,
    messageChainForm? : Form,
    messageSenderName?: Title,
    chatListHook: () => void
}

export default class MessageChain extends Block {
  constructor(props: MessageChainBlockType) {
    props.messageChainMoreButton = new Button(props.moreButton);
    props.messageSenderName = new Title(props.sender_name);
    props.messageChainAttachmentsButton = new Button(props.attachmentButton);
    props.messageChainForm = new Form(props.messageForm);
    props.user_id = null;
    props.settings = { withInternalID: true };
    super('div', props);
  }

  // Обработка времени сообщеняи


  // Функция которая обновляет содержимое мессадж чейна.
  setCurrentMessage(user_id: number) {
    // Уставнавливается id для текущего чейна
    this.props.user_id = user_id;

    // Делаем запрос пользователя
    const sender = getSender(this.props.user_id);

    // Задаем новый заголовок чейна
    this.children.messageSenderName.setText(sender);

    // Делаем запрос сообщений
    const messages_list = getMessageChain(this.props.user_id);

    const messages = [];

    let currentData: null | Date = null

    Object.values(messages_list).forEach((message) => {
      // Создание ссобщения.


        let dataTitle = null
        if (!(currentData instanceof Date) ||
            currentData.getFullYear() !== message.time.getFullYear() ||
            currentData.getMonth() !== message.time.getMonth() ||
            currentData.getDate() !== message.time.getDate()
        ) {
            currentData = message.time
            dataTitle = new Title(
                {
                    className: "message-chain-data-title",
                    text: cutTimeStringTitle(message.time),
                    tag: "h3"
                }

            )

        }
        const currentMessage = new MessageContainer({
          messageData: dataTitle,
          message: new Message(
              {
                  me: message.me,
                  text: message.text,
                  time: cutTimeStringMessageChain(message.time),
                  read: message.read
              }
          )
        })
        messages.push(currentMessage);
    });

    // Присваивание this.children.messages
    this.children.chainMessages = messages;

    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    this.props.chatListHook();
  }

  render() {
    return this.compile(greetings, this.props);
  }
}
