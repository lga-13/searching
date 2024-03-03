import "./login-form.css"
import greetings from "./login-form-template.ts"
import FormTitle from "../../components/titles/form-title.ts";
import Label from "../../components/label/label.ts";
import Button from "../../components/button/button.ts";
import Input from "../../components/input/input.ts";
import Link from "../../components/links/link.ts";
import Form from "../../components/base/base_form.ts";





export default class LoginForm extends Form {

    constructor(props: {className: string, settings: {withInternalID: true}, formTitle: FormTitle, formLoginLabel: Label, formPasswordLabel: Label,
        formLoginInput: Input, formPasswordInput: Input, loginFormButton: Button, loginFormLink: Link, loginFormPasswordLink: Link}) {
        // Создаём враппер DOM-элемент button
        super("div", props);
    }


    render() {
        return this.compile(greetings, this.props);
    }
}