// language=hbs

export default `
    <div class="chats">
        <div class="chats-tape">
            <div class="chats__account-nav">
                <a class="chats__account" href="#">Аккаунт</a>
            </div>
            <form class="chats__search-box">
                {{{ chatSearch }}}
                <button class="chats__search-btn" type="submit" value="Search">
                    <img src="/src/public/static/img/search.svg" alt="search">
                </button>
            </form>
            {{{ chatsList }}}
        </div>
        <div class="chats-plug">
            <a class="chats-plug__message" href="#">Выберите чат, чтобы начать общаться.</a>
        </div>
    </div>
`