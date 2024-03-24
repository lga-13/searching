import Block from '../../../components/base/block.ts';
import greetings from './message_container-template.ts';
import Message from '../message/message.ts';
import Title from '../../../components/title/title.ts';

export interface MessageContainerBlockType{
    messageData?: Title,
    message: Message,
}

export default class MessageContainer extends Block {
  constructor(props: MessageContainerBlockType) {
    super('div', props);
  }

  render() {
    return this.compile(greetings, this.props);
  }
}
