// language=hbs

export default `
<div>
    {{#if label}}{{{ label }}}{{/if}}
    <div class="form__input-message-error">
        {{{ input }}}
        {{#if errorMessage}}{{{ errorMessage }}}{{/if}}
    </div>
    {{{ link }}}
</div>
`;