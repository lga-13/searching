// language=hbs

export default `
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
    {{{ messageInput }}}
`;