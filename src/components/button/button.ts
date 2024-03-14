import Block from "../base/block.ts";
import greetings from "./button_template.ts"


export default class Button extends Block {

    // Кнопка

    constructor(props: {className: string, typeName:string, text: string, settings: {withInternalID: true},
                        events: {click: (event)=>void, keydown: (event)=>void}}) {
        // Создаём враппер DOM-элемент button
        super("div", props);
        const button = this.element.querySelector('button');
        button.addEventListener('keydown',(event: KeyboardEvent) => {
            if (event.key === 'Enter') {
                this.props.event.click(event);
            }
        });
        this.eventBus().emit(Block.EVENTS.FLOW_CDM, button);

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                button.click();
            }
        });
    }

    componentDidMount() {
        this.element.querySelector('button').focus();
    }

    render() {
        return this.compile(greetings, this.props);
    }
}

