// language=hbs

export default `
    {{#if me}}
        <div class="message-chain__sender-message">
    {{else}}
        <div class="message-chain__recipient-message">
    {{/if}}
        {{ text }}
            <div class="message-chain__time-message">
                {{ time }}
            </div>
        <div class="message-chain__read-flag">
        {{#if read}}
            <p>✓✓</p>
        {{ else }}
            <p class="message-chain__unread">✓</p>
        {{/if}}
        </div>
        </div>
        <script src="../message_chain-dynamic-box.ts"></script>
    <br>
`