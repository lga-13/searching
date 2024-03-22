import Title, { TitleBlockType } from '../../components/title/title.ts';
import greetings from './user_info_card-template.ts';
import Block from '../../components/base/block.ts';
import { getMessageChain, getSender } from '../../pages/chat-page/chat-page.ts';
import Message from '../message_chain/message/message.ts';
import { getUserData, MOCK_USER_DATA } from '../../pages/settings-page/settings-page.ts';

export interface UserInfoCardBlockType{
    cardTitles?: Title[]
}

export class UserInfoCard extends Block {
  constructor(props: UserInfoCardBlockType) {
    props.cardTitles = [];
    Object.values(getUserData()).forEach((title) => {
      props.cardTitles.push(new Title({
        className: 'settings-label',
        text: title,
        settings: { withInternalID: true },
        tag: 'p',
      }));
    });
    // props.cardTitles = UserInfoCard.generateBlock(MOCK_USER_DATA)
    super('div', props);
  }

  generateBlock(data: {string: string}) {
    const titles = [];
    // Делаем запрос пользователя
    Object.values(data).forEach((title_text) => {
      titles.push(new Title({
        className: 'settings-label',
        text: title_text,
        settings: { withInternalID: true },
        tag: 'p',
      }));
    });
    return titles;
  }

  refreshUserData() {
    this.children.cardTitles = this.generateBlock(getUserData());
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  render() {
    return this.compile(greetings, this.props);
  }
}
