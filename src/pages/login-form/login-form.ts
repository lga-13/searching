import "./login-form.css"
import greetings from "./login-form-template.ts"
import Title from "../../components/titles/title.ts";
import Label from "../../components/label/label.ts";
import Button from "../../components/button/button.ts";
import Input from "../../components/input/input.ts";
import Link from "../../components/links/link.ts";
import Form from "../../components/base/base_form.ts";
import ErrorMessage from "../../components/error-message/error-message.ts";

export default class LoginForm extends Form {

    constructor(props: {className: string, settings: {withInternalID: true}, formTitle: Title, formLoginLabel: Label, formPasswordLabel: Label,
        formLoginInput: Input, formPasswordInput: Input, loginFormButton: Button, loginFormLink: Link, loginFormPasswordLink: Link, passwordErrorMessage: ErrorMessage, loginErrorMessage: ErrorMessage}) {
        // Создаём враппер DOM-элемент button
        super("div", props);
    }


    render() {
        return this.compile(greetings, this.props);
    }
}