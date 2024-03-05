// language=hbs

export default `
    <div class="{{className}}">
        {{{ formTitle }}}
        {{#each formFields}}
            {{{ this }}}
        {{/each}}
        {{{ formButton }}}
        {{{ formLink }}}
    </div>
`;