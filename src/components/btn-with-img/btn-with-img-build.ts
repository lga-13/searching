import Link from "../../components/links/link.ts";
import Img from "../img/img.ts";
import avatar from "../../public/static/img/avatar.svg";
import ButtonWithImg from "./btn-with-img.ts";



const btnWithImgLink = new Link(
    {
        className: 'change-data-form__btn-back',
        href: '#',
        text: '',
        settings: {withInternalID: true}
    }
)
const  btnImg = new Img(
    {
        className: 'change-password-form__img',
        srcName: avatar,
        altText: 'photo',
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