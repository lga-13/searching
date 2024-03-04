import "./registration-form.css";
import greetings from "./registration-form-template.ts";
import Title from "../../components/titles/title.ts";
import Label from "../../components/label/label.ts";
import Input from "../../components/input/input.ts";
import Link from "../../components/links/link.ts";
import Button from "../../components/button/button.ts";
import Form from "../../components/base/base_form.ts";

export default class RegistrationForm extends Form {
    constructor(props: {className: string, settings: {withInternalID: boolean}, registrationTitle: Title, registrationFormEmailLabel: Label,
                        registrationFormEmailInput: Input, registrationFormLoginLabel: Label,
                        registrationFormLoginInput: Input, registrationFormNameLabel: Label,
                        registrationFormNameInput: Input, registrationFormSecondNameLabel: Label,
                        registrationFormSecondNameInput: Input, registrationFormPhoneLabel: Label,
                        registrationFormPhoneInput: Input, registrationFormPasswordLabel: Label,
                        registrationFormPasswordInput: Input, registrationFormRepeatPasswordLabel: Label,
                        registrationFormRepeatPasswordInput: Input, registrationFormButton: Button,
                        registrationFormLink: Link}) {
        super('div', props)
    }
    render() {
        return this.compile(greetings, this.props);
    }
}