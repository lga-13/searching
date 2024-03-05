// language=hbs

export default `
    <form class="{{className}}">
        {{{ changePasswordFormImg }}}
        {{{ PasswordLabel }}}
        {{{ PasswordInput }}}
        {{{ passwordErrorMessage }}}
        {{{ newPasswordLabel }}}
        {{{ newPasswordInput }}}
        {{{ newPasswordErrorMessage }}}
        {{{ repeatNewPasswordLabel }}}
        {{{ repeatNewPasswordInput }}}
        {{{ repeatNewPasswordErrorMessage }}}
        {{{ changePasswordFormButton }}}
        {{{ buttonBlueBack }}}
    </form>
`;