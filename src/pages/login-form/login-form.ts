import "./login-form.css"
import greetings from "./login-form-template.ts"
import FormTitle from "../../components/titles/form-title.ts";
import Block from "../../components/base/block.ts";
import Label from "../../components/label/label.ts";
import Button from "../../components/button/button.ts";


export default class LoginForm extends Block {

    constructor(props: {className: string, userName: string, formTitle: FormTitle, formLoginLabel: Label, formPasswordLabel: Label,
                        loginFormButton: Button, }) {
        // Создаём враппер DOM-элемент button
        super("div", props);
    }

    render() {
        return this.compile(greetings, this.props);
    }
}