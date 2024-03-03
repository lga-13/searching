import Block from "../base/block.ts"
import greetings from "./input-template.ts";

export default class Input extends Block {
    constructor(props: {className: string, text: string, settings: {withInternalID: true}, events: {blur: (event)=>void}}) {
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
        return valueLength >= min && valueLength <= max;

    }

    validatePattern(pattern) {
        const regex = new RegExp(pattern);
        return regex.test(this.element.value);
    }

}
