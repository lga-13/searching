import Block from "../base/block.ts"
import greetings from "./input-template.ts";

export default class Input extends Block {
    constructor(props: {className: string, text: string, placeholder: string}) {
        super("input", props);
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
        if(valueLength >= min && valueLength <= max) {
            return true;
        }
        return false;
    }

    validatePattern(pattern) {
        const regex = new RegExp(pattern);
        return regex.test(this.element.value);
    }

}
