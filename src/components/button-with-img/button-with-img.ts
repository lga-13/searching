import Block from "../base/block.ts";
import Link from "../links/link.ts";
import Img from "../img/img.ts";
import greetings from "../button/button_template.ts";

export default class ButtonWithImage extends Block {
    constructor(props: {buttonImgLink: Link, imgButton: Img}) {
        super("button", props);
    }

    render() {
        return this.compile(greetings, this.props);
    }
}