import './style.css'
import Button, {render} from "./button.ts";

const button = new Button({
    className: 'my-class',
    child: 'Click me',
});

console.log("Button", button)

// app — это class дива в корне DOM
render("#app", button);

// Через секунду контент изменится сам, достаточно обновить пропсы
setTimeout(() => {
    button.setProps({
        className: 'otherClass',
        child: 'Click me, please',
    });
}, 1000);
