import Link from "../../components/links/link.ts";
import Img from "../img/img.ts";
import ButtonWithImage from "./button-with-img.ts";
import btnback from "../../public/static/img/btn-back.svg"

const buttonImgLink = new Link(
    {
        className: 'settings__link-img',
        settings: {withInternalID: true},
        href: '#',
    }
)
const imgButton = new Img(
    {
        className: 'settings__btn-back-link',
        settings: {withInternalID: true},
        src: btnback,
        alt: 'btn',
    }
)

export const buttonWithImg = new ButtonWithImage(
    {
        className: 'settings__btn-back',
        typeName: 'button'
    })