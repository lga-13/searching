// language=hbs

export default `
    <form class="{{className}}">
        {{#if formTitle }}
            {{{ formTitle }}}
        {{/if}}
        {{#if img}}
            <img class="{{ imgClass }}" src="{{ srcNameAvatar }}" alt="photo"/>
        {{/if}}
        {{#each formFields}}
            {{{ this }}}
        {{/each}}
        {{#if formToggleButtons}}
            {{#each formToggleButtons }}
            {{{ this }}}
            {{/each}}
        {{/if}}
        {{{ formButton }}}
        {{#if formLink }}
            {{{ formLink }}}
        {{/if}}
        {{#if buttonBlueBack}}
            {{{ buttonBlueBack }}}
        {{/if}}
    </form>
`;