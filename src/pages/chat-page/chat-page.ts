import "./chat-page.css";
import Block from "../../components/base/block.ts";
import Img from "../../components/img/img.ts";
import Sender from "../../components/sender/sender.ts"
import YourMessage from "../../components/message/your_message.ts";
import ContentMessage from "../../components/message/message_content.ts";
import Time from "../../components/time/time.ts";
import Count from "../../components/count/count.ts";
import Input from "../../components/input/input.ts";
import Link from "../../components/links/link.ts";
import ButtonWithImage from "../../components/buttons/button_with_img.ts";
import search from "../../public/static/img/search.svg";

export default class ChatPage extends Block {
    constructor(props) {
        super('div', props);
        this.chatsElements = this.props.chatData.map(chat => {
            return {
                'img': new Img({
                    'class': 'chats__img',
                    'src': chat.img,
                    'alt': 'photo'
                }),
                'sender': new Sender({
                    'class': 'chats__message-sender',
                    'text': chat.sender
                }),
                'yourMessage': chat.yourMessage ? new YourMessage({
                    'class': 'chats__your-message',
                    'text': chat.yourMessage
                }) : null,
                'contenMessage': new ContentMessage({
                    'class': 'chats__message-content',
                    'text': chat.content
                }),
                'time': new Time({
                    'class': 'chats__time',
                    'text': chat.time
                }),
                'count': chat.count ? new Count({
                    'class': 'chats__count',
                    'text': chat.count
                }) : null
            };
        });
    }

    render() {
        const accountlink = new Link({
            class: 'chats__account',
            href: "#",
            text: 'Аккаунт'
        });
        const input = new Input( {
            class: 'chats__search-input',
            type: 'text',
            placeholder: 'Поиск'
        })
        const buttonwithimg = new ButtonWithImage( {
            class: 'chats__search-btn',
            type: 'button',
            href: '',
            src: search,
            alt: 'search'
        })
        const pluglink = new Link({
            class: 'chats-plug__message',
            href: "#",
            text: 'Выберите чат, чтобы начать общаться.'
        });

        const chatsElementsHtml = this.chatsElements.map(element =>
            `<div class="chats-hr"><hr></div>
             <div class='chats__message'>
                ${element.img.render()}
                <div class="chats__text">
                    ${element.sender.render()}
                    <div class="chats__message-answer">
                        ${element.yourMessage ? element.yourMessage.render() : ''}
                        ${element.contenMessage.render()}
                    </div>
                </div>
                <div class="chats__time-and-count">
                    ${element.time.render()}
                    ${element.count ? element.count.render() : ''}
                </div>
             </div>`
        ).join('');

        return `
        <div class="chats">
            <div class="chats-tape">
                <div class="chats__account-nav">
                    ${accountlink.render()}
                </div>
                <form class="chats__search-box">
                    ${input.render()}
                    ${buttonwithimg.render()}
                </form>
                ${chatsElementsHtml}                
            </div>
            <div class="chats-plug">
                ${pluglink.render()}
            </div>
        </div>
        `;
    }
}
window.onload = function() {
    // Выбираем первый элемент с классом 'chats-hr'
    var elem = document.querySelector('.chats-hr');

    // Если элемент найден, устанавливаем его margin в 0
    if (elem) {
        elem.style.marginTop = "0";
    }
};

import "./login-form.css"
import greetings from "./login-form-template.ts"






export default class ChatPage extends Form {

    constructor(props: {}) {
        // Создаём враппер DOM-элемент button
        super("div", props);
    }


    render() {
        return this.compile(greetings, this.props);
    }
}