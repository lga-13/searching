// language=hbs

export default `
    <hr>
    <div class="chats__message">
        <img class="chats__img" src="{{srcName}}" alt="btn"/>
        <div class="chats__text">
            <span class="chats__message-sender">{{sender}}</span>
            <div class="chats__message-answer">
                <span class="chats__your-message">{{your}}</span>
                <span class="chats__message-content">{{content}}</span>
            </div>
        </div>
        <div class="chats__time-and-count">
            <span class="chats__time">{{time}}</span>
            {{#if count}}
                <span class="chats__count">
                    {{count}}
                </span>
            {{/if}}
        </div>
    </div>
`