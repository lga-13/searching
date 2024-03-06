import "./settings-page.css";
import Block from "../../components/base/block.ts";
import Img from "../../components/img/img.ts";
import Label from "../../components/form/field/label/label.ts";
import Input from "../../components/form/field/input/input.ts";
import Link from "../../components/links/link.ts";
import greetings from "../settings-page/settings-page-template.ts";
import Plug from "../../components/plug/plug.ts";
import ChangeDataForm from "../../blocks/change-data-form/change-data-form.ts";
import Button from "../../components/button/button.ts";


export default class SettingsPage extends Block {
    constructor(
        props: {
            className: string,
            settings: {
                withInternalID: boolean},
            settingsImg: Img,
            settingsLoginLabel: Label,
            settingsLoginInput: Input,
            settingsNameLabel: Label,
            settingsNameInput: Input,
            settingsSecondNameLabel: Label,
            settingsSecondNameInput: Input,
            settingsEmailLabel: Label,
            settingsEmailInput: Input,
            settingsPhoneLabel: Label,
            settingsPhoneInput:Input,
            settingsDataLink: Link,
            settingsPasswordLink: Link,
            settingsExitLink: Link,
            buttonBlueBack: Button,
            settingsPlug: Plug,
            settingsChangeDataForm: ChangeDataForm,
            settingsChangePasswordForm: ChangeDataForm
        }) {
        super('div', props);
    }

    showChangeDataForm() {
        this.children.settingsChangeDataForm.show()
        this.children.settingsChangePasswordForm.hide()
        this.children.settingsPlug.hide()
        }

    showChangePasswordForm() {
        this.children.settingsChangeDataForm.hide()
        this.children.settingsChangePasswordForm.show()
        this.children.settingsPlug.hide()
    }

    hideSettings() {
        this.childrens.settingsChangeDataForm.hide()
        this.children.settingsChangePasswordForm.hide()
        this.children.settingsPlug.show()
    }

    render() {
        return this.compile(greetings, this.props);
    }
}