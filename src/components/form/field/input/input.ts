import Block from "../../../base/block.ts"
import greetings from "./input-template.ts";
import {loginForm} from "../../../../pages/login-form/login-form-build.ts";

export default class Input extends Block {

    _already_check: boolean

    constructor(
        props: {
            className: string,
            inputName: string,
            inputPlaceholder: string,
            inputType: string
            validator: {}
        }
    ) {
        super("div", props);
        this._already_check = false;
    }

    get already_check() {
        return this._already_check;
    }

    set already_check(value) {
        this._already_check = Boolean(value)
    }

    render() {
        return this.compile(greetings, this.props);
    }

    clear() {
        this.element.value = '';
    }

    getInputValue():  string {
        return this.element.value;
    }

    focus() {
        this.already_check = false
    }



    validate(): boolean {
        return this.props.validator(this.getInputValue())
    }


    submit_validate(): boolean {
        return this.props.validator(this.getInputValue())
    }


    getName(): string {
        return this.props.fieldName
    }

}
