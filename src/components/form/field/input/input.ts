
import greetings from "./input-template.ts";
import Block from "../../../base/block.ts";

export default class Input extends Block {

    _already_check: boolean

    constructor(
        props: {
            className: string,
            typeName: string,
            fieldName: string,
            placeholder: string,
            text: string,
            settings: {withInternalID: true},
            events: {
                blur: ()=>void
                focus: () => void
            },
            validator: {}
        }
    ) {
        super("input", props);
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