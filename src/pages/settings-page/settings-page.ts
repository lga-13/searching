import "./settings-page.css";
import Block from "../../components/base/block.ts";
import Img from "../../components/img/img.ts";
import Label from "../../components/label/label.ts";
import Input from "../../components/input/input.ts";
import Link from "../../components/links/link.ts";
import greetings from "../settings-page/settings-page-template.ts";

export default class SettingsPage extends Block {
    constructor(props: {className: string, settingsImg: Img, settingsLoginLabel: Label,
        settingsLoginInput: Input, settingsNameLabel: Label,
        settingsNameInput: Input, settingsSecondNameLabel: Label,
        settingsSecondNameInput: Input, settingsEmailLabel: Label,
        settingsEmailInput: Input, settingsPhoneLabel: Label, settingsPhoneInput:Input, settingsDataLink: Link,
        settingsPasswordLink: Link}) {
        super('settings-data', props);
    }
    render() {
        return this.compile(greetings, this.props);
    }
}