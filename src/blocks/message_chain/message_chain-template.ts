// language=hbs


export default `
    <div class="message-chain">
        <div class="message-chain__header">
            <div class="message-chain__data-sender">
                <img class="message-chain__img" src="{{srcName}}" alt="photo"/>
                {{{ messageSenderName }}}
            </div>
            {{{ messageChainMoreButton }}}
        </div>
        <div class="message-chain__message-chain">
            {{#each chainMessages}}
                {{{ this }}}
            {{/each}}
        </div>
        <div class="message-chain__message-field">
            {{{ messageChainAttachmentsButton }}}
            {{{ messageChainForm }}}
        </div>
    </div>
`;