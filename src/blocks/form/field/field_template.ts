// language=hbs

export default `
<div>
    {{#if fieldLabel }}{{{ fieldLabel }}}{{/if}}
    <div class="form__input-message-error">
        {{{ fieldInput }}}
        {{#if fieldErrorMessage }}{{{ fieldErrorMessage }}}{{/if}}
    </div>
    {{#if fieldLink }}{{{ fieldLink }}}{{/if}}
</div>
`;