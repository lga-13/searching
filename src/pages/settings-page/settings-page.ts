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
import {changeDataForm} from "../../blocks/change-data-form/change-data-form-build.ts";
import {changePasswordForm} from "../../blocks/change-password-form/change-password-form-build.ts";


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
        }) {
        props.changeDataForm = changeDataForm
        props.changePasswordForm = changePasswordForm
        super('div', props);
    }



    showChangeDataForm() {
        this.children.changeDataForm.hide()
        this.children.changeDataForm.show()
        this.children.settingsPlug.hide()
        }

    showChangePasswordForm() {
        this.children.changePasswordForm.hide()
        this.children.changePasswordForm.show()
        this.children.settingsPlug.hide()
    }

    hideSettings() {
        this.childrens.changeDataForm.hide()
        this.children.changePasswordForm.hide()
        this.children.settingsPlug.show()
    }

    render() {
        return this.compile(greetings, this.props);
    }
}