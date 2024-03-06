// import "./change-password-form.css";
// import greetings from "./change-password-form-template.ts";
// import Label from "../../components/form/field/label/label.ts";
// import Input from "../../components/form/field/input/input.ts";
// import Button from "../../components/button/button.ts";
// import Form from "../../components/form/form.ts";
// import Img from "../../components/img/img.ts";
// import ErrorMessage from "../../components/form/error-message/error-message.ts";
//
//
// export default class ChangePasswordForm extends Form {
//     constructor(props: {className: string, settings: {withInternalID: boolean},
//         changePasswordFormImg: Img, PasswordLabel: Label,
//         PasswordInput: Input, passwordErrorMessage: ErrorMessage, newPasswordLabel: Label,
//         newPasswordInput: Input, newPasswordErrorMessage: ErrorMessage, repeatNewPasswordLabel: Label,
//         repeatNewPasswordInput: Input, repeatNewPasswordErrorMessage: ErrorMessage, changePasswordFormButton: Button, buttonBlueBack: Button}) {
//         super('div', props)
//     }
//     render() {
//         this.hide()
//         return this.compile(greetings, this.props);
//     }
// }