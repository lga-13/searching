import Block from "../components/base/block.ts";
import greetings from "./main_page_templates.ts"
import Button from "../components/button/button.ts";


export default class UserProfile extends Block {

    constructor(props: {userName: string, button: Button}) {
        // Создаём враппер DOM-элемент button
        super("div", props);
    }

    render() {
        console.log("Вызыван рендер UserProfile")
        return this.compile(greetings, this.props);
    }
}