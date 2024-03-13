import "./settings-page.css";
import Block from "../../components/base/block.ts";
import Img from "../../components/img/img.ts";
import Label from "../../components/form/field/label/label.ts";
import Input from "../../components/form/field/input/input.ts";
import Link from "../../components/links/link.ts";
import greetings from "../settings-page/settings-page-template.ts";
import Plug from "../../components/plug/plug.ts";
import Button from "../../components/button/button.ts";
import {changeDataForm} from "../../blocks/change-data-form/change-data-form-build.ts";
import {changePasswordForm} from "../../blocks/change-password-form/change-password-form-build.ts";
import {settingsPage} from "./settings-page-build.ts";


export default class SettingsPage extends Block {
    constructor(
        props: {
            className: string,
            settings: {
                withInternalID: boolean},
            settingsImg: Img,
            settingsLinkImg: Link,
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
        }) {
        props.changeDataForm = changeDataForm
        props.changePasswordForm = changePasswordForm


        const settingsPlug = new Plug(
            {
                className: "plug",
                plugLink: {
                    className: 'settings-window__link',
                    href: '#',
                    text: 'Выберите, какие изменения хотите внести.',
                }
            }
        )

        props.settingsPlug = settingsPlug


        const settingsDataLink = new Link(
            {
                className: 'settings__change-data',
                href: '#',
                text: 'Изменить личные данные',
                settings: {withInternalID: true},
                events: {
                    click: () => {
                        settingsPage.showChangeDataForm()
                    }
                }
            }
        )
        props.settingsDataLink = settingsDataLink

        const settingsPasswordLink = new Link(
            {
                className: 'settings__change-password',
                href: '#',
                text: 'Сменить пароль',
                settings: {withInternalID: true},
                events: {
                    click: () => {
                        settingsPage.showChangePasswordForm()
                    }
                }
            }
        )
        props.settingsPasswordLink = settingsPasswordLink

        const settingsExitLink = new Link(
            {
                className: 'settings__change-exit',
                href: '#',
                text: 'Выйти из аккаунта',
                settings: {withInternalID: true}
            }
        )
        props.settingsExitLink = settingsExitLink

        const buttonBlueBack = new Button(
            {
                className: 'settings__btn-back',
                typeName: 'button',
                text: '⬅',
                settings: {withInternalID: true},
                events: {click: () => {
                        this.hideSettings()
                    }},
            }
        )
        props.buttonBlueBack = buttonBlueBack

        super('div', props);
    }



    showChangeDataForm() {
        this.children.changePasswordForm.hide()
        this.children.changeDataForm.show()
        this.children.settingsPlug.hide()
        }

    showChangePasswordForm() {
        this.children.changeDataForm.hide()
        this.children.changePasswordForm.show()
        this.children.settingsPlug.hide()
    }

    hideSettings() {
        this.children.changeDataForm.hide()
        this.children.changePasswordForm.hide()
        this.children.settingsPlug.show()
    }

    render() {
        return this.compile(greetings, this.props);
    }
}