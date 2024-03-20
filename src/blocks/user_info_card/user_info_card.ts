import Title, {TitleBlockType} from "../../components/title/title.ts";
import greetings from "./user_info_card-template.ts";
import Block from "../../components/base/block.ts";
import {getMessageChain, getSender} from "../../pages/chat-page/chat-page.ts";
import Message from "../message_chain/message/message.ts";
import {MOCK_USER_DATA} from "../../pages/settings-page/settings-page.ts";

export interface UserInfoCardBlockType{
    labelClassName: TitleBlockType[],
    cardTitles?: Title[]
}

export class UserInfoCard extends Block {
    constructor(props: UserInfoCardBlockType) {
        props.cardTitles = []
        Object.values(props.titles).forEach(title => {
            props.cardTitles.push(new Title(title))
        })
        super("div", props);
    }

    generateBlock(data: string[]) {
        const titles = []
        // Делаем запрос пользователя
        Object.values(data).forEach(title_text => {
            titles.push(new Title({
                className: 'settings__label',
                text: title_text,
                settings: {withInternalID: true},
                tag: 'p'
            }))
        })
        return titles
    }

    showData(data: [string]){

        this.children.cardTitles = this.generateBlock(MOCK_USER_DATA)

        this.eventBus().emit(Block.EVENTS.FLOW_RENDER)
    }

    render() {
        return this.compile(greetings, this.props);
    }
}

