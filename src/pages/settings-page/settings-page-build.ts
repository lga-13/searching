
import Link from "../../components/link/link.ts";
import Img from "../../components/img/img.ts";
import avatar from "../../public/static/img/avatar.svg";
import SettingsPage from "./settings-page.ts";
import Title from "../../components/title/title.ts";




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
const settingsLoginTitle = new Title(
    {
            className: 'settings__label',
            text: 'Логин',
            settings: {withInternalID: true},
            tag: 'p'
    }
)

const settingsNameTitle = new Title(
    {
            className: 'settings__label',
            text: 'Имя',
            settings: {withInternalID: true},
            tag: 'p'
    }
)

const settingsSecondNameTitle = new Title(
    {
            className: 'settings__label',
            text: 'Фамилия',
            settings: {withInternalID: true},
            tag: 'p'
    }
)

const settingsEmailTitle = new Title(
    {
            className: 'settings__label',
            text: 'Почта',
            settings: {withInternalID: true},
            tag: 'p'
    }
)

const settingsPhoneTitle = new Title(
    {
        className: 'settings__label',
        text: 'Телефон',
        settings: {withInternalID: true},
        tag: 'p'
    }
)


export const settingsPage = new SettingsPage(
    {
        className: "settings-page",
        settings: {withInternalID: true},
        settingsImg: settingsImg,
        settingsLinkImg: settingsLinkImg,
        settingsLoginTitle: settingsLoginTitle,
        settingsNameTitle: settingsNameTitle,
        settingsSecondNameTitle: settingsSecondNameTitle,
        settingsEmailTitle: settingsEmailTitle,
        settingsPhoneTitle: settingsPhoneTitle,
    })