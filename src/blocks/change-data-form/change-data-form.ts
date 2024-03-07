// import "./change-data-form.css";
// import greetings from "./change-data-form-template.ts";
// import Label from "../../components/form/field/label/label.ts";
// import Input from "../../components/form/field/input/input.ts";
// import Button from "../../components/button/button.ts";
// import Form from "../../components/form/form.ts";
// import Img from "../../components/img/img.ts";
// import Link from "../../components/links/link.ts";
// import ErrorMessage from "../../components/form/error-message/error-message.ts";
//
//
// export default class ChangeDataForm extends Form {
//     constructor(props: {className: string, settings: {withInternalID: boolean},
//         changeDataFormImg: Img, changeDataFormLoginLabel: Label,
//         changeDataFormLoginInput: Input, loginErrorMessage: ErrorMessage, changeDataFormNameLabel: Label,
//         changeDataFormNameInput: Input, nameErrorMessage: ErrorMessage, changeDataFormSecondNameLabel: Label,
//         changeDataFormSecondNameInput: Input, secondNameErrorMessage: ErrorMessage, changeDataFormEmailLabel: Label,
//         changeDataFormEmailInput: Input, emailErrorMessage: ErrorMessage, changeDataFormPhoneLabel: Label,
//         changeDataFormPhoneInput: Input, phoneErrorMessage: ErrorMessage, changeDataFormButton: Button, buttonBlueBack: Button,
//         changeDataFormLink: Link}) {
//         super('div', props)
//     }
//     render() {
//         this.hide()
//         return this.compile(greetings, this.props);
//     }
// }