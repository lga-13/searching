import greetings from "./input-template.ts";
import Block from "../../../../components/base/block.ts";


export interface inputBlockType {
    className: string,
    name: string,
    placeholder: string,
    inputType: string,
    settings?: {withInternalID: boolean},
    events?: {
        click: () => void
    }
}


export default class Input extends Block {


    constructor(props: inputBlockType) {
        super("div", props);
    }

    render() {
        return this.compile(greetings, this.props);
    }

    _addEvents() {
        const {events = {}} = this.props;
        Object.keys(events).forEach(eventName => {
            if (eventName === "blur") {
                this._element.querySelector('input').addEventListener(eventName, events[eventName]);
            } else {
                this._element.addEventListener(eventName, events[eventName]);
            }
        });

        this._currentEvents = events;
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
