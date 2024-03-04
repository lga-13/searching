import "./settings-page.css";
import Block from "../../components/base/block.ts";
import Img from "../../components/img/img.ts";
import Label from "../../components/label/label.ts";
import Input from "../../components/input/input.ts";
import Link from "../../components/links/link.ts";
import greetings from "../settings-page/settings-page-template.ts";
import Button from "../../components/button/button.ts";

export default class SettingsPage extends Block {
    constructor(props: {className: string, settings: {withInternalID: boolean}, settingsImg: Img, settingsLoginLabel: Label,
        settingsLoginInput: Input, settingsNameLabel: Label,
        settingsNameInput: Input, settingsSecondNameLabel: Label,
        settingsSecondNameInput: Input, settingsEmailLabel: Label,
        settingsEmailInput: Input, settingsPhoneLabel: Label, settingsPhoneInput:Input, settingsDataLink: Link,
        settingsPasswordLink: Link, settingsExitLink: Link, buttonWithImg: Img, settingsPlugLink: Link}) {
        super('div', props);
    }
    render() {
        return this.compile(greetings, this.props);
    }
}