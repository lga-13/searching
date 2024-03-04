import "./change-data-form.css";
import greetings from "./change-data-form-template.ts";
import Label from "../../components/label/label.ts";
import Input from "../../components/input/input.ts";
import Button from "../../components/button/button.ts";
import Form from "../../components/base/base_form.ts";
import Img from "../../components/img/img.ts";
import Link from "../../components/links/link.ts";

export default class ChangeDataForm extends Form {
    constructor(props: {className: string, settings: {withInternalID: boolean},
        changeDataFormImg: Img, changeDataFormLoginLabel: Label,
        changeDataFormLoginInput: Input, changeDataFormNameLabel: Label,
        changeDataFormNameInput: Input, changeDataFormSecondNameLabel: Label,
        changeDataFormSecondNameInput: Input, changeDataFormEmailLabel: Label,
        changeDataFormEmailInput: Input, changeDataFormPhoneLabel: Label,
        changeDataFormPhoneInput: Input, changeDataFormButton: Button, buttonWithImg: Img,
        changeDataFormLink: Link}) {
        super('div', props)
    }
    render() {
        return this.compile(greetings, this.props);
    }
}