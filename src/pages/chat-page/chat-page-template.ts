// language=hbs

export default `
    <div class="chats">
        <div class="chats-tape">
            <div class="chats__account-nav">
                {{{ accountLink }}}
            </div>
            <form class="chats__search-box">
                {{{ searchForm }}}
            </form>
            {{{ chatAvatarImg }}}
            {{{ chatsList }}}
        </div>
        <div class="message-chain">
            {{{ messageChain }}}
        </div>
        {{{ chatPlug }}}
    </div>
`