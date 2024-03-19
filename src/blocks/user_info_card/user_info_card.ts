import Title, {TitleBlockType} from "../../components/title/title.ts";
import greetings from "./user_info_card-template.ts";
import Block from "../../components/base/block.ts";

export interface UserInfoCardBlockType{
    titles: TitleBlockType[],
    cardTitles?: Title[]
}

export class UserInfoCard extends Block {
    constructor(props: UserInfoCardBlockType) {
        props.cardTitles = []
        Object.values(props.titles).forEach(title => {
            props.cardTitles.push(new Title(title))
        })
        console.log(props)
        super("div", props);
    }

    render() {
        return this.compile(greetings, this.props);
    }
}

