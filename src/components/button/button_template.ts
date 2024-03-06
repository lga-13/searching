// language=hbs

export default `
<button class="{{ className }}" type="{{ typeName }}">
    {{{ text }}}
    {{#if img}}
        <img src="{{ srcName }}" alt="btn"/>
    {{/if}}
</button>
`;