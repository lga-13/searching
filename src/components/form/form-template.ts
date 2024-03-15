// language=hbs

export default `
    <form class="{{className}}">
        {{#if title}}
            {{{ formTitle }}}
        {{/if}}
        {{#if img}}
            <img class="{{ imgClass }}" src="{{ srcNameAvatar }}" alt="photo"/>
        {{/if}}
        {{#each formFields}}
            {{{ this }}}
        {{/each}}
        {{#if toggleButton}}
            {{{ toggleButton }}}
        {{/if}}
        {{{ formButton }}}
        {{#if link}}
            {{{ formLink }}}
        {{/if}}
        {{#if buttonBlueBack}}
            {{{ buttonBlueBack }}}
        {{/if}}
    </form>
`;