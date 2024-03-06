// language=hbs

export default `
<button class="{{ className }}" type="{{ typeName }}">
    {{{ text }}}
    {{#if img}}
        <img src="{{ srcNameImg }}" alt="btn"/>
    {{/if}}
</button>
`;