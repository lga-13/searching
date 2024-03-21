// language=hbs

export default `
    {{#if active}}
        <div class="chats__message-active">
    {{else}}
        <div class="chats__message">
    {{/if}}
        <img class="chats__img" src="{{srcName}}" alt="btn"/>
        <div class="chats__text">
            <span class="chats__message-sender">
                {{sender}}
            </span>
            <div class="chats__message-answer">
                {{#if your}}
                    <span class="chats__your-message">
                        Вы:
                    </span>
                {{/if}}
                <span class="chats__message-content">
                    {{content}}
                </span>
            </div>
        </div>
        <div class="chats__time-and-count">
            <span class="chats__time">
                {{time}}
            </span>
            {{#if count}}
                <span class="chats__count">
                    {{count}}
                </span>
            {{/if}}
        </div>
    </div>
`;
