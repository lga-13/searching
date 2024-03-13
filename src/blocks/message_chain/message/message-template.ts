// language=hbs

export default `
    {{#if me}}
        <div class="message-chain__sender-message">
            {{ text }}
            <div class="message-chain__time-message">
                {{ time }}
            </div>
        </div>
        <script src="../message_chain-dynamic-box.ts"></script>
    {{else}}
        <div class="message-chain__recipient-message">
            {{ text }}
            <div class="message-chain__time-message">
                {{ time }}
            </div>
        </div>
        <script src="../message_chain-dynamic-box.ts"></script>
    {{/if}}
    <br>
`