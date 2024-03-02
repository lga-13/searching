import './style.css'
import Button, {render} from "./components/button.ts";
import UserProfile from "./pages/main_page.ts";


const button = new Button({
    className: 'my-class',
    text: 'Click me',
    settings: {withInternalID: true},
    events: {
        // Названия события точно такие же, как и у первого аргумента addEventListener:
        // click, mouseEnter, ...
        click: event => {
            console.log(event);
        },
    },
    })

const profile = new UserProfile(
    {
        userName: 'John Doe',
        settings: {withInternalID: true},
        button: button
    })

render("#app", profile);

// Через секунду контент изменится сам, достаточно обновить пропсы
// setTimeout(() => {
//     button.setProps({
//         className: 'otherClass',
//         child: 'Click me, please',
//     });
// }, 1000);
