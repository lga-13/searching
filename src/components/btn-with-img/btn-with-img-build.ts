import Link from "../../components/links/link.ts";
import Img from "../img/img.ts";
import btnback from "../../public/static/img/btn-back.svg";
import ButtonWithImg from "./btn-with-img.ts";



const btnWithImgLink = new Link(
    {
        className: 'change-data-form__link-img',
        href: '#',
        text: '',
        settings: {withInternalID: true}
    }
)
const  btnImg = new Img(
    {
        className: 'change-password-form__btn-back-link',
        srcName: btnback,
        altText: 'btn',
        settings: {withInternalID: true}
    }
)

export const btnWithImg = new ButtonWithImg(
    {
        className: "change-data-form__btn-back",
        typeName: 'button',
        settings: {withInternalID: true},
        btnWithImgLink: btnWithImgLink,
        btnImg: btnImg,
        events: {},
    })