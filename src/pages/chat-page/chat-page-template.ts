// language=hbs

export default `
    <div class="chats">
        <div class="chats-tape">
            <div class="chats__container-nav">
                <div class="chats__account-nav">
                    {{{ accountLink }}}
                </div>
                <form class="chats__search-box">
                    {{{ searchForm }}}
                </form>
            </div>
            <div class="chat-list">
                {{{ chatAvatarImg }}}
                {{{ chatsList }}}
            </div>
        </div>
        <div class="message-chain">
            {{{ messageChain }}}
        </div>
        {{{ chatPlug }}}
    </div>
`