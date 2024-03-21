import Block from '../../components/base/block.ts';
import ErrorCard from '../../blocks/error-card/error-card.ts';
import greetings from '../error500/error500-template.ts';
import './error404.css';

export interface Error404BlockType {
    errorCard?: ErrorCard
}

class Error404Page extends Block {
  constructor(props: Error404BlockType) {
    props.errorCard = new ErrorCard(
      {
        className: 'h1',
        title: {
          className: 'error404__title',
          text: '404',
          tag: 'div',
        },
        message: {
          className: 'error404__message',
          text: 'Не существует',
          tag: 'h1',
        },
        link: {
          className: 'error404__back-chats',
          href: '#',
          text: 'вернуться к чатам',
        },
      },
    );
    super('div', props);
  }

  render() {
    return this.compile(greetings, this.props);
  }
}
export const error404Page = new Error404Page({});
