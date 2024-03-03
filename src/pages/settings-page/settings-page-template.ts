// language=hbs

export default `
    <div class="{{className}}">
        <form class="settings-data">
            {{{ settingsImg }}}
            {{{ settingsLoginLabel }}}
            {{{ settingsLoginInput }}}
            <hr>
            {{{ settingsNameLabel }}}
            {{{ settingsNameInput }}}
            <hr>
            {{{ settingsSecondNameLabel }}}
            {{{ settingsSecondNameInput }}}
            <hr>
            {{{ settingsEmailLabel }}}
            {{{ settingsEmailInput }}}
            <hr>
            {{{ settingsPhoneLabel }}}
            {{{ settingsPhoneInput }}}
            <hr>
            {{{ settingsDataLink }}}
            {{{ settingsPasswordLink }}}
            {{{ buttonWithImg }}}    
        </form>
        <div class="settings-window">
            {{{ settingsPlugLink }}}
        </div>
    </div>
`;

