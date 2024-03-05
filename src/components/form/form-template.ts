// language=hbs

export default `
    <div class="{{className}}">
        {{{ formTitle }}}
        {{#each formFields}}
            {{{ this }}}
        {{/each}}
        {{{ loginFormPasswordLink }}}
        {{{ formButton }}}
        {{{ loginFormLink }}}
    </div>
`;