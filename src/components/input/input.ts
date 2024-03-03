import Block from "../base/block.ts"
import greetings from "./input-template.ts";

export default class Input extends Block {

    _already_check: boolean

    constructor(
        props: {
            className: string,
            text: string,
            settings: {withInternalID: true},
            events: {
                blur: ()=>void
                focus: () => void
            }
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

    getInputValue() {
        return this.element.value;
    }

    validateLength(min, max) {
        const valueLength = this.element.value.length;
        return valueLength >= min && valueLength <= max;

    }

    validatePattern(pattern) {
        const regex = new RegExp(pattern);
        return regex.test(this.element.value);
    }

}
