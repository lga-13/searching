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
                {{{ this }}}
            {{/each}}
        </div>
        <div class="message-chain__message-field">
            {{{ attachmentsButton }}}
            {{{ messageInput }}}
            {{{ sendButton }}}
        </div>
    </div>
`;