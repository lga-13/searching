import Label from "../../components/form/field/label/label.ts";
import Input from "../../components/form/field/input/input.ts";
import Link from "../../components/links/link.ts";
import Img from "../../components/img/img.ts";
import avatar from "../../public/static/img/avatar.svg";
import SettingsPage from "./settings-page.ts";
import btnback from "../../public/static/img/btn-back.svg";
import Plug from "../../components/plug/plug.ts";
import Button from "../../components/button/button.ts";




const  settingsImg = new Img(
    {
        className: 'settings__img',
        settings: {withInternalID: true},
        srcName: avatar,
        altText: 'photo',
    }
)
const settingsLinkImg = new Link(
    {
        className: 'settings__change-img',
        href: '#',
        text: 'Сменить аватар',
        settings: {withInternalID: true},
        events: {}
    }
)
const settingsLoginLabel = new Label(
    {
            className: 'settings__label',
            text: 'Логин',
            settings: {withInternalID: true}
    }
)

const settingsLoginInput = new Input(
    {
            className: 'settings__input',
            text: 'login',
            settings: {withInternalID: true},
            events: {}
    }
)
const settingsNameLabel = new Label(
    {
            className: 'settings__label',
            text: 'Имя',
            settings: {withInternalID: true}
    }
)

const settingsNameInput = new Input(
    {
            className: 'settings__input',
            text: 'first-name',
            settings: {withInternalID: true},
            events: {}
    }
)
const settingsSecondNameLabel = new Label(
    {
            className: 'settings__label',
            text: 'Фамилия',
            settings: {withInternalID: true}
    }
)

const settingsSecondNameInput = new Input(
    {
            className: 'settings__input',
            text: 'second-name',
            settings: {withInternalID: true},
            events: {}
    }
)
const settingsEmailLabel = new Label(
    {
            className: 'settings__label',
            text: 'Почта',
            settings: {withInternalID: true}
    }
)
const settingsEmailInput = new Input(
    {
        className: 'settings__input',
        text: 'email',
        settings: {withInternalID: true},
        events: {}
    }
)
const settingsPhoneLabel = new Label(
    {
        className: 'settings__label',
        text: 'Телефон',
        settings: {withInternalID: true}
    }
)
const settingsPhoneInput = new Input(
    {
        className: 'settings__input',
        text: 'phone',
        settings: {withInternalID: true},
        events: {}
    }
)




export const settingsPage = new SettingsPage(
    {
        className: "settings-page",
        settings: {withInternalID: true},
        settingsImg: settingsImg,
        settingsLinkImg: settingsLinkImg,
        settingsLoginLabel: settingsLoginLabel,
        settingsLoginInput: settingsLoginInput,
        settingsNameLabel: settingsNameLabel,
        settingsNameInput: settingsNameInput,
        settingsSecondNameLabel: settingsSecondNameLabel,
        settingsSecondNameInput: settingsSecondNameInput,
        settingsEmailLabel: settingsEmailLabel,
        settingsEmailInput: settingsEmailInput,
        settingsPhoneLabel: settingsPhoneLabel,
        settingsPhoneInput: settingsPhoneInput,
    })