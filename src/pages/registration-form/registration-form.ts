import "./registration-form.css";
import greetings from "./registration-from-template.ts";
import Block from "../../components/base/block.ts";
import FormTitle from "../../components/titles/form-title.ts";
import Label from "../../components/label/label.ts";
import Input from "../../components/input/input.ts";
import Link from "../../components/links/link.ts";
import Button from "../../components/button/button.ts";

export default class RegistrationForm extends Block {
    constructor(props: {className: string, registrationTitle: FormTitle, registrationFormEmailLabel: Label,
                        registrationFormEmailInput: Input, registrationFormLoginLabel: Label,
                        registrationFormLoginInput: Input, registrationFormNameLabel: Label,
                        registrationFormNameInput: Input, registrationFormSecondNameLabel: Label,
                        registrationFormSecondNameInput: Input, registrationFormPhoneLabel: Label,
                        registrationFormPhoneInput: Input, registrationFormPasswordLabel: Label,
                        registrationFormPasswordInput: Input, registrationFormRepeatPasswordLabel: Label,
                        registrationFormRepeatPasswordInput: Input, registrationFormButton: Button,
                        registrationFormLink: Link}) {
        super('registration-form', props)
    }
    render() {
        return this.compile(greetings, this.props);
    }
}