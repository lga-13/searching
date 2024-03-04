// language=hbs

export default `
    <div class="{{className}}">
        {{{ formTitle }}}
        {{{ formLoginLabel }}}
        {{{ formLoginInput }}}
        {{{ loginErrorMessage}}}
        {{{ formPasswordLabel }}}
        {{{ formPasswordInput }}}
        {{{ passwordErrorMessage }}}
        {{{ loginFormPasswordLink }}}
        {{{ loginFormButton }}}
        {{{ loginFormLink }}}
    </div>
`;