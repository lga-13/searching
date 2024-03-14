import Block from "../base/block.ts";
import greetings from "./button_template.ts"


export default class Button extends Block {

    // Кнопка

    constructor(props: {className: string, typeName:string, text: string, settings: {withInternalID: true},
                        events: {click: (event)=>void, keydown: (event)=>void}}) {
        // Создаём враппер DOM-элемент button
        super("div", props);

        this.element.tabIndex = 0;
        const button = this;


        this.element.addEventListener('keydown', function(event){
            if (event.code === "Enter") {
                props.events.click.call(button, event);
            }
        });
    }

    render() {
        return this.compile(greetings, this.props);
    }
}

