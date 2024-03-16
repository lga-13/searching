
import greetings from "./field_template.ts"
import Label, {labelBlockType} from "./label/label.ts";
import Input, {inputBlockType} from "./input/input.ts";
import ErrorMessage, {errorMessageBlockType} from "./error-message/error-message.ts";
import Block from "../../../components/base/block.ts";
import Link, {LinkBlockType} from "../../../components/link/link.ts";


export interface fieldBlockType {

    // ДАНЫНЕ ЭЛЕМЕНТОВ
    label?: labelBlockType
    input: inputBlockType
    errorMessage?: errorMessageBlockType
    link?: LinkBlockType
    validator: (value: string) => boolean


    // ЭЛЕМЕНТЫ
    fieldLabel?: Label | null;
    fieldInput?: Input;
    fieldErrorMessage?: ErrorMessage | null;
    fieldLink?: Link | null;

    settings?: { withInternalID: boolean };
}


export default class Field extends Block {

    constructor(props: fieldBlockType) {


        // Label
        let fieldLabel = null
        if (props.label) {
            fieldLabel = new Label(props.label)
        }
        props.fieldLabel = fieldLabel

        // Инпут
        props.fieldInput = new Input(props.input)

        // Сообщение ошибки
        let fieldErrorMessage = null
        if (props.errorMessage) {
            fieldErrorMessage = new ErrorMessage(props.errorMessage)
        }
        props.fieldErrorMessage = fieldErrorMessage

        // Ссылка
        let fieldLink = null
        if (props.link) {
            fieldLink = new Link(props.link)
        }
        props.fieldLink = fieldLink

        props.settings = {withInternalID: true}

        super("div", props);
    }

    _inputValue() {
        return this.children.fieldInput.getInputValue()
    }

    validate(): boolean {
        return this.props.validator(this._inputValue())
    }

    clear() {
        this.children.input.clear()
    }

    getInputValue() {
        return this.child.input.getInputValue()
    }

    getName() {
        return this._inputValue()
    }

    render() {
        return this.compile(greetings, this.props);
    }
}

