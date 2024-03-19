import Block from "../base/block.ts";
import greetings from "./link-template.ts";
import {settingsPage} from "../../pages/settings-page/settings-page.ts";


export interface LinkBlockType {
    className: string,
    href: string,
    text: string,
    settings?: {withInternalID: boolean},
    events?: {
        click: () => void
    }
}


export default class Link extends Block {
    constructor(props: LinkBlockType) {
        super("div", props);
    }
    render() {
        return this.compile(greetings, this.props);
    }
}
