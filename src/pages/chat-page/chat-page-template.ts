// language=hbs

import MessageChain from "../../components/message_chain/message_chain.ts";

export default `
    <div class="chats">
        <div class="chats-tape">
            <div class="chats__account-nav">
                {{{ accountLink }}}
            </div>
            <form class="chats__search-box">
                {{{ chatSearch }}}
                <button class="chats__search-btn" type="submit" value="Search">
                    <img src="/src/public/static/img/search.svg" alt="search">
                </button>
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