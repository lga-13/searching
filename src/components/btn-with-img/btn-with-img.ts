import Block from "../base/block.ts";
import greetings from "./btm-with-img-template.ts"
import Link from "../links/link.ts";
import Img from "../img/img.ts";


export default class ButtonWithImg extends Block {

    // Кнопка

    constructor(props: {className: string, typeName:string, btnWithImgLink: Link, btnImg: Img, settings: {withInternalID: true}, events: {click: (event)=>void}}) {
        // Создаём враппер DOM-элемент button
        super("div", props);
    }

    render() {
        return this.compile(greetings, this.props);
    }
}