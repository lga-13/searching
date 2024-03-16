import greetings from "./input-template.ts";
import Block from "../../../../components/base/block.ts";


export interface inputBlockType {
    className: string,
    name: string,
    placeholder: string,
    inputType: string,
    settings?: {withInternalID: boolean},
}


export default class Input extends Block {

    _already_check: boolean

    constructor(props: inputBlockType) {
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
        const input = this.element.querySelector('input');
        input.value = ''
    }

    getInputValue():  string {
        const input = this.element.querySelector('input');
        return input.value;
    }

    getName(): string {
        return this.props.name
    }

}
