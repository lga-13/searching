import Block from "../base/block.ts"
import greetings from "./input-template.ts";

export default class Input extends Block {

    _already_check: boolean

    constructor(
        props: {
            className: string,
            fieldName: string,
            text: string,
            settings: {withInternalID: true},
            events: {
                blur: ()=>void
                focus: () => void
            },
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
        if (!this.already_check) {
            const result = this.props.validator(this.getInputValue())
            this.already_check = true
            return result;
        }
        // При blur-валидациии, одного раза достаточно
        return true
    }


    submit_validate(): boolean {
        return this.props.validator(this.getInputValue())
    }


    getName(): string {
        return this.props.fieldName
    }

}
