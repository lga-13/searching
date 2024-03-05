import "./registration-form.css";
import greetings from "./registration-form-template.ts";
import Title from "../../components/titles/title.ts";
import Label from "../../components/label/label.ts";
import Input from "../../components/input/input.ts";
import Link from "../../components/links/link.ts";
import Button from "../../components/button/button.ts";
import Form from "../../components/form/form.ts";
import ErrorMessage from "../../components/error-message/error-message.ts";

export default class RegistrationForm extends Form {
    constructor(props: {className: string, settings: {withInternalID: boolean}, registrationTitle: Title, registrationFormEmailLabel: Label,
                        registrationFormEmailInput: Input, emailErrorMessage: ErrorMessage, registrationFormLoginLabel: Label,
                        registrationFormLoginInput: Input, loginErrorMessage: ErrorMessage, registrationFormNameLabel: Label,
                        registrationFormNameInput: Input, nameErrorMessage: ErrorMessage, registrationFormSecondNameLabel: Label,
                        registrationFormSecondNameInput: Input, secondNameErrorMessage: ErrorMessage, registrationFormPhoneLabel: Label,
                        registrationFormPhoneInput: Input, phoneErrorMessage: ErrorMessage, registrationFormPasswordLabel: Label,
                        registrationFormPasswordInput: Input, passwordErrorMessage: ErrorMessage, registrationFormRepeatPasswordLabel: Label,
                        registrationFormRepeatPasswordInput: Input, repeatPasswordErrorMessage: ErrorMessage, registrationFormButton: Button,
                        registrationFormLink: Link}) {
        super('div', props)
    }
    render() {
        return this.compile(greetings, this.props);
    }
}