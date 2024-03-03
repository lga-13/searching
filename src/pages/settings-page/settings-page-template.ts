// language=hbs

export default `
    <div class="{{className}}">
        <form class="settings-data">
            {{{ settingsImg }}}
            {{{ settingsLoginLabel }}}
            {{{ settingsLoginInput }}}
            {{{ settingsNameLabel }}}
            {{{ settingsNameInput }}}
            {{{ settingsSecondNameLabel }}}
            {{{ settingsSecondNameInput }}}
            {{{ settingsEmailLabel }}}
            {{{ settingsEmailInput }}}
            {{{ settingsPhoneLabel }}}
            {{{ settingsPhoneInput }}}
            {{{ settingsDataLink }}}
            {{{ settingsPasswordLink }}}
            {{{ buttonWithImg }}}
        </form>
        <div class="settings-window">
            {{{ settingsPlugLink }}}
        </div>
    </div>
`;

