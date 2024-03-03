import Block from "./block.ts";
import Input from "../input/input.ts";


export default class Form extends Block{

    clear() {
        Object.values(this.children).forEach(child => {
            if (child instanceof Input) {
                child.clear()
            }
        });
    }

    validate() {
        Object.values(this.children).forEach(child => {
            if (child instanceof Input) {
                child.validate()
            }
        });
    }

    get_data(): {string: string} {

        const current_condition = {}

        Object.values(this.children).forEach(child => {
            if (child instanceof Input) {
                current_condition[child.getName()] = child.getInputValue();
            }
        })
        return current_condition
    }

}