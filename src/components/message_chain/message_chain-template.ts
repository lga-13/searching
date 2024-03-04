// language=hbs


export default `
    {{{ senderName }}}
    {{{ settingsButton }}}
    {{#each messages}}
        
        {{#if me}}
        <div style="text-align: right;">
            {{ text }} - {{ time }}
        </div>
        
        {{else}}
            <div style="text-align: left;">
                я: {{ text }} - {{ time }}
            </div>
        {{/if}}
        <p>
    {{/each}}
    {{{ attachmentsButton }}}
    {{{ messageInput }}}
    {{{ sendButton }}}
`;