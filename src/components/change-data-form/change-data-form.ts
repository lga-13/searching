import "./change-data-form.css";
import greetings from "./change-data-form-template.ts";
import Label from "../../components/label/label.ts";
import Input from "../../components/input/input.ts";
import Button from "../../components/button/button.ts";
import Form from "../form/form.ts";
import Img from "../../components/img/img.ts";
import Link from "../../components/links/link.ts";
import ErrorMessage from "../../components/error-message/error-message.ts";
import ButtonWithImg from "../../components/btn-with-img/btn-with-img.ts";

export default class ChangeDataForm extends Form {
    constructor(props: {className: string, settings: {withInternalID: boolean},
        changeDataFormImg: Img, changeDataFormLoginLabel: Label,
        changeDataFormLoginInput: Input, loginErrorMessage: ErrorMessage, changeDataFormNameLabel: Label,
        changeDataFormNameInput: Input, nameErrorMessage: ErrorMessage, changeDataFormSecondNameLabel: Label,
        changeDataFormSecondNameInput: Input, secondNameErrorMessage: ErrorMessage, changeDataFormEmailLabel: Label,
        changeDataFormEmailInput: Input, emailErrorMessage: ErrorMessage, changeDataFormPhoneLabel: Label,
        changeDataFormPhoneInput: Input, phoneErrorMessage: ErrorMessage, changeDataFormButton: Button, buttonWithImg: ButtonWithImg,
        changeDataFormLink: Link}) {
        super('div', props)
    }
    render() {
        this.hide()
        return this.compile(greetings, this.props);
    }
}