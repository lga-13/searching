// language=hbs

export default `
    <form class="{{className}}">
        <div class="change-data-form__avatar">
            {{{ changeDataFormImg }}}
            {{{ changeDataFormLink }}}
        </div>
        {{{ changeDataFormLoginLabel }}}
        {{{ changeDataFormLoginInput }}}
        {{{ changeDataFormNameLabel }}}
        {{{ changeDataFormNameInput }}}
        {{{ changeDataFormSecondNameLabel }}}
        {{{ changeDataFormSecondNameInput }}}
        {{{ changeDataFormEmailLabel }}}
        {{{ changeDataFormEmailInput }}}
        {{{ changeDataFormPhoneLabel }}}
        {{{ changeDataFormPhoneInput }}}
        {{{ changeDataFormButton }}}
        {{{ buttonWithImg }}}
    </form>
`;