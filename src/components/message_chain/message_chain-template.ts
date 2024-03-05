// language=hbs


export default `
    <div class="message-chain">
        <div class="message-chain__header">
            <div class="message-chain__data-sender">
                <img class="message-chain__img" src="{{srcName}}" alt="photo"/>
                {{{ senderName }}}
            </div>
            {{{ moreButton }}}
        </div>
        <div class="message-chain__message-chain">
            {{{ dataTitle }}}
            {{#each messages}}
                {{#if me}}
                <div class="message-chain__sender-message">
                    {{ text }}
                        <div class="message-chain__time-message">
                            {{ time }}
                        </div>
                </div>
                <script src="message_chain-dynamic-box.ts"></script>
                {{else}}
                    <div class="message-chain__recipient-message">
                        {{ text }} 
                        <div class="message-chain__time-message">
                            {{ time }}
                        </div>
                    </div>
                    <script src="message_chain-dynamic-box.ts"></script>
                {{/if}}
                <br>
            {{/each}}
        </div>
        <div class="message-chain__message-field">
            {{{ attachmentsButton }}}
            {{{ messageInput }}}
            {{{ sendButton }}}
        </div>
    </div>
`;